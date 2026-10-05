// Saves the motorhome checklist PDF into one Google Drive folder.
//
// Setup (once):
// 1. Go to script.google.com, click New project, and paste this file in.
// 2. Click Deploy > New deployment > type "Web app".
//      Execute as: Me
//      Who has access: Anyone
// 3. Approve the Drive permission prompt when asked.
// 4. Set the passcode: Project Settings (gear icon) > Script properties >
//    Add script property. Name: PASSCODE. Value: the passcode you will type
//    on the site. It lives only in Google, never in this repo. Without it,
//    every save is refused.
// 5. Copy the Web app URL and paste it into APPS_SCRIPT_URL in config.js.
// After editing this code later, use Deploy > Manage deployments > Edit >
// New version, so the URL stays the same.

const FOLDER_ID = "1T7caoWS4-vGxigEbCMA8A1ZGbEY3EShH";
const MAX_BASE64_CHARS = 10 * 1024 * 1024; // roughly a 7 MB PDF

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const passcode = PropertiesService.getScriptProperties().getProperty("PASSCODE");
    if (!passcode) throw new Error("Passcode is not set up in Script properties");
    if (data.passcode !== passcode) throw new Error("Wrong passcode");
    if (!data.filename || !data.pdfBase64) throw new Error("Missing filename or PDF data");
    if (data.pdfBase64.length > MAX_BASE64_CHARS) throw new Error("PDF is too large");

    const name = String(data.filename).replace(/[^\w.\- ]/g, "_").slice(0, 120);
    if (!/\.pdf$/i.test(name)) throw new Error("Filename must end in .pdf");

    const bytes = Utilities.base64Decode(data.pdfBase64);
    const header = String.fromCharCode.apply(null, bytes.slice(0, 4).map(function (b) { return b & 255; }));
    if (header !== "%PDF") throw new Error("File is not a PDF");

    const file = DriveApp.getFolderById(FOLDER_ID).createFile(Utilities.newBlob(bytes, "application/pdf", name));
    return reply({ ok: true, name: file.getName(), url: file.getUrl() });
  } catch (err) {
    return reply({ ok: false, error: String(err.message || err) });
  }
}

// Opening the URL in a browser is a quick way to confirm the deployment works.
function doGet() {
  return reply({ ok: true, service: "motorhome-checklist-drive-saver" });
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

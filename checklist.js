// ==========================================================
// Motorhome Purchase Checklist
// To change the checklist, edit the SECTIONS data below.
//   type "checklist" -> groups of tick-able items
//   type "details"   -> fill-in fields (plus optional groups)
//   type "redflags"  -> read-only list of dealbreakers
//   type "issues"    -> editable table of problems found
// ==========================================================

const SECTIONS = [
  { id:"bring", title:"What to Bring", type:"checklist", groups:[
    { items:[
      "Printed or digital copy of this checklist",
      "Gloves for opening access panels and bays",
      "Flashlight",
      "Plug-in 110V outlet tester",
      "Multimeter for battery voltage",
      "Moisture meter",
      "Tire tread depth gauge and tire pressure gauge",
      "Phone or camera for photos of problem areas and data plates",
      "Step ladder if the roof is walkable and the seller allows access"
    ]}
  ]},

  { id:"docs", title:"Unit Details, Documents & History", type:"details",
    fields:[
      ["Year / Make / Model"],["Class (A, B, C)"],["VIN"],["Mileage"],
      ["Generator hours"],["Asking price"],["Length / Height / Width"],
      ["GVWR and weight"],["Tank capacities: fuel, propane, fresh, gray, black",true]
    ],
    groups:[
    { items:[
      "VIN on the title matches the VIN on the chassis and the coach data plate",
      "Title is clean, with no salvage, flood or rebuilt brand",
      "Run a title history report before committing",
      "Federal Certification Label is present and legible",
      "RVIA seal is present (indicates the unit was built to NFPA 1192 standards for propane, detectors and egress windows)",
      "Maintenance records and receipts are available",
      "Owner manuals for the coach and major appliances are included",
      "Check for open recalls on both the chassis and the coach",
      "Registration is current",
      "Ask why the seller is selling, how often the unit was used, and how it was stored",
      "Ask about any accidents, leaks or major repairs"
    ]}
  ]},

  { id:"water", title:"Water Intrusion & Structure", type:"checklist",
    intro:"Water damage is the most expensive problem to find after purchase. Any notable sign of a leak that was not properly repaired can be reason to walk away.",
    groups:[
    { title:"Ceilings and walls", items:[
      "Press on ceilings for softness, especially near vents, AC units and roof penetrations",
      "Look for stains, ripples or delamination on interior walls",
      "Check wall bases at floor level for discoloration or softness",
      "Look inside upper cabinets for water marks on the woodwork",
      "Use a moisture meter along seams, corners and around openings"
    ]},
    { title:"Windows and openings", items:[
      "Look for stains on flooring or carpet under each window",
      "Press around each window frame for soft spots",
      "Check door frames and the entry step area"
    ]},
    { title:"Windshield", items:[
      "Push gently on the windshield and watch for movement",
      "Look for gaps or holes in the adhesive around the windshield",
      "Check the cab ceiling and dash area above the windshield for water marks"
    ]},
    { title:"Floors", items:[
      "Walk the entire floor and feel for soft or spongy spots",
      "Pay attention in front of the toilet, shower, sinks and entry door",
      "From outside, look up inside the storage bays at the underside of the floor for discoloration or rot"
    ]},
    { title:"Exterior walls", items:[
      "Look down each sidewall from an angle for bubbling or delamination",
      "Look for cracks or discoloration in fiberglass and around seams"
    ]},
    { title:"Roof", intro:"Most leaks start on the roof. Confirm with the seller that the roof is walkable before going up; if not, inspect from a ladder at each corner.", items:[
      "Identify the roof material (rubber, TPO, fiberglass or aluminum) and ask its age",
      "Look for cracks, tears, bubbles or loose membrane",
      "Inspect sealant around every vent, AC unit, skylight, antenna and solar mount",
      "Note cracked, dried or peeling sealant",
      "Check roof seams and the edge trim along both sides, front and rear",
      "Look for fresh caulk or patches that could be covering a past leak, and ask about them",
      "Check that the roof ladder is secure with no movement",
      "Look for pooling water marks or debris buildup",
      "Ask when the roof was last resealed or recoated"
    ]}
  ]},

  { id:"exterior", title:"Exterior, Slide-outs & Awnings", type:"checklist", groups:[
    { title:"Body and paint", items:[
      "Walk around the full unit and note dents, scrapes and cracks",
      "Look for mismatched paint or fresh paint that may hide repairs",
      "Check front cap and rear cap for cracks or stress lines",
      "Check decals and graphics for fading or peeling"
    ]},
    { title:"Windows and doors", items:[
      "Windows open, close and lock, with tight seals and no cracks",
      "Entry door and screen door open, close and latch properly",
      "Door locks and keys work for every lock, including bays"
    ]},
    { title:"Slide-outs", items:[
      "Extend and retract each slide fully, listening for grinding or straining",
      "Slide moves smoothly and evenly, without stopping or tilting",
      "Seals and wipers are intact and seat tightly when open and closed",
      "Inspect the slide floor and underside for rot or soft spots",
      "Check slide toppers for tears"
    ]},
    { title:"Awnings", items:[
      "Open and close each awning as designed, manual or powered",
      "Inspect the fabric for tears, mildew or sun damage while open",
      "Check arms and hardware for bends or loose mounts"
    ]},
    { title:"Steps, bays and accessories", items:[
      "Entry steps extend and retract smoothly, manual or motorized",
      "Storage bay doors open, close and latch, with dry interiors",
      "Exterior lights, marker lights and porch light work",
      "Hitch and tow wiring work, if you plan to tow a car"
    ]}
  ]},

  { id:"tires", title:"Tires, Chassis & Undercarriage", type:"checklist", groups:[
    { title:"Tires", items:[
      "Read the DOT date code on every tire; tires older than about 5 years are due for replacement regardless of tread",
      "Check all tires, including the inner tires on the duals and the spare",
      "Look for dry rot or cracking on the sidewalls",
      "Measure tread depth on each tire",
      "Look for uneven wear, which can signal suspension or alignment problems",
      "Check tire pressures against the placard",
      "Confirm all tires are the same size and load rating"
    ]},
    { title:"Frame and running gear", items:[
      "Inspect the frame for rust, cracks or welds that suggest repairs",
      "Check suspension components, springs or airbags, and shocks",
      "Look for fluid leaks on the ground under the unit",
      "Inspect brake lines and visible brake components",
      "Check exhaust system for rust, holes or loose hangers",
      "Inspect the underbelly for damage, missing covering or rodent entry points",
      "Leveling jacks extend, hold and retract fully, with no leaks"
    ]}
  ]},

  { id:"engine", title:"Engine & Drivetrain", type:"checklist",
    intro:"If possible, ask the seller not to start the engine before you arrive, so you can hear a cold start.",
    groups:[
    { title:"Before starting", items:[
      "Note engine type (gas or diesel) and whether it is front or rear mounted",
      "Check engine oil level and condition",
      "Check transmission fluid level and color",
      "Check coolant level and condition",
      "Check brake fluid and power steering fluid",
      "Look for fluid leaks under the engine and transmission",
      "Inspect belts for cracking or glazing",
      "Inspect hoses for cracks, bulges or soft spots",
      "Check the engine compartment for rodent nests or chewed wiring",
      "Check chassis battery terminals for corrosion"
    ]},
    { title:"Running", items:[
      "Engine starts promptly on the chassis battery without hesitation",
      "Listen for knocking, ticking or irregular idle",
      "Watch for excessive smoke from the exhaust",
      "Note any warning lights on the dash",
      "Ask for oil change, transmission service and coolant service history"
    ]}
  ]},

  { id:"cab", title:"Cab, Cockpit & Test Drive", type:"checklist", groups:[
    { title:"Cab and cockpit", items:[
      "All gauges work, including fuel, temperature, oil pressure and speedometer",
      "Headlights, high beams, turn signals, brake lights and hazards work",
      "Horn, wipers and washer fluid work",
      "Dash AC and heat work",
      "Driver and passenger seats adjust and swivel if equipped",
      "Seat belts latch and retract",
      "Cab door locks and windows operate correctly",
      "Backup camera and side cameras work",
      "Mirrors adjust, including powered or heated mirrors",
      "Dash radio and any navigation work"
    ]},
    { title:"Test drive", items:[
      "Drive at both low speed and highway speed",
      "Transmission shifts smoothly through all gears without slipping or delay",
      "Brakes stop straight without pulling, grinding or pulsing",
      "Parking brake holds on an incline",
      "Steering tracks straight without excessive wander or play",
      "Listen for clunks or rattles over bumps",
      "Cruise control works",
      "Engine temperature stays steady during the drive",
      "Recheck the ground for new leaks after parking"
    ]}
  ]},

  { id:"electrical", title:"Electrical & Generator", type:"checklist", groups:[
    { title:"House batteries and 12V", items:[
      "Check house battery terminals for corrosion and tight connections",
      "Measure resting voltage: about 12.6V means fully charged; below 12.0V suggests a battery that needs replacing",
      "Ask the age and type of the house batteries",
      "Test every 12V light and fan individually",
      "Battery disconnect switch works"
    ]},
    { title:"Shore power and 110V", items:[
      "Inspect the shore power cord and plug for damage or burn marks",
      "Plug in to shore power and confirm the converter charges the batteries",
      "Test the inverter, if equipped",
      "Test every 110V outlet with a plug-in outlet tester",
      "Check the breaker panel and fuse panel for scorch marks or missing covers",
      "Look for damaged or spliced wiring anywhere it is visible",
      "Test the automatic transfer switch, if equipped",
      "Test solar panels and charge controller, if equipped"
    ]},
    { title:"Generator", items:[
      "Record generator hours",
      "Generator starts promptly from the inside switch and at the unit",
      "Let it run several minutes and listen for steady operation",
      "Confirm it powers interior outlets and the AC",
      "Note how loud it is and check the exhaust for smoke",
      "Ask for generator service history"
    ]}
  ]},

  { id:"plumbing", title:"Plumbing & Tanks", type:"checklist", groups:[
    { items:[
      "Fill the fresh water tank and run the water pump",
      "Pump cycles off once pressure builds and does not keep cycling (constant cycling suggests a leak)",
      "Connect to city water and confirm pressure at the faucets",
      "Run water at every faucet and showerhead, hot and cold",
      "Flush the toilet and confirm it seals and holds water",
      "Look under every sink and behind access panels for leaks",
      "Check fittings near the water pump and water heater",
      "Shut off the water and check again for drips",
      "Tank level monitors read plausibly for fresh, gray and black",
      "Open and close the gray and black dump valves; handles move freely",
      "Inspect the sewer hose and storage compartment",
      "Check for sewer odors inside the coach",
      "Inspect the water filter and water heater bypass valves",
      "Ask how the unit was winterized and when"
    ]}
  ]},

  { id:"propane", title:"Propane, Appliances & HVAC", type:"checklist", groups:[
    { title:"Propane system", items:[
      "Inspect the propane tank for rust, dents and a current certification",
      "Check the regulator and visible lines for damage",
      "Smell for propane at the tank, lines and appliances",
      "Ask when the propane system was last leak tested"
    ]},
    { title:"Water heater", items:[
      "Lights on propane, if equipped",
      "Heats on electric, if equipped",
      "Inspect the anode rod and tank for corrosion and rust"
    ]},
    { title:"Kitchen appliances", items:[
      "Refrigerator cools on both electric and propane, if it is a two-way or three-way unit",
      "Freezer reaches freezing temperature",
      "Every stove burner lights and holds a flame",
      "Oven lights and heats, if equipped",
      "Microwave or convection oven works",
      "Range hood fan and light work"
    ]},
    { title:"Heating and cooling", items:[
      "Run each AC unit on shore power; it should blow cold within about five minutes",
      "Furnace ignites and blows warm air from all registers",
      "Thermostats control each zone",
      "Ceiling vent fans open, close and run",
      "Heat pump works, if equipped"
    ]}
  ]},

  { id:"interior", title:"Interior: Kitchen, Bath, Bedroom & Living", type:"checklist", groups:[
    { title:"General", items:[
      "Note any musty smell, which can point to hidden water damage or mold",
      "Look for signs of rodents or insects, including droppings and chewed materials",
      "Check for smoke or pet odors",
      "Cabinets and drawers open, close and latch for travel",
      "Blinds and shades raise, lower and stay in place",
      "Upholstery, cushions and flooring are in acceptable condition"
    ]},
    { title:"Kitchen", items:[
      "Countertops and sink are free of cracks and water damage",
      "Cabinet bottoms under the sink are dry and solid"
    ]},
    { title:"Bathroom", items:[
      "Shower pan and surround have no cracks",
      "Floor around the toilet is solid",
      "Bathroom vent fan works",
      "Check headroom in the shower if anyone in the household is tall"
    ]},
    { title:"Bedroom", items:[
      "Bed lifts or slides for storage access as designed",
      "Closets and wardrobe doors operate",
      "Check under the mattress platform for moisture"
    ]},
    { title:"Living area", items:[
      "Sofa and dinette convert to beds, if designed to",
      "TVs, entertainment system and antenna work",
      "Fireplace works, if equipped",
      "Count sleeping and seat belted positions against your needs"
    ]}
  ]},

  { id:"safety", title:"Safety Equipment", type:"checklist", groups:[
    { items:[
      "Smoke detector is present and tests",
      "Carbon monoxide detector is present, tests and is within its expiration date",
      "Propane leak detector is present and tests",
      "Fire extinguisher is present, charged and within date",
      "Emergency exit window opens fully and is unobstructed",
      "Entry door and exit window latches release easily from inside"
    ]}
  ]},

  { id:"redflags", title:"Red Flags & Dealbreakers", type:"redflags",
    intro:"Any of these is reason to walk away or to bring in a professional before negotiating further.",
    items:[
      "Persistent roof leaks, soft floors or visible mold",
      "Fresh paint or caulk covering problem areas",
      "Damaged or spliced wiring",
      "Uneven tire wear, which can signal suspension problems",
      "Missing or incomplete maintenance records",
      "A branded title (salvage, flood or rebuilt) or VIN mismatches",
      "Seller refuses an independent inspection",
      "Engine or generator that will not start, or smokes heavily",
      "Transmission slipping or harsh shifts",
      "Slide-outs that bind, stall or show rot underneath"
    ]},

  { id:"issues", title:"Your Notes & Dealbreakers", type:"issues" },

  { id:"pro", title:"Professional Inspection", type:"checklist",
    intro:"This checklist helps you screen units, but it does not replace a paid professional inspection.",
    groups:[
    { items:[
      "Book an NRVIA-certified RV inspector for the coach (roof, structure, systems and appliances)",
      "Book a separate chassis or diesel mechanic for the engine, transmission and brakes, since RV inspectors focus mostly on the coach",
      "Ask for fluid analysis (oil, coolant, transmission) on higher-mileage or diesel units",
      "Make the purchase contingent on a satisfactory inspection"
    ]}
  ]}
];

// Short names for the sticky nav chips (falls back to the full title).
const SHORT = {
  bring:"Bring", docs:"Documents", water:"Water & Structure", exterior:"Exterior",
  tires:"Tires & Chassis", engine:"Engine", cab:"Test Drive", electrical:"Electrical",
  plumbing:"Plumbing", propane:"Propane & HVAC", interior:"Interior", safety:"Safety",
  redflags:"Red Flags", issues:"My Notes", pro:"Pro Inspection"
};

// ----------------------------------------------------------
const STORAGE_KEY = "motorhome-checklist-v1";
const META_IDS = ["unit","seller","date","inspector"];
const ISSUE_COLS = ["issue","location","cost"];
const BLANK = () => ({ meta:{}, checks:{}, flags:{}, notes:{}, fields:{}, flagged:{}, issues:[] });
let state = BLANK();
let saveTimer = null;

const $ = (id) => document.getElementById(id);
function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Flatten the checklist items so we can count and look them up.
function checklistItems(sec, si){
  const out = [];
  (sec.groups || []).forEach((g, gi) => {
    g.items.forEach((label, ii) => out.push({ id:`s${si}g${gi}i${ii}`, label, group:g.title || "" }));
  });
  return out;
}

// ---------------- Build the page ----------------
function itemHTML(it){
  return `
    <div class="item" data-id="${it.id}">
      <div class="item-row">
        <input type="checkbox" id="c-${it.id}" aria-label="${esc(it.label)}">
        <label class="item-label" for="c-${it.id}">${esc(it.label)}</label>
        <div class="item-tools">
          <button type="button" class="tool-btn" data-act="flag" aria-pressed="false">⚑ Flag</button>
          <button type="button" class="tool-btn" data-act="note">+ Note</button>
        </div>
      </div>
      <div class="note-box">
        <textarea placeholder="Details, measurements, photo reminder..."></textarea>
      </div>
    </div>`;
}

function buildSection(sec, si){
  const el = document.createElement("div");
  el.className = "section" + (sec.type === "redflags" ? " redflags" : "");
  el.id = "sec-" + si;
  let body = "";
  if(sec.intro) body += `<div class="section-intro">${esc(sec.intro)}</div>`;

  if(sec.type === "details"){
    body += `<div class="field-grid">` + sec.fields.map((f, fi) =>
      `<div class="pf${f[1] ? " wide" : ""}"><label for="fd-${fi}">${esc(f[0])}</label><input id="fd-${fi}" data-field="${fi}"></div>`
    ).join("") + `</div>`;
  }

  (sec.groups || []).forEach((g, gi) => {
    if(g.title) body += `<div class="group-title">${esc(g.title)}</div>`;
    if(g.intro) body += `<div class="section-intro">${esc(g.intro)}</div>`;
    body += g.items.map((label, ii) => itemHTML({ id:`s${si}g${gi}i${ii}`, label })).join("");
  });

  if(sec.type === "redflags"){
    body += `<ul class="redflag-list">${sec.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
  }

  if(sec.type === "issues"){
    body += `
      <div class="issues-wrap">
        <table class="issues">
          <thead><tr><th>Issue found</th><th>Location</th><th>Est. cost</th><th>Dealbreaker?</th><th></th></tr></thead>
          <tbody id="issues-body"></tbody>
        </table>
        <div class="btn-row" style="margin-top:10px">
          <button type="button" class="phase-btn" id="btn-add-issue">+ Add row</button>
        </div>
      </div>`;
  }

  el.innerHTML = `
    <div class="section-head" role="button" tabindex="0" aria-expanded="true">
      <div class="section-head-left">
        <span class="section-num">${String(si + 1).padStart(2, "0")}</span>
        <span class="section-title">${esc(sec.title)}</span>
      </div>
      <div><span class="section-count" id="count-${si}"></span><span class="chevron">▾</span></div>
    </div>
    <div class="section-body">${body}</div>`;

  const head = el.querySelector(".section-head");
  const toggle = () => {
    el.classList.toggle("collapsed");
    head.setAttribute("aria-expanded", String(!el.classList.contains("collapsed")));
  };
  head.onclick = toggle;
  head.onkeydown = (e) => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); toggle(); } };
  return el;
}

function buildDOM(){
  const sectionsEl = $("sections"), nav = $("nav-scroll");
  SECTIONS.forEach((sec, si) => {
    sectionsEl.appendChild(buildSection(sec, si));
    const chip = document.createElement("div");
    chip.className = "nav-chip";
    chip.id = "chip-" + si;
    chip.textContent = (si + 1) + ". " + (SHORT[sec.id] || sec.title);
    chip.onclick = () => {
      const s = $("sec-" + si);
      s.classList.remove("collapsed");
      s.scrollIntoView({ behavior:"smooth", block:"start" });
    };
    nav.appendChild(chip);
  });

  // One delegated handler for every checklist item.
  sectionsEl.addEventListener("change", (e) => {
    const item = e.target.closest(".item");
    if(!item || e.target.type !== "checkbox") return;
    const id = item.dataset.id;
    if(e.target.checked) state.checks[id] = 1; else delete state.checks[id];
    refreshItem(id); refreshCounts(); scheduleSave();
  });
  sectionsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".tool-btn");
    if(!btn) return;
    const item = btn.closest(".item"), id = item.dataset.id;
    if(btn.dataset.act === "flag"){
      if(state.flagged[id]) delete state.flagged[id]; else state.flagged[id] = 1;
      refreshItem(id); refreshCounts(); scheduleSave();
    } else {
      item.querySelector(".note-box").classList.toggle("open");
    }
  });
  sectionsEl.addEventListener("input", (e) => {
    const item = e.target.closest(".item");
    if(item && e.target.tagName === "TEXTAREA"){
      state.notes[item.dataset.id] = e.target.value;
      refreshCounts(); scheduleSave();
    } else if(e.target.dataset.field !== undefined){
      state.fields[e.target.dataset.field] = e.target.value;
      scheduleSave();
    } else if(e.target.closest(".issues")){
      readIssues(); scheduleSave();
    }
  });
  // Issue table buttons
  const addBtn = $("btn-add-issue");
  if(addBtn) addBtn.onclick = () => { readIssues(); state.issues.push({}); renderIssues(); scheduleSave(); };
  sectionsEl.addEventListener("click", (e) => {
    const del = e.target.closest(".del-row");
    if(!del) return;
    readIssues();
    state.issues.splice(Number(del.dataset.row), 1);
    renderIssues(); scheduleSave();
  });
}

// ---------------- Issues table ----------------
function renderIssues(){
  const body = $("issues-body");
  if(!body) return;
  if(!state.issues.length) state.issues = [{}, {}, {}];
  body.innerHTML = state.issues.map((r, i) => `
    <tr data-row="${i}">
      ${ISSUE_COLS.map(c => `<td><input class="table-input" data-col="${c}" value="${esc(r[c] || "")}" aria-label="${c}"></td>`).join("")}
      <td class="chk"><input type="checkbox" data-col="dealbreaker" ${r.dealbreaker ? "checked" : ""} aria-label="Dealbreaker" style="width:20px;height:20px"></td>
      <td><button type="button" class="tool-btn del-row" data-row="${i}" aria-label="Delete row">✕</button></td>
    </tr>`).join("");
}
function readIssues(){
  const rows = document.querySelectorAll("#issues-body tr");
  if(!rows.length) return;
  state.issues = Array.from(rows).map(tr => {
    const r = {};
    tr.querySelectorAll("[data-col]").forEach(inp => {
      r[inp.dataset.col] = inp.type === "checkbox" ? inp.checked : inp.value;
    });
    return r;
  });
}

// ---------------- Refresh UI from state ----------------
function refreshItem(id){
  const item = document.querySelector(`.item[data-id="${id}"]`);
  if(!item) return;
  const checked = !!state.checks[id], flagged = !!state.flagged[id];
  item.classList.toggle("checked", checked);
  item.classList.toggle("flagged", flagged);
  item.querySelector("input[type=checkbox]").checked = checked;
  const fb = item.querySelector('[data-act="flag"]');
  fb.classList.toggle("on", flagged);
  fb.setAttribute("aria-pressed", String(flagged));
  const note = state.notes[id];
  const nb = item.querySelector(".note-box");
  if(note){ item.querySelector("textarea").value = note; nb.classList.add("open"); }
}

function refreshCounts(){
  let total = 0, done = 0;
  const flagged = [];
  SECTIONS.forEach((sec, si) => {
    const items = checklistItems(sec, si);
    let secDone = 0, secFlag = false;
    items.forEach(it => {
      total++;
      if(state.checks[it.id]){ done++; secDone++; }
      if(state.flagged[it.id]){
        secFlag = true;
        flagged.push({ sec:sec.title, label:it.label, note:state.notes[it.id] || "" });
      }
    });
    const countEl = $("count-" + si);
    if(items.length){
      countEl.textContent = secDone + "/" + items.length;
      $("sec-" + si).classList.toggle("is-complete", secDone === items.length);
    } else countEl.textContent = "";
    const chip = $("chip-" + si);
    chip.classList.toggle("complete", items.length > 0 && secDone === items.length);
    chip.classList.toggle("has-flag", secFlag);
  });

  const pct = total ? Math.round(done / total * 100) : 0;
  $("gauge-fill").style.width = pct + "%";
  $("gauge-pct").textContent = pct + "%";
  $("gauge-text").textContent = done + " of " + total + " items checked";
  $("mini-gauge-fill").style.width = pct + "%";
  $("mini-gauge-pct").textContent = pct + "%";
  $("mini-gauge-text").textContent = done + " of " + total;

  $("summary-grid").innerHTML = [
    [done, "Checked"], [total - done, "Remaining"], [flagged.length, "Flagged"]
  ].map(([n, l]) => `<div class="sg-cell"><div class="sg-num">${n}</div><div class="sg-label">${l}</div></div>`).join("");

  $("flag-block").innerHTML = flagged.length ? `
    <div class="flag-list">
      <div class="fl-title">⚑ Flagged items (${flagged.length})</div>
      <ul>${flagged.map(f => `<li><strong>${esc(f.label)}</strong> — ${esc(f.sec)}${f.note ? " — " + esc(f.note) : ""}</li>`).join("")}</ul>
    </div>` : "";
}

// ---------------- Save / load ----------------
function scheduleSave(){ clearTimeout(saveTimer); saveTimer = setTimeout(saveState, 400); }
function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    showToast("Saved");
  }catch(e){ showToast("Could not save on this device"); }
}
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) state = Object.assign(BLANK(), JSON.parse(raw));
  }catch(e){ /* nothing saved yet */ }

  META_IDS.forEach(k => { $("f-" + k).value = state.meta[k] || ""; });
  document.querySelectorAll("[data-field]").forEach(inp => { inp.value = state.fields[inp.dataset.field] || ""; });
  document.querySelectorAll(".item").forEach(it => refreshItem(it.dataset.id));
  renderIssues();
  refreshCounts();
}
function showToast(msg){
  const t = $("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove("show"), 1200);
}

// ---------------- Header fields & buttons ----------------
META_IDS.forEach(k => {
  $("f-" + k).oninput = (e) => { state.meta[k] = e.target.value; scheduleSave(); };
});

$("btn-collapse").onclick = () => document.querySelectorAll(".section").forEach(s => s.classList.add("collapsed"));
$("btn-expand").onclick = () => document.querySelectorAll(".section").forEach(s => s.classList.remove("collapsed"));
$("btn-print").onclick = () => window.print();

$("btn-reset").onclick = () => {
  if(!confirm("Reset all checkmarks, flags, notes and fields? This cannot be undone.")) return;
  state = BLANK();
  document.querySelectorAll(".note-box.open").forEach(n => n.classList.remove("open"));
  document.querySelectorAll(".item textarea").forEach(t => { t.value = ""; });
  META_IDS.forEach(k => { $("f-" + k).value = ""; });
  document.querySelectorAll("[data-field]").forEach(i => { i.value = ""; });
  document.querySelectorAll(".item").forEach(it => refreshItem(it.dataset.id));
  renderIssues();
  refreshCounts();
  saveState();
};

$("btn-export").onclick = () => {
  const L = [];
  const m = state.meta;
  L.push("MOTORHOME PURCHASE INSPECTION REPORT");
  L.push("Unit: " + (m.unit || "—") + "   Date: " + (m.date || "—"));
  L.push("Seller: " + (m.seller || "—") + "   Inspected by: " + (m.inspector || "—"));
  L.push("");
  SECTIONS.forEach((sec, si) => {
    L.push("== " + sec.title + " ==");
    if(sec.type === "details"){
      sec.fields.forEach((f, fi) => L.push("  " + f[0] + ": " + (state.fields[fi] || "—")));
    }
    if(sec.type === "redflags"){
      sec.items.forEach(i => L.push("  ⚑ " + i));
    }
    if(sec.type === "issues"){
      readIssues();
      state.issues.filter(r => r.issue || r.location || r.cost).forEach(r =>
        L.push("  - " + (r.issue || "—") + " | " + (r.location || "—") + " | " + (r.cost || "—") + (r.dealbreaker ? " | DEALBREAKER" : "")));
    }
    checklistItems(sec, si).forEach(it => {
      const mark = state.checks[it.id] ? "[x]" : "[ ]";
      const flag = state.flagged[it.id] ? " (FLAGGED)" : "";
      const note = state.notes[it.id] ? "  [note: " + state.notes[it.id] + "]" : "";
      L.push("  " + mark + " " + it.label + flag + note);
    });
    L.push("");
  });
  const text = L.join("\n");
  (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
    .then(() => showToast("Report copied to clipboard"))
    .catch(() => showToast("Copy failed — use Print instead"));
};

buildDOM();
loadState();

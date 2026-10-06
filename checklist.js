// ==========================================================
// Motorhome Purchase Checklist
// To change the checklist, edit the SECTIONS data below.
// (The "what to bring" and red flags lists live on motorhome-howto.html.)
// Each section has numbered subsections ("groups"), each with tick-able items.
//   type "checklist" -> groups of tick-able items
//   type "details"   -> fill-in fields, then the groups
// An item is either a plain string, or ["text", "stable-id"]. The id is what a
// saved checklist remembers, so keep it if you reword or move an item.
// ==========================================================

const SECTIONS = [
  { id:"docs", title:"Unit Details, Documents & History", type:"details", fields:[["Year / Make / Model"],
      ["Class (A, B, C)"],
      ["VIN"],
      ["Mileage"],
      ["Generator hours"],
      ["Length / Height / Width"],
      ["GVWR and weight"],
      ["Tank capacities: fuel, propane, fresh, gray, black",true]], groups:[
    { title:"Paperwork & History", items:[
      ["VIN on the title matches the VIN on the chassis and the coach data plate","s0g0i0"],
      ["Title is clean, with no salvage, flood or rebuilt brand","s0g0i1"],
      ["Run a title history report before committing","s0g0i2"],
      ["Federal Certification Label is present and legible","s0g0i3"],
      ["RVIA seal is present (indicates the unit was built to NFPA 1192 standards for propane, detectors and egress windows)","s0g0i4"],
      ["Maintenance records and receipts are available","s0g0i5"],
      ["Owner manuals for the coach and major appliances are included","s0g0i6"],
      ["Check for open recalls on both the chassis and the coach","s0g0i7"],
      ["Registration is current","s0g0i8"],
      ["Ask why the seller is selling, how often the unit was used, and how it was stored","s0g0i9"],
      ["Ask about any accidents, leaks or major repairs","s0g0i10"]
    ]}
  ]},

  { id:"exterior", title:"Exterior Walkaround", type:"checklist", intro:"Walk around the whole unit first, then look up at the roof and down at the tires and underside.", groups:[
    { title:"Body & Paint", items:[
      ["Walk around the full unit and note dents, scrapes and cracks","s2g0i0"],
      ["Look for mismatched paint or fresh paint that may hide repairs","s2g0i1"],
      ["Check front cap and rear cap for cracks or stress lines","s2g0i2"],
      ["Check decals and graphics for fading or peeling","s2g0i3"]
    ]},
    { title:"Windows & Doors", items:[
      ["Windows open, close and lock, with tight seals and no cracks","s2g1i0"],
      ["Entry door and screen door open, close and latch properly","s2g1i1"],
      ["Door locks and keys work for every lock, including bays","s2g1i2"]
    ]},
    { title:"Exterior Walls", items:[
      ["Look down each sidewall from an angle for bubbling or delamination","s1g4i0"],
      ["Look for cracks or discoloration in fiberglass and around seams","s1g4i1"]
    ]},
    { title:"Roof", intro:"Most leaks start on the roof. Confirm with the seller that the roof is walkable before going up; if not, inspect from a ladder at each corner.", items:[
      ["Identify the roof material (rubber, TPO, fiberglass or aluminum) and ask its age","s1g5i0"],
      ["Look for cracks, tears, bubbles or loose membrane","s1g5i1"],
      ["Inspect sealant around every vent, AC unit, skylight, antenna and solar mount","s1g5i2"],
      ["Note cracked, dried or peeling sealant","s1g5i3"],
      ["Check roof seams and the edge trim along both sides, front and rear","s1g5i4"],
      ["Look for fresh caulk or patches that could be covering a past leak, and ask about them","s1g5i5"],
      ["Check that the roof ladder is secure with no movement","s1g5i6"],
      ["Look for pooling water marks or debris buildup","s1g5i7"],
      ["Ask when the roof was last resealed or recoated","s1g5i8"]
    ]},
    { title:"Windshield", items:[
      ["Push gently on the windshield and watch for movement","s1g2i0"],
      ["Look for gaps or holes in the adhesive around the windshield","s1g2i1"],
      ["Check the cab ceiling and dash area above the windshield for water marks","s1g2i2"]
    ]},
    { title:"Slide-outs", items:[
      ["Extend and retract each slide fully, listening for grinding or straining","s2g2i0"],
      ["Slide moves smoothly and evenly, without stopping or tilting","s2g2i1"],
      ["Seals and wipers are intact and seat tightly when open and closed","s2g2i2"],
      ["Inspect the slide floor and underside for rot or soft spots","s2g2i3"],
      ["Check slide toppers for tears","s2g2i4"]
    ]},
    { title:"Awnings", items:[
      ["Open and close each awning as designed, manual or powered","s2g3i0"],
      ["Inspect the fabric for tears, mildew or sun damage while open","s2g3i1"],
      ["Check arms and hardware for bends or loose mounts","s2g3i2"]
    ]},
    { title:"Steps, Bays & Accessories", items:[
      ["Entry steps extend and retract smoothly, manual or motorized","s2g4i0"],
      ["Storage bay doors open, close and latch, with dry interiors","s2g4i1"],
      ["Exterior lights, marker lights and porch light work","s2g4i2"],
      ["Hitch and tow wiring work, if you plan to tow a car","s2g4i3"]
    ]},
    { title:"Tires", items:[
      ["Read the DOT date code on every tire; tires older than about 5 years are due for replacement regardless of tread","s3g0i0"],
      ["Check all tires, including the inner tires on the duals and the spare","s3g0i1"],
      ["Look for dry rot or cracking on the sidewalls","s3g0i2"],
      ["Measure tread depth on each tire","s3g0i3"],
      ["Look for uneven wear, which can signal suspension or alignment problems","s3g0i4"],
      ["Check tire pressures against the placard","s3g0i5"],
      ["Confirm all tires are the same size and load rating","s3g0i6"]
    ]},
    { title:"Frame & Undercarriage", items:[
      ["Inspect the frame for rust, cracks or welds that suggest repairs","s3g1i0"],
      ["Check suspension components, springs or airbags, and shocks","s3g1i1"],
      ["Look for fluid leaks on the ground under the unit","s3g1i2"],
      ["Inspect brake lines and visible brake components","s3g1i3"],
      ["Check exhaust system for rust, holes or loose hangers","s3g1i4"],
      ["Inspect the underbelly for damage, missing covering or rodent entry points","s3g1i5"],
      ["Leveling jacks extend, hold and retract fully, with no leaks","s3g1i6"]
    ]}
  ]},

  { id:"engine", title:"Engine & Under the Hood", type:"checklist", intro:"If possible, ask the seller not to start the engine before you arrive, so you can hear a cold start.", groups:[
    { title:"Before Starting", items:[
      ["Note engine type (gas or diesel) and whether it is front or rear mounted","s4g0i0"],
      ["Check engine oil level and condition","s4g0i1"],
      ["Check transmission fluid level and color","s4g0i2"],
      ["Check coolant level and condition","s4g0i3"],
      ["Check brake fluid and power steering fluid","s4g0i4"],
      ["Look for fluid leaks under the engine and transmission","s4g0i5"],
      ["Inspect belts for cracking or glazing","s4g0i6"],
      ["Inspect hoses for cracks, bulges or soft spots","s4g0i7"],
      ["Check the engine compartment for rodent nests or chewed wiring","s4g0i8"],
      ["Check chassis battery terminals for corrosion","s4g0i9"]
    ]},
    { title:"Running", items:[
      ["Engine starts promptly on the chassis battery without hesitation","s4g1i0"],
      ["Listen for knocking, ticking or irregular idle","s4g1i1"],
      ["Watch for excessive smoke from the exhaust","s4g1i2"],
      ["Note any warning lights on the dash","s4g1i3"],
      ["Ask for oil change, transmission service and coolant service history","s4g1i4"]
    ]}
  ]},

  { id:"interior", title:"Interior", type:"checklist", groups:[
    { title:"First Impressions", items:[
      ["Note any musty smell, which can point to hidden water damage or mold","s9g0i0"],
      ["Look for signs of rodents or insects, including droppings and chewed materials","s9g0i1"],
      ["Check for smoke or pet odors","s9g0i2"],
      ["Cabinets and drawers open, close and latch for travel","s9g0i3"],
      ["Blinds and shades raise, lower and stay in place","s9g0i4"],
      ["Upholstery, cushions and flooring are in acceptable condition","s9g0i5"]
    ]},
    { title:"Living Area", items:[
      ["Sofa and dinette convert to beds, if designed to","s9g4i0"],
      ["TVs, entertainment system and antenna work","s9g4i1"],
      ["Fireplace works, if equipped","s9g4i2"],
      ["Count sleeping and seat belted positions against your needs","s9g4i3"]
    ]},
    { title:"Kitchen", items:[
      ["Countertops and sink are free of cracks and water damage","s9g1i0"],
      ["Cabinet bottoms under the sink are dry and solid","s9g1i1"],
      ["Refrigerator cools on both electric and propane, if it is a two-way or three-way unit","s8g2i0"],
      ["Freezer reaches freezing temperature","s8g2i1"],
      ["Every stove burner lights and holds a flame","s8g2i2"],
      ["Oven lights and heats, if equipped","s8g2i3"],
      ["Microwave or convection oven works","s8g2i4"],
      ["Range hood fan and light work","s8g2i5"]
    ]},
    { title:"Bathroom", items:[
      ["Shower pan and surround have no cracks","s9g2i0"],
      ["Floor around the toilet is solid","s9g2i1"],
      ["Bathroom vent fan works","s9g2i2"],
      ["Check headroom in the shower if anyone in the household is tall","s9g2i3"]
    ]},
    { title:"Bedroom", items:[
      ["Bed lifts or slides for storage access as designed","s9g3i0"],
      ["Closets and wardrobe doors operate","s9g3i1"],
      ["Check under the mattress platform for moisture","s9g3i2"]
    ]},
    { title:"Ceilings & Walls", intro:"Water damage is the most expensive problem to find after purchase. Any notable sign of a leak that was not properly repaired can be reason to walk away.", items:[
      ["Press on ceilings for softness, especially near vents, AC units and roof penetrations","s1g0i0"],
      ["Look for stains, ripples or delamination on interior walls","s1g0i1"],
      ["Check wall bases at floor level for discoloration or softness","s1g0i2"],
      ["Look inside upper cabinets for water marks on the woodwork","s1g0i3"],
      ["Use a moisture meter along seams, corners and around openings","s1g0i4"]
    ]},
    { title:"Windows & Openings", items:[
      ["Look for stains on flooring or carpet under each window","s1g1i0"],
      ["Press around each window frame for soft spots","s1g1i1"],
      ["Check door frames and the entry step area","s1g1i2"]
    ]},
    { title:"Floors", items:[
      ["Walk the entire floor and feel for soft or spongy spots","s1g3i0"],
      ["Pay attention in front of the toilet, shower, sinks and entry door","s1g3i1"],
      ["From outside, look up inside the storage bays at the underside of the floor for discoloration or rot","s1g3i2"]
    ]}
  ]},

  { id:"electrical", title:"Electrical & Generator", type:"checklist", groups:[
    { title:"House Batteries & 12V", items:[
      ["Check house battery terminals for corrosion and tight connections","s6g0i0"],
      ["Measure resting voltage: about 12.6V means fully charged; below 12.0V suggests a battery that needs replacing","s6g0i1"],
      ["Ask the age and type of the house batteries","s6g0i2"],
      ["Test every 12V light and fan individually","s6g0i3"],
      ["Battery disconnect switch works","s6g0i4"]
    ]},
    { title:"Shore Power & 110V", items:[
      ["Inspect the shore power cord and plug for damage or burn marks","s6g1i0"],
      ["Plug in to shore power and confirm the converter charges the batteries","s6g1i1"],
      ["Test the inverter, if equipped","s6g1i2"],
      ["Test every 110V outlet with a plug-in outlet tester","s6g1i3"],
      ["Check the breaker panel and fuse panel for scorch marks or missing covers","s6g1i4"],
      ["Look for damaged or spliced wiring anywhere it is visible","s6g1i5"],
      ["Test the automatic transfer switch, if equipped","s6g1i6"],
      ["Test solar panels and charge controller, if equipped","s6g1i7"]
    ]},
    { title:"Generator", items:[
      ["Record generator hours","s6g2i0"],
      ["Generator starts promptly from the inside switch and at the unit","s6g2i1"],
      ["Let it run several minutes and listen for steady operation","s6g2i2"],
      ["Confirm it powers interior outlets and the AC","s6g2i3"],
      ["Note how loud it is and check the exhaust for smoke","s6g2i4"],
      ["Ask for generator service history","s6g2i5"]
    ]}
  ]},

  { id:"plumbing", title:"Plumbing & Tanks", type:"checklist", groups:[
    { title:"Water Supply & Pump", items:[
      ["Fill the fresh water tank and run the water pump","s7g0i0"],
      ["Pump cycles off once pressure builds and does not keep cycling (constant cycling suggests a leak)","s7g0i1"],
      ["Connect to city water and confirm pressure at the faucets","s7g0i2"],
      ["Inspect the water filter and water heater bypass valves","s7g0i12"],
      ["Ask how the unit was winterized and when","s7g0i13"]
    ]},
    { title:"Faucets, Toilet & Leaks", items:[
      ["Run water at every faucet and showerhead, hot and cold","s7g0i3"],
      ["Flush the toilet and confirm it seals and holds water","s7g0i4"],
      ["Look under every sink and behind access panels for leaks","s7g0i5"],
      ["Check fittings near the water pump and water heater","s7g0i6"],
      ["Shut off the water and check again for drips","s7g0i7"]
    ]},
    { title:"Tanks & Dump", items:[
      ["Tank level monitors read plausibly for fresh, gray and black","s7g0i8"],
      ["Open and close the gray and black dump valves; handles move freely","s7g0i9"],
      ["Inspect the sewer hose and storage compartment","s7g0i10"],
      ["Check for sewer odors inside the coach","s7g0i11"]
    ]}
  ]},

  { id:"propane", title:"Propane, Heating & Cooling", type:"checklist", groups:[
    { title:"Propane System", items:[
      ["Inspect the propane tank for rust, dents and a current certification","s8g0i0"],
      ["Check the regulator and visible lines for damage","s8g0i1"],
      ["Smell for propane at the tank, lines and appliances","s8g0i2"],
      ["Ask when the propane system was last leak tested","s8g0i3"]
    ]},
    { title:"Water Heater", items:[
      ["Lights on propane, if equipped","s8g1i0"],
      ["Heats on electric, if equipped","s8g1i1"],
      ["Inspect the anode rod and tank for corrosion and rust","s8g1i2"]
    ]},
    { title:"Heating & Cooling", items:[
      ["Run each AC unit on shore power; it should blow cold within about five minutes","s8g3i0"],
      ["Furnace ignites and blows warm air from all registers","s8g3i1"],
      ["Thermostats control each zone","s8g3i2"],
      ["Ceiling vent fans open, close and run","s8g3i3"],
      ["Heat pump works, if equipped","s8g3i4"]
    ]}
  ]},

  { id:"safety", title:"Safety Equipment", type:"checklist", groups:[
    { title:"Detectors, Extinguisher & Exits", items:[
      ["Smoke detector is present and tests","s10g0i0"],
      ["Carbon monoxide detector is present, tests and is within its expiration date","s10g0i1"],
      ["Propane leak detector is present and tests","s10g0i2"],
      ["Fire extinguisher is present, charged and within date","s10g0i3"],
      ["Emergency exit window opens fully and is unobstructed","s10g0i4"],
      ["Entry door and exit window latches release easily from inside","s10g0i5"]
    ]}
  ]},

  { id:"drive", title:"Cab & Test Drive", type:"checklist", groups:[
    { title:"Cockpit", items:[
      ["All gauges work, including fuel, temperature, oil pressure and speedometer","s5g0i0"],
      ["Headlights, high beams, turn signals, brake lights and hazards work","s5g0i1"],
      ["Horn, wipers and washer fluid work","s5g0i2"],
      ["Dash AC and heat work","s5g0i3"],
      ["Driver and passenger seats adjust and swivel if equipped","s5g0i4"],
      ["Seat belts latch and retract","s5g0i5"],
      ["Cab door locks and windows operate correctly","s5g0i6"],
      ["Backup camera and side cameras work","s5g0i7"],
      ["Mirrors adjust, including powered or heated mirrors","s5g0i8"],
      ["Dash radio and any navigation work","s5g0i9"]
    ]},
    { title:"Test Drive", items:[
      ["Drive at both low speed and highway speed","s5g1i0"],
      ["Transmission shifts smoothly through all gears without slipping or delay","s5g1i1"],
      ["Brakes stop straight without pulling, grinding or pulsing","s5g1i2"],
      ["Parking brake holds on an incline","s5g1i3"],
      ["Steering tracks straight without excessive wander or play","s5g1i4"],
      ["Listen for clunks or rattles over bumps","s5g1i5"],
      ["Cruise control works","s5g1i6"],
      ["Engine temperature stays steady during the drive","s5g1i7"],
      ["Recheck the ground for new leaks after parking","s5g1i8"]
    ]}
  ]}
];

// Short names for the sticky nav chips (falls back to the full title).
const SHORT = {
  docs:"Documents", exterior:"Exterior", engine:"Engine", interior:"Interior",
  electrical:"Electrical", plumbing:"Plumbing", propane:"Propane & HVAC",
  safety:"Safety", drive:"Test Drive"
};

// ----------------------------------------------------------
const STORAGE_KEY = "motorhome-checklist-v1";
const META_IDS = ["unit","seller","date","price","link"];
const ISSUE_COLS = ["issue","location","cost"];
const BLANK = () => ({ meta:{}, checks:{}, flags:{}, notes:{}, fields:{}, flagged:{}, issues:[], custom:{}, customSeq:0, fv:3 });
let state = BLANK();
let saveTimer = null;

const $ = (id) => document.getElementById(id);
function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Items in one group: the built-in ones plus any added to this form only.
function groupItems(sec, si, gi){
  const g = sec.groups[gi];
  const base = g.items.map((it, ii) => {
    const label = Array.isArray(it) ? it[0] : it;
    return { id:(Array.isArray(it) && it[1]) || `n${si}g${gi}i${ii}`, label };
  });
  const extra = (state.custom[si + "-" + gi] || []).map(c => ({ id:c.id, label:c.label, custom:true }));
  return base.concat(extra);
}

// Flatten the checklist items so we can count and look them up.
function checklistItems(sec, si){
  const out = [];
  (sec.groups || []).forEach((g, gi) => groupItems(sec, si, gi).forEach(it =>
    out.push(Object.assign({ group:g.title || "" }, it))));
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
          ${it.custom ? '<button type="button" class="tool-btn del-custom" aria-label="Remove this item">✕</button>' : ""}
        </div>
      </div>
      <div class="note-preview" data-act="note" hidden></div>
    </div>`;
}

function subsectionHTML(key, title, inner, num){
  return `
    <div class="subsection collapsed" id="sub-${key}">
      <div class="sub-head" role="button" tabindex="0" aria-expanded="false">
        <span class="sub-title"><span class="sub-num">${String(num).padStart(2, "0")}</span>${esc(title)}</span>
        <span class="sub-right"><span class="sub-count" id="subcount-${key}"></span><span class="chevron">▾</span></span>
      </div>
      <div class="sub-body">${inner}</div>
    </div>`;
}

function buildSection(sec, si){
  const el = document.createElement("div");
  el.className = "section collapsed" + (sec.type === "redflags" ? " redflags" : "");
  el.id = "sec-" + si;
  let body = "", subNum = 0;
  if(sec.intro) body += `<div class="section-intro">${esc(sec.intro)}</div>`;

  if(sec.type === "details"){
    const grid = `<div class="field-grid">` + sec.fields.map((f, fi) =>
      `<div class="pf${f[1] ? " wide" : ""}"><label for="fd-${fi}">${esc(f[0])}</label><input id="fd-${fi}" data-field="${fi}"></div>`
    ).join("") + `</div>`;
    body += subsectionHTML(si + "-f", "Unit details", grid, ++subNum);
  }

  (sec.groups || []).forEach((g, gi) => {
    const inner = (g.intro ? `<div class="section-intro">${esc(g.intro)}</div>` : "") +
      `<div id="items-${si}-${gi}"></div>
       <div class="add-area" data-group="${si}-${gi}">
         <button type="button" class="add-item-btn">+ Add item</button>
         <div class="add-form" hidden>
           <input class="add-input" placeholder="Describe the item..." aria-label="New item">
           <button type="button" class="add-confirm">Add</button>
           <button type="button" class="add-cancel">Done</button>
         </div>
       </div>`;
    body += g.title ? subsectionHTML(si + "-" + gi, g.title, inner, ++subNum) : inner;
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
    <div class="section-head" role="button" tabindex="0" aria-expanded="false">
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

function renderGroupItems(si, gi){
  const box = $(`items-${si}-${gi}`);
  if(!box) return;
  box.innerHTML = groupItems(SECTIONS[si], si, gi).map(itemHTML).join("");
  box.querySelectorAll(".item").forEach(it => refreshItem(it.dataset.id));
}
function renderGroups(){
  SECTIONS.forEach((sec, si) => (sec.groups || []).forEach((g, gi) => renderGroupItems(si, gi)));
}

function toggleSub(head){
  const sub = head.parentElement;
  sub.classList.toggle("collapsed");
  head.setAttribute("aria-expanded", String(!sub.classList.contains("collapsed")));
}

// ---- Items added to this form only ----
function closeAddForm(area){
  area.querySelector(".add-form").hidden = true;
  area.querySelector(".add-item-btn").hidden = false;
}
function addCustomItem(area){
  const input = area.querySelector(".add-input"), label = input.value.trim();
  if(!label){ input.focus(); return; }
  const key = area.dataset.group, parts = key.split("-").map(Number);
  state.customSeq = (state.customSeq || 0) + 1;
  (state.custom[key] = state.custom[key] || []).push({ id:`c${state.customSeq}`, label });
  input.value = "";
  renderGroupItems(parts[0], parts[1]); refreshCounts(); scheduleSave();
  input.focus(); // stay open so several items can be added in a row
}
function removeCustomItem(id){
  const key = Object.keys(state.custom).find(k => state.custom[k].some(c => c.id === id));
  if(!key || !confirm("Remove this item from this form?")) return;
  state.custom[key] = state.custom[key].filter(c => c.id !== id);
  delete state.checks[id]; delete state.flagged[id]; delete state.notes[id];
  const parts = key.split("-").map(Number);
  renderGroupItems(parts[0], parts[1]); refreshCounts(); scheduleSave();
}

// ---- Note pop-up ----
let noteId = null;
function openNote(id){
  noteId = id;
  const lab = document.querySelector(`.item[data-id="${id}"] .item-label`);
  $("note-title").textContent = lab ? lab.textContent : "";
  $("note-text").value = state.notes[id] || "";
  $("note-modal").hidden = false;
  document.body.classList.add("modal-open");
  setTimeout(() => $("note-text").focus(), 50);
}
function closeNote(){
  $("note-modal").hidden = true;
  document.body.classList.remove("modal-open");
  noteId = null;
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
      s.querySelector(".section-head").setAttribute("aria-expanded", "true");
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
    const sub = e.target.closest(".sub-head");
    if(sub){ toggleSub(sub); return; }
    const addBtn = e.target.closest(".add-item-btn");
    if(addBtn){
      const area = addBtn.closest(".add-area");
      addBtn.hidden = true; area.querySelector(".add-form").hidden = false;
      area.querySelector(".add-input").focus();
      return;
    }
    const cancel = e.target.closest(".add-cancel");
    if(cancel){ closeAddForm(cancel.closest(".add-area")); return; }
    const confirmBtn = e.target.closest(".add-confirm");
    if(confirmBtn){ addCustomItem(confirmBtn.closest(".add-area")); return; }
    const delItem = e.target.closest(".del-custom");
    if(delItem){ removeCustomItem(delItem.closest(".item").dataset.id); return; }
    const btn = e.target.closest("[data-act]");
    if(!btn) return;
    const id = btn.closest(".item").dataset.id;
    if(btn.dataset.act === "flag"){
      if(state.flagged[id]) delete state.flagged[id]; else state.flagged[id] = 1;
      refreshItem(id); refreshCounts(); scheduleSave();
    } else {
      openNote(id);
    }
  });
  sectionsEl.addEventListener("keydown", (e) => {
    const sub = e.target.closest(".sub-head");
    if(sub && e.target === sub && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); toggleSub(sub); return; }
    if(e.target.classList.contains("add-input")){
      if(e.key === "Enter"){ e.preventDefault(); addCustomItem(e.target.closest(".add-area")); }
      else if(e.key === "Escape"){ closeAddForm(e.target.closest(".add-area")); }
    }
  });
  sectionsEl.addEventListener("input", (e) => {
    if(e.target.dataset.field !== undefined){
      state.fields[e.target.dataset.field] = e.target.value;
      refreshCounts(); scheduleSave();
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

  // Note pop-up controls
  $("note-text").oninput = (e) => {
    if(!noteId) return;
    if(e.target.value) state.notes[noteId] = e.target.value; else delete state.notes[noteId];
    refreshItem(noteId); refreshCounts(); scheduleSave();
  };
  $("note-done").onclick = closeNote;
  $("note-clear").onclick = () => { $("note-text").value = ""; $("note-text").dispatchEvent(new Event("input")); $("note-text").focus(); };
  $("note-modal").addEventListener("click", (e) => { if(e.target.id === "note-modal") closeNote(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape" && !$("note-modal").hidden) closeNote(); });
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
  const fb = item.querySelector('.tool-btn[data-act="flag"]');
  fb.classList.toggle("on", flagged);
  fb.setAttribute("aria-pressed", String(flagged));
  const note = state.notes[id] || "";
  const prev = item.querySelector(".note-preview");
  prev.textContent = note; prev.hidden = !note;
  const nb = item.querySelector('.tool-btn[data-act="note"]');
  nb.textContent = note ? "✎ Note" : "+ Note";
  nb.classList.toggle("has-note", !!note);
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
    (sec.groups || []).forEach((g, gi) => {
      if(!g.title) return;
      const its = groupItems(sec, si, gi), d = its.filter(it => state.checks[it.id]).length;
      $(`subcount-${si}-${gi}`).textContent = d + "/" + its.length;
      $(`sub-${si}-${gi}`).classList.toggle("is-complete", its.length > 0 && d === its.length);
    });
    if(sec.type === "details"){
      const filled = sec.fields.filter((f, fi) => (state.fields[fi] || "").trim()).length;
      $(`subcount-${si}-f`).textContent = filled + "/" + sec.fields.length;
      $(`sub-${si}-f`).classList.toggle("is-complete", filled === sec.fields.length);
    }
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
    if(raw){
      const saved = JSON.parse(raw);
      // Older saves had "Asking price" as unit-details field 5; it moved to the header.
      if(!saved.fv){
        const f = saved.fields || {}, nf = {};
        Object.keys(f).forEach(k => { const n = Number(k); if(n < 5) nf[n] = f[k]; else if(n > 5) nf[n - 1] = f[k]; });
        saved.meta = saved.meta || {};
        if(f[5] && !saved.meta.price) saved.meta.price = f[5];
        saved.fields = nf; saved.fv = 2;
      }
      // v3 regrouped the checklist as a walkthrough. Item ids are unchanged, so ticks, flags
      // and notes carry over; only items added to a group need moving to its new home.
      if(saved.fv < 3){
        const map = {"0-0": "0-0", "2-0": "1-0", "2-1": "1-1", "1-4": "1-2", "1-5": "1-3", "1-2": "1-4", "2-2": "1-5", "2-3": "1-6", "2-4": "1-7", "3-0": "1-8", "3-1": "1-9", "4-0": "2-0", "4-1": "2-1", "9-0": "3-0", "9-4": "3-1", "9-1": "3-2", "8-2": "3-2", "9-2": "3-3", "9-3": "3-4", "1-0": "3-5", "1-1": "3-6", "1-3": "3-7", "6-0": "4-0", "6-1": "4-1", "6-2": "4-2", "7-0": "5-0", "8-0": "6-0", "8-1": "6-1", "8-3": "6-2", "10-0": "7-0", "5-0": "8-0", "5-1": "8-1"};
        const moved = {};
        Object.keys(saved.custom || {}).forEach(k => {
          const nk = map[k] || k;
          moved[nk] = (moved[nk] || []).concat(saved.custom[k]);
        });
        saved.custom = moved; saved.fv = 3;
      }
      state = Object.assign(BLANK(), saved);
    }
  }catch(e){ /* nothing saved yet */ }

  META_IDS.forEach(k => { $("f-" + k).value = state.meta[k] || ""; });
  document.querySelectorAll("[data-field]").forEach(inp => { inp.value = state.fields[inp.dataset.field] || ""; });
  renderGroups();
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

function setAllCollapsed(on){
  document.querySelectorAll(".section, .subsection").forEach(el => el.classList.toggle("collapsed", on));
  document.querySelectorAll(".section-head, .sub-head").forEach(h => h.setAttribute("aria-expanded", String(!on)));
}
$("btn-collapse").onclick = () => setAllCollapsed(true);
$("btn-expand").onclick = () => setAllCollapsed(false);
$("btn-print").onclick = () => window.print();

$("btn-reset").onclick = () => {
  if(!confirm("Start a new, blank checklist? This clears everything saved on this device for the current one, and cannot be undone.\n\nTip: tap Cancel and use Download PDF or Save to Drive first if you want to keep a copy.")) return;
  state = BLANK();
  META_IDS.forEach(k => { $("f-" + k).value = ""; });
  document.querySelectorAll("[data-field]").forEach(i => { i.value = ""; });
  renderGroups();
  renderIssues();
  refreshCounts();
  setAllCollapsed(true);
  saveState();
  window.scrollTo({ top:0, behavior:"smooth" });
  showToast("New checklist started");
};

$("btn-export").onclick = () => {
  const L = [];
  const m = state.meta;
  L.push("MOTORHOME PURCHASE INSPECTION REPORT");
  L.push("Unit: " + (m.unit || "—") + "   Date: " + (m.date || "—"));
  L.push("Seller: " + (m.seller || "—") + "   Asking price: " + (m.price || "—"));
  L.push("Listing: " + (m.link || "—"));
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

// ---------------- PDF export & Google Drive ----------------
// Keep text inside what the built-in PDF fonts can draw.
function pdfText(s){
  return String(s)
    .replace(/[—–]/g, "-").replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/…/g, "...").replace(/[^\x09\x0A\x20-\x7E -ÿ]/g, "");
}

function buildPDF(){
  readIssues();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:"pt", format:"letter" });
  const W = doc.internal.pageSize.getWidth(), M = 40;
  const INK = [31,42,55], TEAL = [43,138,114], ORANGE = [185,80,15], PEACH = [251,209,162];
  const m = state.meta;
  let total = 0, done = 0, flagCount = 0;
  SECTIONS.forEach((sec, si) => checklistItems(sec, si).forEach(it => {
    total++; if(state.checks[it.id]) done++; if(state.flagged[it.id]) flagCount++;
  }));

  doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(...ORANGE);
  doc.text("PRE-PURCHASE INSPECTION", M, 44);
  doc.setFontSize(20); doc.setTextColor(...INK);
  doc.text("Motorhome Purchase Checklist", M, 68);
  doc.setFont("helvetica", "normal"); doc.setFontSize(10);
  doc.text(pdfText("Unit: " + (m.unit || "-")), M, 90);
  doc.text(pdfText("Seller / Dealer: " + (m.seller || "-")), M, 105);
  doc.text(pdfText("Inspection date: " + (m.date || "-")), W / 2, 90);
  doc.text(pdfText("Asking price: " + (m.price || "-")), W / 2, 105);
  const link = (m.link || "").trim();
  if(/^https?:\/\//i.test(link)){
    doc.setTextColor(43, 138, 114);
    doc.textWithLink(pdfText("Listing: " + link), M, 120, { url:link, maxWidth:W - 2 * M });
    doc.setTextColor(...INK);
  } else {
    doc.text(pdfText("Listing: " + (link || "-")), M, 120, { maxWidth:W - 2 * M });
  }
  const pct = total ? Math.round(done / total * 100) : 0;
  doc.setFont("helvetica", "bold");
  doc.text(done + " of " + total + " items checked (" + pct + "%)   |   " + flagCount + " flagged", M, 143);

  let y = 157;
  const head = (text) => ({ content:pdfText(text), colSpan:3, styles:{ fillColor:PEACH, textColor:INK, fontStyle:"bold", fontSize:10.5 } });
  const common = {
    theme:"grid", margin:{ left:M, right:M },
    styles:{ font:"helvetica", fontSize:9, cellPadding:4, lineColor:[220,214,200], lineWidth:.5, textColor:INK, valign:"top" },
    headStyles:{ fillColor:TEAL, textColor:255 },
    columnStyles:{ 0:{ cellWidth:34, halign:"center", fontStyle:"bold" }, 1:{ cellWidth:"auto" }, 2:{ cellWidth:150 } }
  };

  SECTIONS.forEach((sec, si) => {
    const rows = [[head((si + 1) + ". " + sec.title)]];
    if(sec.intro) rows.push([{ content:pdfText(sec.intro), colSpan:3, styles:{ fontStyle:"italic", textColor:[91,102,114] } }]);
    if(sec.type === "details"){
      sec.fields.forEach((f, fi) => rows.push([{ content:"", styles:{} }, pdfText(f[0]), pdfText(state.fields[fi] || "-")]));
    }
    (sec.groups || []).forEach((g, gi) => {
      if(g.title) rows.push([{ content:pdfText(g.title), colSpan:3, styles:{ fontStyle:"bold", textColor:TEAL } }]);
      groupItems(sec, si, gi).forEach(({ id, label }) => {
        const status = state.flagged[id] ? "FLAG" : (state.checks[id] ? "[X]" : "[ ]");
        const row = [{ content:status, styles: state.flagged[id] ? { textColor:ORANGE } : {} }, pdfText(label), pdfText(state.notes[id] || "")];
        rows.push(row);
      });
    });
    if(sec.type === "redflags") sec.items.forEach(i => rows.push([{ content:"!", styles:{ textColor:ORANGE } }, { content:pdfText(i), colSpan:2 }]));
    if(sec.type === "issues"){
      const filled = state.issues.filter(r => r.issue || r.location || r.cost);
      if(!filled.length) rows.push([{ content:"No issues logged.", colSpan:3, styles:{ textColor:[91,102,114] } }]);
      filled.forEach(r => rows.push([
        { content:r.dealbreaker ? "STOP" : "", styles:{ textColor:ORANGE } },
        pdfText(r.issue || "-"),
        pdfText((r.location || "-") + "  |  Est. cost: " + (r.cost || "-"))
      ]));
    }
    doc.autoTable(Object.assign({}, common, { startY:y, body:rows }));
    y = doc.lastAutoTable.finalY + 14;
  });

  const pages = doc.internal.getNumberOfPages();
  for(let p = 1; p <= pages; p++){
    doc.setPage(p); doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(120);
    doc.text("Motorhome Purchase Checklist  -  page " + p + " of " + pages, W / 2, doc.internal.pageSize.getHeight() - 20, { align:"center" });
  }
  return doc;
}

function pdfFileName(){
  const m = state.meta;
  const slug = (m.unit || "motorhome").replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "motorhome";
  return "Motorhome-Inspection-" + slug + "-" + (m.date || new Date().toISOString().slice(0, 10)) + ".pdf";
}

$("btn-pdf").onclick = () => {
  if(!window.jspdf){ showToast("PDF tool did not load. Try Print instead."); return; }
  try{ buildPDF().save(pdfFileName()); showToast("PDF downloaded"); }
  catch(e){ console.error(e); showToast("Could not make the PDF"); }
};

async function uploadToDrive(){
  const url = (window.APP_CONFIG || {}).APPS_SCRIPT_URL;
  if(!url) throw new Error("no-url");
  let passcode = "";
  try{ passcode = sessionStorage.getItem("drive-passcode") || ""; }catch(e){}
  if(!passcode) passcode = prompt("Enter the passcode to save to Drive:") || "";
  if(!passcode) throw new Error("cancelled");
  const dataUri = buildPDF().output("datauristring");
  const pdfBase64 = dataUri.slice(dataUri.lastIndexOf(",") + 1);
  // text/plain keeps this a "simple" request, so the browser skips the CORS preflight Apps Script cannot answer.
  const res = await fetch(url, {
    method:"POST",
    headers:{ "Content-Type":"text/plain;charset=utf-8" },
    body: JSON.stringify({ filename: pdfFileName(), pdfBase64, passcode })
  });
  const out = await res.json();
  if(!out.ok){
    if(out.error === "Wrong passcode"){ try{ sessionStorage.removeItem("drive-passcode"); }catch(e){} }
    throw new Error(out.error || "upload-failed");
  }
  try{ sessionStorage.setItem("drive-passcode", passcode); }catch(e){}
  return out;
}

$("btn-drive").onclick = async () => {
  if(!window.jspdf){ showToast("PDF tool did not load. Try Print instead."); return; }
  const btn = $("btn-drive"), note = document.querySelector(".save-note");
  btn.disabled = true; btn.textContent = "Saving...";
  try{
    const file = await uploadToDrive();
    showToast("Saved to Drive");
    note.innerHTML = "Saved to Drive as <strong>" + esc(file.name) + "</strong>. " +
      (file.url ? '<a href="' + esc(file.url) + '" target="_blank" rel="noopener" style="color:var(--teal)">Open it</a>' : "");
  }catch(e){
    console.error(e);
    note.textContent = e.message === "no-url"
      ? "Drive is not set up yet: add the Apps Script URL in config.js. Use Download PDF for now."
      : e.message === "cancelled" ? "Save cancelled."
      : e.message === "Wrong passcode" ? "That passcode was not accepted. Try again."
      : "Could not save to Drive (" + e.message + "). Use Download PDF instead.";
    showToast("Drive save failed");
  }finally{
    btn.disabled = false; btn.textContent = "Save to Drive";
  }
};

buildDOM();
loadState();

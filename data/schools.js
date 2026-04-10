/* ============================================================
   DeKalb Schools Coalition — School Data
   Last updated: April 2026 — Round 2 SAP Scenarios (March 20, 2026)
   Source: AJC, WABE, Decaturish, Champion Newspaper reporting on DCSD Round 2
   ============================================================

   STATUS VALUES (single string OR array for multi-status):
     "closure"    → Red    — Closure / Repurpose Proposed
     "conversion" → Orange — Conversion Proposed (grade band / school type change)
     "expansion"  → Blue   — Capacity Expansion Proposed
     "move"       → Purple — Move / Relocation Proposed
     "not_closing"→ Green  — No Longer Proposed for Closure
     "pending"    → Gray   — Update Coming Soon

   MULTI-STATUS: Use an array, e.g. status: ["expansion", "conversion"]
   The card will show a badge for each status.

   sapAction: Describes DCSD's Scenario 2 proposed action.
   NOTE: Cluster table data on dekalbschoolsga.org is JavaScript-rendered and
   could not be automatically scraped. sapAction descriptions here are sourced
   from AJC, WABE, Decaturish, and Champion Newspaper coverage of Round 2.
   Verify against https://www.dekalbschoolsga.org/divisions/access-and-opportunity/sap/sap-survey
   ============================================================ */

const SCHOOLS = [

  // ════════════════════════════════════════════════════════
  //  DUNWOODY CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "vanderlyn",
    name: "Vanderlyn Elementary",
    status: "conversion",
    grades: "K–5",
    enrollment: 400,
    capacity: 600,
    cluster: "Dunwoody",
    address: "1445 Vanderlyn Dr, Dunwoody, GA 30338",
    principal: "UPDATE",
    website: "https://vanderlyne.dekalb.k12.ga.us",
    page: "schools/_template.html",
    blurb: "Ranked #4 in DeKalb County and #39 in Georgia by U.S. News & World Report.",
    sapAction: "Proposed conversion to Dunwoody High School annex.",
    onClosureList: true
  },
  {
    id: "kingsley",
    name: "Kingsley Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 400,
    capacity: 600,
    cluster: "Dunwoody",
    address: "4994 Kingsley Rd, Dunwoody, GA 30338",
    principal: "UPDATE",
    website: "https://kingsleye.dekalb.k12.ga.us",
    page: "schools/_template.html",
    blurb: "High-performing Dunwoody school with strong test scores and diverse enrollment.",
    sapAction: "Proposed for closure. Students would redistrict to remaining Dunwoody cluster schools.",
    onClosureList: true
  },
  {
    id: "chesnut",
    name: "Chesnut Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Dunwoody",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion to absorb students displaced by nearby closures.",
    sapAction: "Proposed capacity expansion to accommodate incoming students from closed Dunwoody cluster schools. Board member Ziffer noted the Dunwoody cluster would ultimately consist of three larger ES, one MS, and one HS.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  LAKESIDE CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "ashford-park",
    name: "Ashford Park Elementary",
    status: ["conversion", "closure"],
    grades: "K–5",
    enrollment: 752,
    capacity: 0,
    cluster: "Lakeside",
    address: "1200 Ashford Park Dr NE, Brookhaven, GA 30319",
    principal: "UPDATE",
    website: "https://ashfordparkes.dekalb.k12.ga.us",
    page: "schools/ashford-park.html",
    blurb: "High-performing Brookhaven neighborhood school, ranked #7 in DeKalb County.",
    sapAction: "Short-term: Following the opening of Dresden ES in 2027, Ashford Park would become a K–3 school feeding into Montgomery ES (4–5). Long-term: Proposed conversion to an Early Learning Center (ELC). Nancy Creek ES and Huntley Hills ES would also become K–3 schools under this scenario.",
    onClosureList: true
  },
  {
    id: "oak-grove",
    name: "Oak Grove Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lakeside",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Beloved Lakeside cluster neighborhood school proposed for closure in Round 2.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "evansdale",
    name: "Evansdale Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lakeside",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Lakeside cluster school; parents held visible protests at the March 23 SAP meeting.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  TUCKER CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "brockett",
    name: "Brockett Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 400,
    capacity: 600,
    cluster: "Tucker",
    address: "1275 Brockett Rd, Tucker, GA 30084",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Strong academic performance despite a majority of economically disadvantaged students.",
    sapAction: "Proposed for closure / repurpose. Listed as a near-term closure in Round 2.",
    onClosureList: true
  },
  {
    id: "midvale",
    name: "Midvale Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Tucker",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Tucker cluster school proposed for closure in both Round 1 and Round 2.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "rowland",
    name: "Rowland Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Tucker",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Tucker cluster school on the closure list in both rounds of SAP.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  CROSS KEYS CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "henderson-mill",
    name: "Henderson Mill Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Cross Keys",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Cross Keys cluster school proposed for closure in Round 2.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "john-lewis",
    name: "John Lewis Elementary",
    status: "conversion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Cross Keys",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed to convert to a PK–8 school feeding into Cross Keys High.",
    sapAction: "Proposed conversion to PK–8 school, feeding into Cross Keys High School.",
    onClosureList: false
  },
  {
    id: "montclair",
    name: "Montclair Elementary",
    status: ["conversion", "expansion"],
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Cross Keys",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to PK–8 with building expansion.",
    sapAction: "Proposed conversion to PK–8 school AND building expansion. Part of Cross Keys cluster reorganization.",
    onClosureList: false
  },
  {
    id: "woodward",
    name: "Woodward Elementary",
    status: ["conversion", "expansion"],
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Cross Keys",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to K–8 with building expansion.",
    sapAction: "Proposed conversion to K–8 school AND building expansion. Part of Cross Keys cluster reorganization.",
    onClosureList: false
  },
  {
    id: "freedom-ms",
    name: "Freedom Middle School",
    status: "closure",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Cross Keys",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for closure; a new middle school would be added at the Clarkston HS site.",
    sapAction: "Proposed for closure. Near-term priority: replaced by a new middle school to be built adjacent to Clarkston High School.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  MCNAIR CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "bob-mathis",
    name: "Bob Mathis Elementary",
    status: "conversion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an Early Learning Center.",
    sapAction: "Proposed conversion to Early Learning Center (ELC). Listed as near-term priority in Round 2.",
    onClosureList: true
  },
  {
    id: "mcnair-discovery",
    name: "McNair Discovery Learning Academy",
    status: ["conversion", "move"],
    grades: "UPDATE",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to ELC; current Terry Mill ELC would move into this building.",
    sapAction: "Proposed conversion to Early Learning Center. The current Early Learning Center at Terry Mill would relocate to this building.",
    onClosureList: true
  },
  {
    id: "elc-terry-mill",
    name: "Early Learning Center (Terry Mill)",
    status: "move",
    grades: "PK",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Current ELC proposed to move to the McNair Discovery Learning Academy building.",
    sapAction: "Proposed to relocate to the McNair Discovery Learning Academy building.",
    onClosureList: true
  },
  {
    id: "mcnair-hs",
    name: "Ronald E. McNair High School",
    status: "conversion",
    grades: "9–12",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed conversion to a 6–12 grade campus under Round 2.",
    sapAction: "Proposed conversion to 6–12 school. McNair MS students would feed directly into this expanded campus.",
    onClosureList: false
  },
  {
    id: "mcnair-ms",
    name: "McNair Middle School",
    status: "conversion",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to elementary school as McNair HS becomes 6–12.",
    sapAction: "Proposed conversion to elementary school, as McNair HS absorbs the middle school grades.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  SOUTHWEST DEKALB / COLUMBIA / MLK CLUSTERS
  // ════════════════════════════════════════════════════════
  {
    id: "browns-mill",
    name: "Browns Mill Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Southwest DeKalb",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Southwest DeKalb cluster school. Listed as a near-term closure in Round 2.",
    sapAction: "Proposed for closure. Listed as a near-term priority in Round 2.",
    onClosureList: true
  },
  {
    id: "flat-shoals",
    name: "Flat Shoals Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Southwest DeKalb",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Southwest DeKalb cluster school proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "robert-shaw",
    name: "Robert Shaw Theme ES",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Southwest DeKalb",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Southwest DeKalb themed elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "salem-ms",
    name: "Salem Middle School",
    status: "closure",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Southwest DeKalb",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Southwest DeKalb middle school proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "columbia-es",
    name: "Columbia Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Columbia",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Columbia cluster elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "columbia-ms",
    name: "Columbia Middle School",
    status: "closure",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Columbia",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Columbia cluster middle school proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "canby-lane",
    name: "Canby Lane Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Martin Luther King",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "MLK cluster elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  CEDAR GROVE / STONE MOUNTAIN / STEPHENSON CLUSTERS
  // ════════════════════════════════════════════════════════
  {
    id: "cedar-grove-es",
    name: "Cedar Grove Elementary",
    status: "conversion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Cedar Grove",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to a middle school as Cedar Grove HS becomes a 6–12 campus.",
    sapAction: "Proposed conversion to middle school. Cedar Grove HS would become a 6–12 campus, making this building available for MS use.",
    onClosureList: false
  },
  {
    id: "kelley-lake",
    name: "Kelley Lake Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Cedar Grove",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Cedar Grove cluster elementary on the SAP closure list.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "stone-mill",
    name: "Stone Mill Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Stone Mountain",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Stone Mountain cluster elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "stone-mountain-es",
    name: "Stone Mountain Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Stone Mountain",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Stone Mountain cluster elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "toney",
    name: "Toney Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Stephenson",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Stephenson cluster elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },
  {
    id: "woodridge",
    name: "Woodridge Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Stephenson",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Stephenson cluster elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  REDAN / MILLER GROVE / MLK CLUSTERS
  // ════════════════════════════════════════════════════════
  {
    id: "redan-es",
    name: "Redan Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Redan",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Redan cluster elementary. Listed as near-term closure priority in Round 2.",
    sapAction: "Proposed for closure. Listed as a near-term priority in Round 2.",
    onClosureList: true
  },
  {
    id: "redan-ms",
    name: "Redan Middle School",
    status: "closure",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Redan",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed to merge with Redan High, leaving the MS building available for other use.",
    sapAction: "Proposed for closure / merge into Redan HS as it becomes a 6–12 campus. The Redan MS building would become available.",
    onClosureList: true
  },
  {
    id: "redan-hs",
    name: "Redan High School",
    status: "conversion",
    grades: "9–12",
    enrollment: 0,
    capacity: 0,
    cluster: "Redan",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed conversion to a 6–12 campus, absorbing Redan MS.",
    sapAction: "Proposed conversion to 6–12 school. Redan MS would merge into this campus.",
    onClosureList: false
  },
  {
    id: "miller-grove-hs",
    name: "Miller Grove High School",
    status: "conversion",
    grades: "9–12",
    enrollment: 0,
    capacity: 0,
    cluster: "Miller Grove",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to a 6–12 campus under Round 2.",
    sapAction: "Proposed conversion to 6–12 school.",
    onClosureList: false
  },
  {
    id: "miller-grove-ms",
    name: "Miller Grove Middle School",
    status: "conversion",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Miller Grove",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to elementary as Miller Grove HS becomes 6–12.",
    sapAction: "Proposed conversion to elementary school as Miller Grove HS absorbs middle school grades.",
    onClosureList: false
  },
  {
    id: "mlk-hs",
    name: "Martin Luther King Jr. High School",
    status: "conversion",
    grades: "9–12",
    enrollment: 0,
    capacity: 0,
    cluster: "Martin Luther King",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Proposed conversion to a 6–12 campus under Round 2.",
    sapAction: "Proposed conversion to 6–12 school.",
    onClosureList: false
  },
  {
    id: "mcclendon",
    name: "McClendon Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Druid Hills",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Druid Hills cluster elementary proposed for closure.",
    sapAction: "Proposed for closure / repurpose.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  NEW ADDITIONS IN ROUND 2
  // ════════════════════════════════════════════════════════
  {
    id: "fairington",
    name: "Fairington Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "New addition to the closure list in Round 2 — not proposed in Round 1.",
    sapAction: "NEW — Added in Round 2. Proposed for closure. Listed as a near-term priority.",
    onClosureList: true
  },
  {
    id: "oak-view",
    name: "Oak View Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "New addition to the closure list in Round 2 — not proposed in Round 1.",
    sapAction: "NEW — Added in Round 2. Proposed for closure / repurpose.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  NO LONGER CLOSING (were on Round 1, removed in Round 2)
  //  Kept for transparency — this is why we track 30 schools.
  // ════════════════════════════════════════════════════════
  {
    id: "rock-chapel",
    name: "Rock Chapel Elementary",
    status: "not_closing",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lithonia",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Was proposed for closure in Round 1. Removed from the list in Round 2.",
    sapAction: "Not Closing — Removed from the closure list in Round 2 (March 2026). Was proposed for closure in Round 1 (February 2026).",
    onClosureList: false
  },
  {
    id: "stoneview",
    name: "Stoneview Elementary",
    status: "not_closing",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lithonia",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "Was proposed for closure in Round 1. Removed from the list in Round 2.",
    sapAction: "Not Closing — Removed from the closure list in Round 2 (March 2026). Was proposed for closure in Round 1 (February 2026).",
    onClosureList: false
  }

];

/* ════════════════════════════════════════════════════════════
   STATUS CONFIGURATION
   ════════════════════════════════════════════════════════════ */
const STATUS_CONFIG = {
  closure:     { label: "Closure Proposed",       color: "red",         dot: "🔴" },
  conversion:  { label: "Conversion Proposed",    color: "orange",      dot: "🟠" },
  expansion:   { label: "Expansion Proposed",     color: "blue",        dot: "🔵" },
  move:        { label: "Move / Relocation",       color: "purple",      dot: "🟣" },
  not_closing: { label: "Not Closing",             color: "green",       dot: "🟢" },
  pending:     { label: "Update Coming Soon",      color: "pending",     dot: "⚪" }
};

/* ════════════════════════════════════════════════════════════
   HELPERS
   ════════════════════════════════════════════════════════════ */

// Normalise status to always be an array
function getStatuses(school) {
  return Array.isArray(school.status) ? school.status : [school.status];
}

// Build one badge
function oneBadge(status) {
  const s = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  return `<span class="badge badge-${s.color}" style="margin-right:4px;margin-bottom:4px;">
    <span class="status-dot dot-${s.color}"></span>${s.label}
  </span>`;
}

// Build all badges for a school
function statusBadges(school) {
  return getStatuses(school).map(oneBadge).join('');
}

// First (primary) status colour for the card top stripe
function primaryColor(school) {
  const s = STATUS_CONFIG[getStatuses(school)[0]] || STATUS_CONFIG.pending;
  return s.color;
}

function schoolCard(school, prefix) {
  const p = (prefix !== undefined) ? prefix : '';
  const isPending = getStatuses(school).includes('pending');
  const tag   = isPending ? 'div' : 'a';
  const hattr = isPending ? '' : `href="${p}${school.page}"`;
  const enrollment = school.enrollment > 0
    ? `<div class="school-card-enrollment">Enrollment: <strong>${school.enrollment.toLocaleString()}</strong></div>`
    : '';
  const actionBadge = school.onClosureList
    ? `<span style="font-size:0.68rem;font-family:var(--font-mono);letter-spacing:0.06em;text-transform:uppercase;color:var(--gray);">On Closure List</span>`
    : '';
  return `
    <${tag} class="school-card${isPending ? ' school-card-pending' : ''}" ${hattr}
      data-status="${getStatuses(school).join(',')}"
      data-cluster="${school.cluster}"
      data-on-list="${school.onClosureList || false}">
      <div class="school-card-status ${primaryColor(school)}"></div>
      <div class="school-card-body">
        <div class="school-card-name">${school.name}</div>
        <div class="school-card-meta">${school.grades} · ${school.cluster} Cluster</div>
        <div class="school-card-badge" style="display:flex;flex-wrap:wrap;gap:2px;margin-bottom:8px;">
          ${statusBadges(school)}
        </div>
        <p style="font-size:0.8rem;color:var(--text-light);flex:1;margin-bottom:8px;">${school.blurb}</p>
        ${school.sapAction ? `<div style="font-size:0.75rem;color:var(--text-light);background:var(--cream);border-left:3px solid var(--amber);padding:6px 10px;border-radius:0 3px 3px 0;margin-bottom:8px;"><strong style="font-family:var(--font-mono);letter-spacing:0.05em;text-transform:uppercase;font-size:0.65rem;color:var(--gray);">SAP Action: </strong>${school.sapAction}</div>` : ''}
        ${enrollment}
      </div>
    </${tag}>`;
}

function renderSchoolGrid(containerId, prefix) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = SCHOOLS.map(s => schoolCard(s, prefix || '')).join('');
}

function initFilters(gridId, countId, prefix) {
  const grid    = document.getElementById(gridId);
  const countEl = document.getElementById(countId);
  const statusF = document.getElementById('filter-status');
  const clusterF= document.getElementById('filter-cluster');
  const searchI = document.getElementById('filter-search');
  if (!grid) return;

  // Populate unique clusters
  if (clusterF) {
    const clusters = [...new Set(
      SCHOOLS.filter(s => s.cluster !== 'UPDATE').map(s => s.cluster)
    )].sort();
    clusters.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c; opt.textContent = c;
      clusterF.appendChild(opt);
    });
  }

  function filter() {
    const status  = statusF  ? statusF.value  : '';
    const cluster = clusterF ? clusterF.value : '';
    const search  = searchI  ? searchI.value.toLowerCase() : '';
    let visible = 0;
    grid.querySelectorAll('.school-card, .school-card-pending').forEach(card => {
      const statuses    = card.dataset.status || '';
      const matchStatus = !status  || statuses.split(',').includes(status);
      const matchCluster= !cluster || card.dataset.cluster === cluster;
      const nameEl      = card.querySelector('.school-card-name');
      const matchSearch = !search  || (nameEl && nameEl.textContent.toLowerCase().includes(search));
      const show = matchStatus && matchCluster && matchSearch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (countEl) countEl.textContent = `Showing ${visible} of ${SCHOOLS.length} schools`;
  }

  [statusF, clusterF].forEach(el => el && el.addEventListener('change', filter));
  searchI && searchI.addEventListener('keyup', filter);

  grid.innerHTML = SCHOOLS.map(s => schoolCard(s, prefix || '')).join('');
  filter();
}

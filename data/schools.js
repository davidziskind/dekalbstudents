/* ============================================================
   DeKalb Schools Coalition — School Data
   Source: DCSD Round 2 Scenarios PDF (official, April 10, 2026)
   https://www.dekalbschoolsga.org/divisions/access-and-opportunity/sap/sap-survey
   ============================================================

   STATUS VALUES (string OR array for multi-status):
     "closure"     → Red    — Closure / Repurpose Proposed
     "conversion"  → Orange — Grade-band or school-type conversion
     "expansion"   → Blue   — Capacity expansion proposed
     "not_closing" → Green  — Was on Round 1 list; not closing in Round 2

   sapAction: Exact Round 2 action from the DCSD official PDF.
   sapNote:   Scenario 1 Refinements / Scenario 2 clarification from PDF.
   onClosureList: true if listed on the official "Proposed Conversion,
                  Repurpose, and Closure List" in the PDF.
   ============================================================ */

const SCHOOLS = [

  // ════════════════════════════════════════════════════════
  //  DUNWOODY CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "kingsley",
    name: "Kingsley Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 392,
    capacity: 504,
    cluster: "Dunwoody",
    address: "4994 Kingsley Rd, Dunwoody, GA 30338",
    page: "schools/_template.html",
    blurb: "High-performing Dunwoody school with strong test scores and diverse enrollment.",
    sapAction: "Close or Repurpose",
    sapNote: "Closure dependent on additional capacity at Chesnut ES. Forecasted enrollment of 392 in 2030, poor facility condition (79% FCA score), small capacity (504), excess capacity in the area.",
    onClosureList: true
  },
  {
    id: "vanderlyn",
    name: "Vanderlyn Elementary",
    status: "conversion",
    grades: "K–5",
    enrollment: 400,
    capacity: 552,
    cluster: "Dunwoody",
    address: "1445 Vanderlyn Dr, Dunwoody, GA 30338",
    page: "schools/_template.html",
    blurb: "Ranked #4 in DeKalb County and #39 in Georgia by U.S. News & World Report.",
    sapAction: "Proposed to convert to high school annex",
    sapNote: "Facility used as-is to support Dunwoody HS. Ideas include 9th grade academy, Career Tech / Vocational spaces. Small capacity (552) and need for site expansion at Dunwoody HS.",
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
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion to absorb students from nearby school closures.",
    sapAction: "Capacity expansion project",
    sapNote: "Proposed for capacity expansion due to area forecasted enrollment and a site that supports expansion (11.9 acres). Will allow for consolidation of small elementary facilities in the area. Class size and facility size are completely independent — if builds are expanded, more staff will be allocated.",
    onClosureList: false
  },
  {
    id: "hightower",
    name: "Hightower Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Dunwoody",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion to serve consolidated Dunwoody cluster students.",
    sapAction: "Capacity expansion project",
    sapNote: "Proposed for capacity expansion due to area forecasted enrollment and a site that supports expansion (11.8 acres). Class size and facility size are completely independent — if builds are expanded, more staff will be allocated.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  CHAMBLEE CLUSTER
  //  (Note: Ashford Park ES is in Chamblee cluster per DCSD PDF)
  // ════════════════════════════════════════════════════════
  {
    id: "ashford-park",
    name: "Ashford Park Elementary",
    status: "conversion",
    grades: "K–5",
    enrollment: 480,
    capacity: 480,
    cluster: "Chamblee",
    address: "1200 Ashford Park Dr NE, Brookhaven, GA 30319",
    page: "schools/ashford-park.html",
    blurb: "High-performing Brookhaven school ranked #7 in DeKalb County.",
    sapAction: "Proposed to convert to ELC (Early Learning Center)",
    sapNote: "Facility significantly smaller than the district's desired minimum size of 600 seats (capacity 480). Site (7.02 acres) cannot be expanded to meet future needs. This intent is to use the Ashford Park facility to serve students in some way — the site is not adequate for a PK–5 elementary school.",
    onClosureList: true
  },
  {
    id: "huntley-hills",
    name: "Huntley Hills Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Chamblee",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion within the Chamblee cluster.",
    sapAction: "Capacity Expansion",
    sapNote: "Proposed for capacity expansion due to area forecasted enrollment and a site that supports expansion (10.5 acres). Will allow for consolidation of small elementary facilities in the area.",
    onClosureList: false
  },
  {
    id: "montgomery",
    name: "Montgomery Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Chamblee",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion within the Chamblee cluster.",
    sapAction: "Capacity Expansion",
    sapNote: "Proposed for capacity expansion due to area forecasted enrollment and a site that supports expansion (12.15 acres). Will allow for consolidation of small elementary facilities in the area.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  LAKESIDE CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "evansdale",
    name: "Evansdale Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lakeside",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Lakeside cluster school; parents held visible protests at the March 23 SAP meeting.",
    sapAction: "Close or Repurpose",
    sapNote: "Proposed to be closed or repurposed due to low building adequacy (69%) and the need to move towards larger, more adequate schools in the area. Site size: 10.11 acres.",
    onClosureList: true
  },
  {
    id: "henderson-mill",
    name: "Henderson Mill Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lakeside",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Lakeside cluster elementary proposed for closure due to low building adequacy.",
    sapAction: "Close or Repurpose",
    sapNote: "Proposed to be closed or repurposed due to low building adequacy (69%) and the need to move towards larger, more adequate schools in the area. Site size: 9.2 acres.",
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
    page: "schools/_template.html",
    blurb: "Beloved Lakeside cluster neighborhood school proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Proposed to be closed or repurposed. Resistance to closure and strong support for maintaining small school communities noted in community feedback.",
    onClosureList: true
  },
  {
    id: "briarlake",
    name: "Briarlake Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lakeside",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion to serve the Lakeside cluster.",
    sapAction: "Capacity Expansion",
    sapNote: "With the exception of Pleasantdale ES (capacity 984), the elementary schools in the Lakeside cluster are well utilized but too small. Site supports expansion (11.11 acres).",
    onClosureList: false
  },
  {
    id: "hawthorne",
    name: "Hawthorne Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lakeside",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion to serve the Lakeside cluster.",
    sapAction: "Capacity Expansion",
    sapNote: "Proposed for capacity expansion due to area forecasted enrollment and a site that supports expansion (12.25 acres).",
    onClosureList: false
  },
  {
    id: "sagamore-hills",
    name: "Sagamore Hills Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lakeside",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for capacity expansion to serve the Lakeside cluster.",
    sapAction: "Capacity Expansion",
    sapNote: "Proposed for capacity expansion to support consolidation of smaller Lakeside cluster schools.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  DRUID HILLS CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "mclendon",
    name: "McLendon Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Druid Hills",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Druid Hills cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Community feedback noted support for converting consolidated small schools into community resource centers.",
    onClosureList: true
  },
  {
    id: "robert-shaw",
    name: "Robert Shaw Theme ES",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Druid Hills",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Druid Hills cluster themed elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Resistance to closure; community desire for the program to stay together if it closes.",
    onClosureList: true
  },
  {
    id: "briar-vista",
    name: "Briar Vista Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Druid Hills",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Druid Hills cluster school proposed for capacity expansion.",
    sapAction: "Capacity Expansion",
    sapNote: "Community generally open to consolidation concepts.",
    onClosureList: false
  },
  {
    id: "laurel-ridge",
    name: "Laurel Ridge Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Druid Hills",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Druid Hills cluster school proposed for capacity expansion.",
    sapAction: "Capacity Expansion",
    sapNote: "Proposed for capacity expansion to support consolidation of smaller Druid Hills cluster schools.",
    onClosureList: false
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
    page: "schools/_template.html",
    blurb: "Strong academic performance despite a majority of economically disadvantaged students.",
    sapAction: "Close or Repurpose",
    sapNote: "Resistance to closure and support for maintaining small school communities noted in community feedback.",
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
    page: "schools/_template.html",
    blurb: "Tucker cluster school. Community concerns raised about the IB program at Midvale.",
    sapAction: "Close or Repurpose",
    sapNote: "Midvale could be used for something else. Community concerns raised around the IB program. Livsey ES has a larger site than Midvale.",
    onClosureList: true
  },
  {
    id: "livsey",
    name: "Livsey Elementary",
    status: "expansion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Tucker",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Tucker cluster school proposed for capacity expansion.",
    sapAction: "Capacity Expansion",
    sapNote: "Livsey has a larger site than Midvale. Proposed for expansion to support consolidation of Tucker cluster schools.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  LITHONIA CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "redan-es-lithonia",
    name: "Redan Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Lithonia",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Lithonia cluster elementary on the SAP closure list.",
    sapAction: "Close or Repurpose",
    sapNote: "Resistance to closure; strong perception that small schools = small class sizes.",
    onClosureList: true
  },
  {
    id: "rock-chapel",
    name: "Rock Chapel Elementary",
    status: "not_closing",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Stephenson",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Was on the Round 1 closure list. Removed in Round 2 — not closing.",
    sapAction: "Not Closing",
    sapNote: "Lithonia MS cascading to an elementary school adds capacity to the area, allowing for the consolidation of Rock Chapel ES to be reconsidered. Removed from closure list in Round 2.",
    onClosureList: true
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
    page: "schools/_template.html",
    blurb: "Was on the Round 1 closure list. Removed in Round 2 — not closing.",
    sapAction: "Not Closing",
    sapNote: "Stoneview could still be used, perhaps as an early childhood center. The cascading use of Lithonia HS to a middle school resolves the need for closure. Community noted Stoneview was promised a rebuild and this location should be preserved as a PK–5 school.",
    onClosureList: true
  },
  {
    id: "lithonia-ms",
    name: "Lithonia Middle School",
    status: "conversion",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Lithonia",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an elementary school as part of Lithonia cluster reorganization.",
    sapAction: "Convert to ES",
    sapNote: "Cascading use: Lithonia MS becomes an ES as Lithonia HS converts to a MS. This creates additional elementary capacity in the area.",
    onClosureList: false
  },
  {
    id: "lithonia-hs",
    name: "Lithonia High School",
    status: "conversion",
    grades: "9–12",
    enrollment: 0,
    capacity: 0,
    cluster: "Lithonia",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to a middle school as part of Lithonia cluster reorganization.",
    sapAction: "Convert to MS",
    sapNote: "Cascading use: Lithonia HS becomes a MS. Strong community perception of north vs. south inequity. Resistance to conversion.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  STONE MOUNTAIN CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "stone-mill",
    name: "Stone Mill Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Stone Mountain",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Stone Mountain cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Strong perception that small schools = small class sizes; concerns around longer travel times.",
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
    page: "schools/_template.html",
    blurb: "Stone Mountain cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Strong perception that small schools = small class sizes; concerns around longer travel times.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  MLK CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "browns-mill",
    name: "Browns Mill Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "MLK",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "MLK cluster elementary. Near-term closure priority in Round 2.",
    sapAction: "Close or Repurpose",
    sapNote: "Resistance to closure; strong desire to keep communities intact; community perception of north vs. south inequity.",
    onClosureList: true
  },
  {
    id: "fairington",
    name: "Fairington Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "MLK",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "NEW in Round 2 — not on the Round 1 closure list.",
    sapAction: "Close or Repurpose (NEW — added Round 2)",
    sapNote: "New addition to the closure list in Round 2 (March 2026). Listed as a near-term closure priority.",
    onClosureList: true
  },
  {
    id: "bob-mathis",
    name: "Bob Mathis Elementary",
    status: "conversion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "MLK",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an Early Learning Center.",
    sapAction: "Proposed to convert to ELC",
    sapNote: "Listed as a near-term priority. Building to become an Early Learning Center.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  MILLER GROVE CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "woodridge",
    name: "Woodridge Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Miller Grove",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Miller Grove cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Resistance to closure; strong perception that small schools = small class sizes; concerns around longer travel times.",
    onClosureList: true
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
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an elementary school as Miller Grove HS receives middle grades.",
    sapAction: "Convert to ES",
    sapNote: "Cascading use as part of Miller Grove cluster reorganization.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  TOWERS CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "canby-lane",
    name: "Canby Lane Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Towers",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Towers cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Resistance to closure; support for maintaining small school communities; concerns around a disproportionate amount of closures in this area.",
    onClosureList: true
  },
  {
    id: "rowland",
    name: "Rowland Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Towers",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Towers cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Resistance to closure; support for maintaining small school communities.",
    onClosureList: true
  },
  {
    id: "bethune-ms",
    name: "Bethune Middle School",
    status: "conversion",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Towers",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an elementary school as Towers HS converts to a MS.",
    sapAction: "Convert to ES",
    sapNote: "Cascading use as part of Towers cluster reorganization. Resistance to closure in community feedback.",
    onClosureList: false
  },
  {
    id: "towers-hs",
    name: "Towers High School",
    status: "conversion",
    grades: "9–12",
    enrollment: 0,
    capacity: 0,
    cluster: "Towers",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to a middle school as part of Towers cluster reorganization.",
    sapAction: "Convert to MS",
    sapNote: "Some resistance to closure but more understanding than other sites. Cascading use as part of Towers cluster reorganization.",
    onClosureList: false
  },

  // ════════════════════════════════════════════════════════
  //  COLUMBIA CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "columbia-es",
    name: "Columbia Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Columbia",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Columbia cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Proposed for closure or repurpose.",
    onClosureList: true
  },
  {
    id: "toney",
    name: "Toney Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Columbia",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Columbia cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Proposed for closure or repurpose.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  MCNAIR CLUSTER
  // ════════════════════════════════════════════════════════
  {
    id: "flat-shoals",
    name: "Flat Shoals Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "McNair cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Proposed for closure or repurpose.",
    onClosureList: true
  },
  {
    id: "kelley-lake",
    name: "Kelley Lake Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "McNair cluster elementary proposed for closure.",
    sapAction: "Close or Repurpose",
    sapNote: "Proposed for closure or repurpose.",
    onClosureList: true
  },
  {
    id: "mcnair-dla",
    name: "McNair Discovery Learning Academy",
    status: "conversion",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an Early Learning Center.",
    sapAction: "Proposed to convert to ELC",
    sapNote: "Building to become an Early Learning Center. The existing ELC at Terry Mill would relocate to this building.",
    onClosureList: true
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
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an elementary school as part of McNair cluster reorganization.",
    sapAction: "Convert to ES",
    sapNote: "Cascading use as part of McNair cluster reorganization.",
    onClosureList: false
  },
  {
    id: "elc-mcnair",
    name: "Early Learning Center (ELC)",
    status: "closure",
    grades: "PK",
    enrollment: 0,
    capacity: 0,
    cluster: "McNair",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "NEW in Round 2. The current ELC is proposed to close; programs move to McNair DLA building.",
    sapAction: "Close or Repurpose (NEW — added Round 2)",
    sapNote: "New addition to the closure list in Round 2. The Early Learning Center program would relocate to the McNair Discovery Learning Academy building.",
    onClosureList: true
  },

  // ════════════════════════════════════════════════════════
  //  CEDAR GROVE CLUSTER
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
    page: "schools/_template.html",
    blurb: "Proposed to convert to a middle school as Cedar Grove HS becomes a 6–12 campus.",
    sapAction: "Convert to MS",
    sapNote: "Cedar Grove ES converts to a middle school as part of cascading use within the Cedar Grove cluster.",
    onClosureList: true
  },
  {
    id: "cedar-grove-ms",
    name: "Cedar Grove Middle School",
    status: "conversion",
    grades: "6–8",
    enrollment: 0,
    capacity: 0,
    cluster: "Cedar Grove",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to an elementary school as Cedar Grove HS becomes 6–12.",
    sapAction: "Convert to ES",
    sapNote: "Cedar Grove MS converts to an ES as part of cascading use. Strong desire to maintain Cedar Grove as a cluster identity.",
    onClosureList: true
  },
  {
    id: "cedar-grove-hs",
    name: "Cedar Grove High School",
    status: "conversion",
    grades: "9–12",
    enrollment: 0,
    capacity: 0,
    cluster: "Cedar Grove",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "Proposed for conversion to a middle school as part of Cedar Grove cluster reorganization.",
    sapAction: "Convert to MS",
    sapNote: "Cascading use: Cedar Grove HS becomes a middle school. Strong desire to maintain Cedar Grove cluster identity.",
    onClosureList: false
  },
  {
    id: "oakview",
    name: "Oak View Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "Cedar Grove",
    address: "UPDATE",
    page: "schools/_template.html",
    blurb: "NEW in Round 2 — not on the Round 1 closure list.",
    sapAction: "Close or Repurpose (NEW — added Round 2)",
    sapNote: "New addition to the closure list in Round 2 (March 2026).",
    onClosureList: true
  }

];

/* ════════════════════════════════════════════════════════════
   STATUS CONFIGURATION
   ════════════════════════════════════════════════════════════ */
const STATUS_CONFIG = {
  closure:     { label: "Closure Proposed",    color: "red",     dot: "🔴" },
  conversion:  { label: "Conversion Proposed", color: "orange",  dot: "🟠" },
  expansion:   { label: "Expansion Proposed",  color: "blue",    dot: "🔵" },
  not_closing: { label: "Not Closing",          color: "green",   dot: "🟢" },
  pending:     { label: "Update Coming Soon",   color: "pending", dot: "⚪" }
};

/* ════════════════════════════════════════════════════════════
   HELPERS
   ════════════════════════════════════════════════════════════ */
function getStatuses(school) {
  return Array.isArray(school.status) ? school.status : [school.status];
}

function oneBadge(status) {
  const s = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  return `<span class="badge badge-${s.color}" style="margin-right:4px;margin-bottom:4px;">
    <span class="status-dot dot-${s.color}"></span>${s.label}
  </span>`;
}

function statusBadges(school) {
  return getStatuses(school).map(oneBadge).join('');
}

function primaryColor(school) {
  return (STATUS_CONFIG[getStatuses(school)[0]] || STATUS_CONFIG.pending).color;
}

function schoolCard(school, prefix) {
  const p = (prefix !== undefined) ? prefix : '';
  const isPending = getStatuses(school).includes('pending');
  const isNotClosing = getStatuses(school).includes('not_closing');
  const tag   = isPending ? 'div' : 'a';
  const hattr = isPending ? '' : `href="${p}${school.page}"`;
  const enrollment = school.enrollment > 0
    ? `<div class="school-card-enrollment">Enrollment: <strong>${school.enrollment.toLocaleString()}</strong></div>`
    : '';
  const newBadge = school.sapAction && school.sapAction.includes('NEW')
    ? `<span style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;background:var(--red);color:white;padding:2px 6px;border-radius:2px;margin-left:4px;">NEW Rnd 2</span>`
    : '';

  return `
    <${tag} class="school-card${isPending ? ' school-card-pending' : ''}${isNotClosing ? ' school-card-not-closing' : ''}" ${hattr}
      data-status="${getStatuses(school).join(',')}"
      data-cluster="${school.cluster}"
      data-on-list="${school.onClosureList || false}">
      <div class="school-card-status ${primaryColor(school)}"></div>
      <div class="school-card-body">
        <div class="school-card-name">${school.name}${newBadge}</div>
        <div class="school-card-meta">${school.grades} · ${school.cluster} Cluster</div>
        <div class="school-card-badge" style="display:flex;flex-wrap:wrap;gap:2px;margin-bottom:8px;">
          ${statusBadges(school)}
        </div>
        <p style="font-size:0.8rem;color:var(--text-light);flex:1;margin-bottom:8px;">${school.blurb}</p>
        <div style="font-size:0.75rem;background:var(--cream);border-left:3px solid var(--amber);padding:6px 10px;border-radius:0 3px 3px 0;margin-bottom:8px;">
          <strong style="font-family:var(--font-mono);letter-spacing:0.05em;text-transform:uppercase;font-size:0.62rem;color:var(--gray);">SAP Action: </strong>${school.sapAction}
          ${school.sapNote ? `<div style="margin-top:4px;color:var(--text-light);font-size:0.7rem;">${school.sapNote}</div>` : ''}
        </div>
        ${enrollment}
      </div>
    </${tag}>`;
}

function renderSchoolGrid(containerId, prefix) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = SCHOOLS.map(s => schoolCard(s, prefix || '')).join('');
}

function initFilters(gridId, countId, prefix) {
  const grid    = document.getElementById(gridId);
  const countEl = document.getElementById(countId);
  const statusF = document.getElementById('filter-status');
  const clusterF= document.getElementById('filter-cluster');
  const searchI = document.getElementById('filter-search');
  if (!grid) return;

  if (clusterF) {
    const clusters = [...new Set(
      SCHOOLS.filter(s => s.cluster && s.cluster !== 'UPDATE').map(s => s.cluster)
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

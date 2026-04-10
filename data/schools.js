/* ============================================================
   DeKalb Schools Coalition — School Data
   ============================================================

   STATUS VALUES:
     "closure"       → Red    — Closure Proposed
     "consolidation" → Orange — Consolidation/Repurpose Proposed
     "review"        → Yellow — Under Review
     "monitoring"    → Green  — Monitoring
     "pending"       → Gray   — Page Coming Soon

   To promote a school from pending:
   1. Copy schools/_template.html → schools/your-school-id.html
   2. Fill in all UPDATE: fields
   3. Change status from "pending" to the appropriate status
   4. Set page: "schools/your-school-id.html"
   ============================================================ */

const SCHOOLS = [
  {
    id: "ashford-park",
    name: "Ashford Park Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 752,
    capacity: 0,
    cluster: "Lakeside",
    address: "1200 Ashford Park Dr NE, Brookhaven, GA 30319",
    principal: "UPDATE",
    website: "https://ashfordparkes.dekalb.k12.ga.us",
    page: "schools/ashford-park.html",
    blurb: "A high-performing Brookhaven neighborhood school, ranked #7 in DeKalb County."
  },
  {
    id: "vanderlyn",
    name: "Vanderlyn Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 400,
    capacity: 600,
    cluster: "Dunwoody",
    address: "1445 Vanderlyn Dr, Dunwoody, GA 30338",
    principal: "UPDATE",
    website: "https://vanderlyne.dekalb.k12.ga.us",
    page: "schools/_template.html",
    blurb: "Ranked #4 in DeKalb County and #39 in Georgia by U.S. News & World Report."
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
    blurb: "A high-performing Dunwoody school with strong standardized test scores."
  },
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
    blurb: "Strong academic performance despite a high rate of economically disadvantaged students."
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
    blurb: "A beloved Lakeside cluster neighborhood school facing proposed closure."
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
    blurb: "Lakeside cluster school included in Round 2 of the SAP closure proposals."
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
    blurb: "Tucker cluster school under the SAP closure proposal."
  },
  { id:"s08",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s09",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s10",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s11",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s12",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s13",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s14",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s15",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s16",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s17",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s18",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s19",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s20",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s21",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s22",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s23",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s24",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s25",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s26",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s27",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s28",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s29",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." },
  { id:"s30",  name:"UPDATE: School Name", status:"pending", grades:"K–5", enrollment:0, capacity:0, cluster:"UPDATE", address:"UPDATE", principal:"UPDATE", website:"#", page:"schools/_template.html", blurb:"School page coming soon. Volunteer to lead this school's page." }
];

/* ── Status config ──────────────────────────────────────────── */
const STATUS_CONFIG = {
  closure:       { label: "Closure Proposed",       color: "red",     dot: "🔴" },
  consolidation: { label: "Consolidation Proposed", color: "orange",  dot: "🟠" },
  review:        { label: "Under Review",            color: "yellow",  dot: "🟡" },
  monitoring:    { label: "Monitoring",              color: "green",   dot: "🟢" },
  pending:       { label: "Update Coming Soon",      color: "pending", dot: "⚪" }
};

function statusBadge(status) {
  const s = STATUS_CONFIG[status] || STATUS_CONFIG.monitoring;
  return `<span class="badge badge-${s.color}">
    <span class="status-dot dot-${s.color}"></span>${s.label}
  </span>`;
}

function schoolCard(school, prefix) {
  const p = (prefix !== undefined) ? prefix : '';
  const s = STATUS_CONFIG[school.status] || STATUS_CONFIG.monitoring;
  const isPending = school.status === 'pending';
  const tag   = isPending ? 'div' : 'a';
  const hattr = isPending ? '' : `href="${p}${school.page}"`;
  const enrollment = school.enrollment > 0
    ? `Enrollment: <strong>${school.enrollment.toLocaleString()}</strong>`
    : '';
  return `
    <${tag} class="school-card${isPending ? ' school-card-pending' : ''}" ${hattr}
      data-status="${school.status}" data-cluster="${school.cluster}">
      <div class="school-card-status ${s.color}"></div>
      <div class="school-card-body">
        <div class="school-card-name">${school.name}</div>
        <div class="school-card-meta">${school.grades}&nbsp;·&nbsp;${school.cluster} Cluster</div>
        <div class="school-card-badge">${statusBadge(school.status)}</div>
        <p style="font-size:0.82rem;color:var(--text-light);flex:1;margin-bottom:${enrollment ? '0' : '0'};">${school.blurb}</p>
        ${enrollment ? `<div class="school-card-enrollment" style="margin-top:12px;padding-top:10px;border-top:1px solid var(--gray-light);font-size:0.82rem;color:var(--text-light);">${enrollment}</div>` : ''}
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
      const matchStatus  = !status  || card.dataset.status  === status;
      const matchCluster = !cluster || card.dataset.cluster === cluster;
      const nameEl = card.querySelector('.school-card-name');
      const matchSearch  = !search  || (nameEl && nameEl.textContent.toLowerCase().includes(search));
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

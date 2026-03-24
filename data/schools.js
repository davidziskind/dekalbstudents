/* ============================================================
   DeKalb Schools Coalition — School Data
   Update this file to change school info across the entire site.

   STATUS VALUES:
     "closure"       → Red   — Closure Proposed
     "consolidation" → Orange — Consolidation Proposed
     "review"        → Yellow — Under Review
     "monitoring"    → Green  — Monitoring

   CLUSTERS (DeKalb HS Clusters):
     Arabia Mountain, Cedar Grove, Chamblee, Columbia, Cross Keys,
     Druid Hills, Dunwoody, Lakeside, Lithonia, Martin Luther King,
     McNair, Miller Grove, Redan, Sequoyah, Southwest DeKalb,
     Stone Mountain, Tucker
   ============================================================ */

const SCHOOLS = [
  {
    id: "ashford-park",
    name: "Ashford Park Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 412,
    capacity: 650,
    cluster: "Lakeside",
    address: "1200 Ashford Park Dr, Atlanta, GA 30319",
    principal: "TBD — Update with current principal",
    website: "https://ashfordparkes.dekalb.k12.ga.us",
    page: "schools/ashford-park.html",
    blurb: "A neighborhood anchor serving Atlanta's Brookhaven community since 1954."
  },
  {
    id: "vanderlyn",
    name: "Vanderlyn Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 387,
    capacity: 600,
    cluster: "Dunwoody",
    address: "1445 Vanderlyn Dr, Dunwoody, GA 30338",
    principal: "TBD — Update with current principal",
    website: "https://vanderlyne.dekalb.k12.ga.us",
    page: "schools/vanderlyn.html",
    blurb: "Dunwoody's original elementary school, serving the community since 1968."
  },
  {
    id: "kingsley",
    name: "Kingsley Elementary",
    status: "closure",
    grades: "K–5",
    enrollment: 356,
    capacity: 580,
    cluster: "Dunwoody",
    address: "4994 Kingsley Rd, Dunwoody, GA 30338",
    principal: "TBD — Update with current principal",
    website: "https://kingsleye.dekalb.k12.ga.us",
    page: "schools/kingsley.html",
    blurb: "A diverse, high-performing school at the heart of the Kingsley neighborhood."
  },
  {
    id: "school-04",
    name: "UPDATE: School Name",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-05",
    name: "UPDATE: School Name",
    status: "consolidation",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-06",
    name: "UPDATE: School Name",
    status: "consolidation",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-07",
    name: "UPDATE: School Name",
    status: "review",
    grades: "K–8",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-08",
    name: "UPDATE: School Name",
    status: "review",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-09",
    name: "UPDATE: School Name",
    status: "review",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-10",
    name: "UPDATE: School Name",
    status: "monitoring",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-11",
    name: "UPDATE: School Name",
    status: "monitoring",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-12",
    name: "UPDATE: School Name",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-13",
    name: "UPDATE: School Name",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-14",
    name: "UPDATE: School Name",
    status: "closure",
    grades: "K–8",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-15",
    name: "UPDATE: School Name",
    status: "consolidation",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-16",
    name: "UPDATE: School Name",
    status: "consolidation",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-17",
    name: "UPDATE: School Name",
    status: "review",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-18",
    name: "UPDATE: School Name",
    status: "review",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-19",
    name: "UPDATE: School Name",
    status: "monitoring",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-20",
    name: "UPDATE: School Name",
    status: "monitoring",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-21",
    name: "UPDATE: School Name",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-22",
    name: "UPDATE: School Name",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-23",
    name: "UPDATE: School Name",
    status: "consolidation",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-24",
    name: "UPDATE: School Name",
    status: "review",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-25",
    name: "UPDATE: School Name",
    status: "monitoring",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-26",
    name: "UPDATE: School Name",
    status: "review",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  },
  {
    id: "school-27",
    name: "UPDATE: School Name",
    status: "closure",
    grades: "K–5",
    enrollment: 0,
    capacity: 0,
    cluster: "UPDATE",
    address: "UPDATE",
    principal: "UPDATE",
    website: "#",
    page: "schools/_template.html",
    blurb: "UPDATE: Add a one-sentence description of this school."
  }
];

// ── Helpers ──────────────────────────────────────────────────
const STATUS_CONFIG = {
  closure:       { label: "Closure Proposed",       color: "red",    dot: "🔴" },
  consolidation: { label: "Consolidation Proposed",  color: "orange", dot: "🟠" },
  review:        { label: "Under Review",            color: "yellow", dot: "🟡" },
  monitoring:    { label: "Monitoring",              color: "green",  dot: "🟢" }
};

function statusBadge(status) {
  const s = STATUS_CONFIG[status] || STATUS_CONFIG.monitoring;
  return `<span class="badge badge-${s.color}">
    <span class="status-dot dot-${s.color}"></span>${s.label}
  </span>`;
}

function schoolCard(school) {
  const s = STATUS_CONFIG[school.status] || STATUS_CONFIG.monitoring;
  const enrollment = school.enrollment > 0
    ? `Enrollment: <strong>${school.enrollment}</strong>`
    : `Enrollment: <strong>TBD</strong>`;
  return `
    <a class="school-card" href="${school.page}" data-status="${school.status}" data-cluster="${school.cluster}">
      <div class="school-card-status ${s.color}"></div>
      <div class="school-card-body">
        <div class="school-card-name">${school.name}</div>
        <div class="school-card-meta">${school.grades} &nbsp;·&nbsp; ${school.cluster} Cluster</div>
        <div class="school-card-badge">${statusBadge(school.status)}</div>
        <p style="font-size:0.82rem;color:var(--text-light);flex:1;">${school.blurb}</p>
        <div class="school-card-enrollment">${enrollment}</div>
      </div>
    </a>`;
}

function renderSchoolGrid(containerId, prefix = '') {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = SCHOOLS.map(s => {
    const card = { ...s, page: prefix + s.page };
    return schoolCard(card);
  }).join('');
}

function initFilters(gridId, countId, prefix = '') {
  const grid = document.getElementById(gridId);
  const countEl = document.getElementById(countId);
  const statusFilter = document.getElementById('filter-status');
  const clusterFilter = document.getElementById('filter-cluster');
  const searchInput = document.getElementById('filter-search');
  if (!grid) return;

  // Populate cluster options
  if (clusterFilter) {
    const clusters = [...new Set(SCHOOLS.map(s => s.cluster))].sort();
    clusters.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c; opt.textContent = c;
      clusterFilter.appendChild(opt);
    });
  }

  function filter() {
    const status  = statusFilter ? statusFilter.value : '';
    const cluster = clusterFilter ? clusterFilter.value : '';
    const search  = searchInput  ? searchInput.value.toLowerCase() : '';

    let visible = 0;
    grid.querySelectorAll('.school-card').forEach(card => {
      const matchStatus  = !status  || card.dataset.status  === status;
      const matchCluster = !cluster || card.dataset.cluster === cluster;
      const matchSearch  = !search  || card.querySelector('.school-card-name').textContent.toLowerCase().includes(search);
      const show = matchStatus && matchCluster && matchSearch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (countEl) countEl.textContent = `Showing ${visible} of ${SCHOOLS.length} schools`;
  }

  [statusFilter, clusterFilter, searchInput].forEach(el => {
    if (el) el.addEventListener('change', filter);
    if (el && el.tagName === 'INPUT') el.addEventListener('keyup', filter);
  });

  renderSchoolGrid(gridId, prefix);
  filter();
}

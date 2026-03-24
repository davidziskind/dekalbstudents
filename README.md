# DeKalb Schools Coalition Website

A parent-led coalition website fighting against DeKalb County's School Alignment Process (SAP).
Built as a static HTML/CSS/JS site — no server required. Hosted on GitHub Pages.

---

## File Structure

```
dekalb-coalition/
├── index.html              ← Home page
├── schools.html            ← All 27 Schools directory (filterable)
├── issue.html              ← Background on the SAP & our arguments
├── take-action.html        ← Petition, email templates, meeting info
├── updates.html            ← News & updates feed
├── contact.html            ← Join / volunteer sign-up
│
├── schools/
│   ├── _template.html      ← TEMPLATE — copy this for each school
│   └── ashford-park.html   ← Example filled-in school page
│
├── css/
│   └── style.css           ← All shared styles
│
├── js/
│   └── main.js             ← Shared JS (mobile nav, utilities)
│
└── data/
    └── schools.js          ← ⭐ MASTER DATA FILE — all 27 schools
```

---

## Getting Started

### 1. Update the school data
Edit `data/schools.js` — this is your single source of truth for all 27 schools.
The schools directory page and home page both render from this file automatically.

Each school object looks like this:
```javascript
{
  id: "vanderlyn",               // URL-safe ID (used for filename)
  name: "Vanderlyn Elementary",  // Full school name
  status: "closure",             // closure | consolidation | review | monitoring
  grades: "K–5",
  enrollment: 387,
  capacity: 600,
  cluster: "Dunwoody",
  address: "...",
  principal: "...",
  website: "https://...",
  page: "schools/vanderlyn.html", // Link to this school's page
  blurb: "One-sentence description shown on the directory card."
}
```

### 2. Create school pages
For each school:
1. Copy `schools/_template.html`
2. Rename it to match the school's `id` (e.g., `schools/vanderlyn.html`)
3. Fill in every `UPDATE:` placeholder
4. Update the school's `page` field in `data/schools.js`

### 3. Fill in site-wide placeholders
Search for `UPDATE` across all files. Key things to update:
- Board vote date (appears in alert banners)
- Board member names and emails (`take-action.html`)
- Meeting dates and locations (`take-action.html`, `updates.html`)
- Coalition leadership names and emails (`contact.html`)
- Your petition URL (`take-action.html`)
- Your site URL for social sharing (`take-action.html`)

### 4. Embed Google Forms / Sheets
Anywhere you see an `embed-placeholder`, replace it with an `<iframe>` embed:

**Google Form embed:**
```html
<iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
  width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">
</iframe>
```

**Google Sheet embed:**
```html
<iframe src="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pubhtml?widget=true&headers=false"
  width="100%" height="400" frameborder="0">
</iframe>
```

---

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g., `dekalb-schools-coalition`)
2. Upload all these files to the repo root
3. Go to **Settings → Pages**
4. Under "Source," select **Deploy from a branch → main → / (root)**
5. Your site will be live at `https://YOUR-USERNAME.github.io/dekalb-schools-coalition/`

### Custom Domain (optional, ~$12/year)
1. Buy a domain from Namecheap, Google Domains, or Squarespace Domains
2. In your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`
3. In GitHub Pages settings, add your custom domain
4. Enable "Enforce HTTPS"

---

## Updating the Site

### Adding a new update/news item
Open `updates.html` and duplicate one of the `<article>` blocks at the top.

### Changing a school's status
Update the `status` field in `data/schools.js`. The color-coded badge and card
stripe will update automatically across the entire site.

### Adding a school page
1. Copy `schools/_template.html`
2. Rename and fill it in
3. Update `data/schools.js` → set the `page` field to `"schools/your-school.html"`

---

## Tech Stack

- Pure HTML5, CSS3, vanilla JavaScript — no frameworks, no build step
- Google Fonts (Playfair Display + DM Sans) — loaded via CDN
- Fully static — GitHub Pages hosting is 100% free
- Mobile responsive

---

Built by parents, for parents. Fight back.

# Enigma 5.0 — Official Website

Landing page for **Enigma 5.0**, a hackathon organized by **CSI (Computer Society of India), SIES GST**, for undergraduate student teams competing across **FinTech** and **HealthTech** tracks.

🔗 **Live Site:** https://grahitshetty-lab.github.io/Enigma_Website/

---

## 📌 About the Event

| Detail | Info |
|---|---|
| **Event Name** | Enigma 5.0 |
| **Organized by** | CSI, SIES Graduate School of Technology (SIES GST) |
| **Date** | September 13, 2026 |
| **Venue** | SIES GST, Nerul |
| **Duration** | 12 hours |
| **Team Size** | 4 members per team |
| **Tracks** | FinTech, HealthTech |
| **Prize Pool** | ₹25,000 |
| **Eligibility** | Undergraduate students, participating in teams |

---

## ✨ Features

- Responsive single-page landing site built with vanilla HTML, CSS, and JavaScript
- Dark, neon-accented visual theme (subtly inspired by *The Dark Knight*'s Joker — purple/toxic-green palette) layered over a tech/hackathon aesthetic
- Scroll-triggered section animations (Intersection Observer)
- Custom animated cursor (desktop only)
- Terminal/dev-console styled UI elements
- Dedicated sections: About · Tracks · Why Attend (Perks) · Prize Pool · Timeline · Contact
- Floating WhatsApp CTA for quick registration queries
- Fully responsive across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **HTML5** — semantic page structure
- **CSS3** — animations, layout (Flexbox/Grid), theming
- **Vanilla JavaScript** — interactivity, scroll animations, custom cursor
- No frameworks, no build tools — plug and play

---

## 📂 Project Structure

```
Enigma_Website/
├── index.html        # Main page structure
├── style.css          # All styling and animations
├── script.js           # Interactivity (scroll effects, cursor, nav, etc.)
├── Hero.mp4           # Hero section background video
├── about.mp4          # About section background video
├── prizes.mp4          # Prize Pool section background video
├── bg.jpg               # Fallback/background image
├── prompts.md         # Log of AI prompts used to build this site
└── README.md          # You're here
```

---

## 🚀 Running Locally

Since this is a static site with no build step, you can run it in any of these ways:

**Option 1 — Just open it**
```bash
git clone https://github.com/GrahitShetty-lab/Enigma_Website.git
cd Enigma_Website
open index.html   # or double-click the file
```

**Option 2 — Local server (recommended, avoids browser file-access restrictions)**
```bash
# Using Python
python3 -m http.server 8000

# Then visit
http://localhost:8000
```

---

## 🌐 Deployment

This site is deployed via **GitHub Pages**, served directly from the `main` branch.
Any changes pushed to `main` will automatically redeploy within a couple of minutes.

---

## 📬 Contact

- **Website:** [csi.siesgst.ac.in](https://csi.siesgst.ac.in)
- **Instagram:** [@csisiesgst](https://instagram.com/csisiesgst)
- **LinkedIn:** [CSI SIESGST](https://linkedin.com/company/csi-siesgst)
- **Email:** csi-council@siesgst.ac.in

---

## 📄 License

This project was built for CSI SIES GST's Enigma 5.0 event. All event branding, content, and assets belong to CSI SIES GST.

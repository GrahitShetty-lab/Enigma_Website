# ENIGMA 5.0 — Official Hackathon Website

> // DECODE. BUILD. DISRUPT.

The official landing page for **Enigma 5.0**, the flagship 12-hour hackathon organized by **CSI (Computer Society of India), SIES Graduate School of Technology**, for undergraduate teams building across **FinTech** and **HealthTech**.

🔗 **Live Site:** https://enigma-website-seven.vercel.app
🔗 **Mirror (GitHub Pages):** https://grahitshetty-lab.github.io/Enigma_Website/

---

## 📌 Event Overview

| Detail | Info |
|---|---|
| **Event** | Enigma 5.0 |
| **Organized by** | CSI, SIES Graduate School of Technology (SIES GST) |
| **Date** | September 13, 2026 |
| **Venue** | SIES GST, Nerul, Navi Mumbai |
| **Duration** | 12 hours |
| **Team Size** | 4 members per team |
| **Tracks** | FinTech · HealthTech |
| **Prize Pool** | ₹25,000 (₹12,000 / ₹8,000 / ₹5,000 across top 3 teams) |
| **Registration Fee** | Free |
| **Eligibility** | Any undergraduate student, from any recognized college |

---

## ✨ Sections & Features

The site is a single-page scroll experience, styled like a dark terminal/dev-console with a subtle purple-green neon accent theme:

- **Hero** — Live countdown timer to event launch, animated video background, quick-glance system status panel (`SYS_STATUS_READOUT`) showing registration status, active tracks, prize pool, and slot availability
- **About** — What Enigma is, who can join, key stats (12 hrs · 4-member teams · 2 tracks · ₹25K pool)
- **Tracks** — Dedicated FinTech and HealthTech track breakdowns, styled as tabbed file explorer cards
- **Prize Pool** — Animated prize counter with tiered breakdown (1st / 2nd / 3rd place)
- **Perks** — 8-point "why attend" log: networking, resume boost, free catering, workspace, mentorship, learning, swag, and future scope (incubation/internship leads)
- **Timeline** — Full event roadmap from registration open through the grand finale, styled as a system log
- **FAQ** — Accordion-style answers on eligibility, team size, fees, what to bring, food, and tracks
- **Contact** — Organizer email, official CSI website, social links, and an embedded Google Map to the venue
- **Floating WhatsApp CTA** — One-tap prefilled WhatsApp message for instant registration queries
- **Custom cursor** — Desktop-only glowing cursor with hover/click interactions
- Scroll-triggered reveal animations throughout

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, Grid/Flexbox, animations, glassmorphism
- **Vanilla JavaScript** — countdown logic, scroll reveal (Intersection Observer), custom cursor, FAQ accordion, nav interactions
- No frameworks, no build tools required

---

## 📂 Project Structure

```
Enigma_Website/
├── index.html        # Main page markup
├── style.css          # All styling, theme variables, animations
├── script.js           # Countdown, scroll reveal, cursor, FAQ, nav logic
├── Hero.mp4           # Hero section background video
├── about.mp4          # About section background video
├── prizes.mp4          # Prize Pool section background video
├── bg.jpg               # Fallback/background image
├── prompts.md         # Log of AI prompts used to build this site
└── README.md          # You're here
```

---

## 🚀 Running Locally

No build step required — it's a static site.

```bash
git clone https://github.com/GrahitShetty-lab/Enigma_Website.git
cd Enigma_Website

# Option 1: just open it
open index.html

# Option 2: serve locally (recommended)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## 🌐 Deployment

This project auto-deploys on every push to `main` via:
- **Vercel** → https://enigma-website-seven.vercel.app
- **GitHub Pages** → https://grahitshetty-lab.github.io/Enigma_Website/

```bash
git add .
git commit -m "your message here"
git push origin main
```

---

## 📬 Contact

- **Email:** csi-council@siesgst.ac.in
- **Website:** [csi.siesgst.ac.in](https://csi.siesgst.ac.in)
- **Instagram:** [@csisiesgst](https://www.instagram.com/csisiesgst/)
- **LinkedIn:** [CSI SIESGST](https://www.linkedin.com/company/csi-siesgst/)
- **Venue:** SIES Graduate School of Technology, Nerul, Navi Mumbai

---

## 📄 License

Built for CSI SIES GST's Enigma 5.0 event. All event branding, content, and assets belong to CSI SIES GST.



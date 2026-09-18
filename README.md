# Al Mohian's Cybersecurity Portfolio

Source for my personal cybersecurity portfolio, published via GitHub Pages:
**[musannamohian.github.io](https://musannamohian.github.io)**

A custom-built, single-page-feel site (not a stock theme) with a fixed profile
rail, a numbered section index, dark/light modes, and subtle scroll-reveal
motion.

## What's here
- [`index.html`](index.html) — home page: hero, about, skills, work preview, contact
- [`projects.md`](projects.md) — hands-on projects (e.g. the Build & Breach lab)
- [`letsdefend.md`](letsdefend.md) — SOC alert investigation write-ups
- [`ctfs.md`](ctfs.md) — CTF challenge log
- [`certs.md`](certs.md) — certifications
- [`resources.md`](resources.md) — platforms and references used to build these skills
- [`_layouts/`](_layouts), [`_includes/`](_includes) — page chrome (shared sidebar/nav, applied via Jekyll)
- [`assets/css/style.css`](assets/css/style.css), [`assets/js/main.js`](assets/js/main.js) — the design system and its behaviour (theme toggle, scroll-reveal, scrollspy, mobile nav)

## Stack
Jekyll (GitHub Pages' built-in processor) with a fully custom layout/theme —
no third-party Jekyll theme. Content pages are Markdown with front matter;
the homepage is hand-written HTML for full control over the hero/about/skills
sections.

To build locally: `bundle exec jekyll serve` (or `jekyll serve` if installed
globally).

## Contact
- [LinkedIn](https://www.linkedin.com/in/al-mohian)
- [GitHub](https://github.com/MusannaMohian)

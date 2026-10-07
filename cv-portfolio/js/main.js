(() => {
  const $ = (s, r = document) => r.querySelector(s);
  let lang = localStorage.getItem("lang") || "es";
  let tab = "tech";
  const t = k => I18N[lang][k] ?? k;
  const bg = u => `background-image:url('${u}'),linear-gradient(135deg,var(--leaf-2),var(--rose-2))`;

  /* ---------- Render ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));

    $("#hardSkills").innerHTML = HARD_SKILLS.map(s =>
      `<li>${s.name}<div class="track"><div class="fill" data-w="${s.level}"></div></div></li>`).join("");
    $("#softSkills").innerHTML = SOFT_SKILLS[lang].map(s => `<li>${s}</li>`).join("");
    $("#eduList").innerHTML = EDUCATION[lang].map(e =>
      `<li><strong>${e.title}</strong><br>${e.place}<br><small>${e.years}</small></li>`).join("");
    $("#aspireList").innerHTML = ASPIRE[lang].map(a => `<li>${a}</li>`).join("");
    requestAnimationFrame(() => document.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.w + "%"));

    $("#cards").innerHTML = PROJECTS.filter(p => p.category === tab).map(p => `
      <article class="card">
        <div class="thumb" style="${bg(p.cover)}"></div>
        <div class="info"><span class="type">${t("type." + p.kind)}</span>
          <h3>${p.name[lang]}</h3>
          <button class="btn glass" data-open="${p.id}" type="button">${t("card.details")}</button>
        </div>
      </article>`).join("");

    $("#contactList").innerHTML = `
      <li><a class="glass" href="${CONTACT.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a class="glass" href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
      <li><a class="glass" href="${CONTACT.github}" target="_blank" rel="noopener">GitHub</a></li>`;
  }

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  function openProject(id) {
    const p = PROJECTS.find(x => x.id === id);
    const gal = p.photos.length ? `<div class="gallery">${p.photos.map(u => `<div style="${bg(u)}"></div>`).join("")}</div>` : "";
    const body = p.kind === "repo" ? `
      <p>${p.what[lang]}</p>${gal}
      <h3>${t("m.tech")}</h3><ul class="chips">${p.tech.map(x => `<li>${x}</li>`).join("")}</ul>
      <h3>${t("m.feat")}</h3><ul class="feat">${p.features[lang].map(x => `<li>${x}</li>`).join("")}</ul>
      <a class="btn glass" href="${p.repo}" target="_blank" rel="noopener">${t("m.repo")}</a>` : `
      ${gal}<dl>
        <dt>${t("m.desc")}</dt><dd>${p.desc[lang]}</dd>
        <dt>${t("m.req")}</dt><dd>${p.req[lang]}</dd>
        <dt>${t("m.design")}</dt><dd>${p.design[lang]}</dd>
        <dt>${t("m.impl")}</dt><dd>${p.impl[lang]}</dd>
        <dt>${t("m.result")}</dt><dd>${p.result[lang]}</dd></dl>`;
    $("#modalBody").innerHTML = `<h2>${p.name[lang]}</h2>${body}`;
    modal.showModal();
  }
  document.addEventListener("click", e => {
    const o = e.target.closest("[data-open]"); if (o) openProject(o.dataset.open);
    const tb = e.target.closest(".tab");
    if (tb) {
      tab = tb.dataset.tab;
      document.querySelectorAll(".tab").forEach(b => { const on = b === tb; b.classList.toggle("active", on); b.setAttribute("aria-selected", on); });
      render();
    }
    if (e.target === modal) modal.close();
  });
  $("#closeModal").onclick = () => modal.close();

  /* ---------- Idioma ---------- */
  $("#langBtn").addEventListener("click", () => { lang = lang === "es" ? "en" : "es"; localStorage.setItem("lang", lang); render(); });
  $("#langBtn").addEventListener("pointerdown", e => e.stopPropagation()); // no arrastrar al presionar el botón

  /* ---------- Gafete con física (resorte + arrastre) ---------- */
  const badge = $("#badge"), box = $("#lanyard"), s1 = $("#s1"), s2 = $("#s2");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let x = 0, y = 0, vx = still ? 0 : 6, vy = 0, drag = null;

  function frame() {
    if (!drag) {
      vx += -x * 0.03; vy += -y * 0.03;   // resorte hacia el centro
      vx *= 0.97; vy *= 0.97;             // fricción
      x += vx; y += vy;
    }
    const angle = Math.max(-35, Math.min(35, x / 4));
    badge.style.transform = `translate(${x}px,${y}px) rotate(${angle}deg)`;
    const b = box.getBoundingClientRect(), r = badge.getBoundingClientRect();
    const ax = b.width / 2, w = 34;                // anclas fijas arriba
    const tx = r.left - b.left + r.width / 2, ty = r.top - b.top + 6;
    s1.setAttribute("x1", ax - w); s1.setAttribute("y1", 0); s1.setAttribute("x2", tx - 12); s1.setAttribute("y2", ty);
    s2.setAttribute("x1", ax + w); s2.setAttribute("y1", 0); s2.setAttribute("x2", tx + 12); s2.setAttribute("y2", ty);
    requestAnimationFrame(frame);
  }
  badge.addEventListener("pointerdown", e => { drag = {px: e.clientX - x, py: e.clientY - y}; badge.classList.add("dragging"); badge.setPointerCapture(e.pointerId); });
  badge.addEventListener("pointermove", e => {
    if (!drag) return;
    const nx = e.clientX - drag.px, ny = e.clientY - drag.py;
    vx = nx - x; vy = ny - y;
    x = Math.max(-160, Math.min(160, nx)); y = Math.max(-40, Math.min(160, ny));
  });
  const end = () => { drag = null; badge.classList.remove("dragging"); };
  badge.addEventListener("pointerup", end); badge.addEventListener("pointercancel", end);

  $("#year").textContent = new Date().getFullYear();
  render(); frame();
})();

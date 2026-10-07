(() => {
  const $ = (s, r = document) => r.querySelector(s);
  let lang = localStorage.getItem("lang") || "es";
  let tab = "tech";
  const t = k => I18N[lang][k] ?? k;
  const bg = u => `background-image:url('${u}'),linear-gradient(135deg,var(--leaf-2),var(--rose-2))`;

  /* ---------- Render ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
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
  document.querySelectorAll(".langs button").forEach(btn => btn.addEventListener("click", () => {
    lang = btn.dataset.lang; localStorage.setItem("lang", lang); render();
  }));

  /* ---------- Gafete: péndulo con cuerda rígida (lanyard) ---------- */
  const badge = $("#badge"), box = $("#lanyard"), s1 = $("#s1"), s2 = $("#s2");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mq = matchMedia("(max-width:820px)"); let PIVOT_Y = 64; const L = 180, K = 0.006, DAMP = 0.994, MAXA = 1.35;
  let th = still ? 0 : 0.35, w = 0, drag = false;

  function frame() {
    PIVOT_Y = mq.matches ? 0 : 64; badge.style.top = (PIVOT_Y + L) + "px";
    if (!drag) { w += -K * Math.sin(th); w *= DAMP; th += w; }
    const sin = Math.sin(th), cos = Math.cos(th);
    badge.style.transform = `translate(${L * sin}px,${L * (cos - 1)}px) rotate(${-th}rad)`;
    const cx = box.clientWidth / 2, kx = cx + L * sin, ky = PIVOT_Y + L * cos;
    const set = (ln, ax, bx) => { ln.setAttribute("x1", ax); ln.setAttribute("y1", PIVOT_Y); ln.setAttribute("x2", bx); ln.setAttribute("y2", ky); };
    set(s1, cx - 12, kx - 14 * cos); s1.setAttribute("y2", ky + 14 * sin);
    set(s2, cx + 12, kx + 14 * cos); s2.setAttribute("y2", ky - 14 * sin);
    requestAnimationFrame(frame);
  }
  function aim(e) {
    const r = box.getBoundingClientRect();
    const next = Math.max(-MAXA, Math.min(MAXA, Math.atan2(e.clientX - r.left - r.width / 2, Math.max(e.clientY - r.top - PIVOT_Y, 20))));
    w = w * 0.5 + (next - th) * 0.5; th = next;
  }
  badge.addEventListener("pointerdown", e => { drag = true; badge.classList.add("dragging"); badge.setPointerCapture(e.pointerId); aim(e); });
  badge.addEventListener("pointermove", e => { if (drag) aim(e); });
  const end = () => { drag = false; badge.classList.remove("dragging"); };
  badge.addEventListener("pointerup", end); badge.addEventListener("pointercancel", end);

  $("#year").textContent = new Date().getFullYear();
  render(); frame();
})();

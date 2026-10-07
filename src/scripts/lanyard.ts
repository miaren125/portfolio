// Gafete: péndulo con cuerda RÍGIDA (no se estira) + pequeño retraso del gafete al balancearse.
const box = document.getElementById('lanyard');
const badge = document.getElementById('badge');
const s1 = document.getElementById('s1') as SVGLineElement | null;
const s2 = document.getElementById('s2') as SVGLineElement | null;

if (box && badge && s1 && s2) {
  const mobile = matchMedia('(max-width:820px)');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const L = 180;        // largo de la cuerda (px)
  const K = 0.006;      // "gravedad": más alto = se mueve más rápido
  const DAMP = 0.994;   // fricción: más cerca de 1 = se balancea más tiempo
  const MAXA = 1.35;    // ángulo máximo al arrastrar (rad)

  let th = still ? 0 : 0.35; // ángulo de la cuerda
  let w = 0;                 // velocidad angular
  let prevW = 0;
  let phi = 0;               // retraso extra del gafete
  let pv = 0;
  let drag = false;

  const frame = (): void => {
    const py = mobile.matches ? 0 : 64; // punto de donde cuelga (debajo del nav)
    badge.style.top = `${py + L}px`;

    if (!drag) { w += -K * Math.sin(th); w *= DAMP; th += w; }

    const accel = w - prevW; prevW = w;
    pv += -0.04 * phi - 0.05 * pv - accel * 2;
    phi = Math.max(-0.5, Math.min(0.5, phi + pv));

    const sin = Math.sin(th), cos = Math.cos(th);
    const a = -th + phi; // rotación total del gafete
    badge.style.transform = `translate(${L * sin}px,${L * (cos - 1)}px) rotate(${a}rad)`;

    const cx = box.clientWidth / 2;
    const kx = cx + L * sin, ky = py + L * cos;          // clip del gafete
    const dx = 14 * Math.cos(a), dy = 14 * Math.sin(a);  // separación de las dos cintas
    s1.setAttribute('x1', String(cx - 12)); s1.setAttribute('y1', String(py));
    s1.setAttribute('x2', String(kx - dx)); s1.setAttribute('y2', String(ky - dy));
    s2.setAttribute('x1', String(cx + 12)); s2.setAttribute('y1', String(py));
    s2.setAttribute('x2', String(kx + dx)); s2.setAttribute('y2', String(ky + dy));
    requestAnimationFrame(frame);
  };

  const aim = (e: PointerEvent): void => {
    const r = box.getBoundingClientRect();
    const py = mobile.matches ? 0 : 64;
    const next = Math.max(-MAXA, Math.min(MAXA,
      Math.atan2(e.clientX - r.left - r.width / 2, Math.max(e.clientY - r.top - py, 20))));
    w = w * 0.5 + (next - th) * 0.5;
    th = next;
  };

  badge.addEventListener('pointerdown', (e) => { drag = true; badge.classList.add('dragging'); badge.setPointerCapture(e.pointerId); aim(e); });
  badge.addEventListener('pointermove', (e) => { if (drag) aim(e); });
  const end = (): void => { drag = false; badge.classList.remove('dragging'); };
  badge.addEventListener('pointerup', end);
  badge.addEventListener('pointercancel', end);
  badge.addEventListener('keydown', (e) => {   // accesible con teclado
    if (e.key === 'ArrowLeft') w -= 0.05;
    if (e.key === 'ArrowRight') w += 0.05;
  });

  frame();
}

// Cambio de idioma: solo cambia <html lang>; el CSS muestra/oculta .t-es / .t-en
const btns = document.querySelectorAll<HTMLButtonElement>('.langs button');

const sync = (): void =>
  btns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === document.documentElement.lang)));

btns.forEach((b) =>
  b.addEventListener('click', () => {
    const lang = b.dataset.lang ?? 'es';
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch { /* sin storage */ }
    sync();
  }),
);
sync();

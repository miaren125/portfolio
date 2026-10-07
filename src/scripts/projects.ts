// Tabs Tech/Arte, paginación de 4 en 4 ("picar para pasar página") y modales de detalle
const cards = document.getElementById('cards') as HTMLElement;
const all = Array.from(cards.querySelectorAll<HTMLElement>('.card'));
const size = Number(cards.dataset.size) || 4;
const info = document.getElementById('pageInfo') as HTMLElement;
const prev = document.getElementById('prevPage') as HTMLButtonElement;
const next = document.getElementById('nextPage') as HTMLButtonElement;
let tab = 'tech';
let page = 0;

const current = (): HTMLElement[] => all.filter((c) => c.dataset.cat === tab);
const pageCount = (): number => Math.max(1, Math.ceil(current().length / size));

function render(): void {
  const pages = pageCount();
  page = Math.min(page, pages - 1);
  all.forEach((c) => (c.hidden = true));
  current().slice(page * size, page * size + size).forEach((c) => (c.hidden = false));
  info.textContent = `${page + 1} / ${pages}`;
  prev.disabled = next.disabled = pages === 1;
}

function turn(delta: number): void {
  const pages = pageCount();
  page = (page + delta + pages) % pages;
  cards.classList.remove('flip');
  void cards.offsetWidth; // reinicia la animación
  cards.classList.add('flip');
  render();
}

prev.addEventListener('click', () => turn(-1));
next.addEventListener('click', () => turn(1));

document.querySelectorAll<HTMLButtonElement>('.tab').forEach((t) =>
  t.addEventListener('click', () => {
    tab = t.dataset.tab ?? 'tech';
    page = 0;
    document.querySelectorAll('.tab').forEach((o) => {
      o.classList.toggle('active', o === t);
      o.setAttribute('aria-selected', String(o === t));
    });
    cards.classList.remove('flip');
    void cards.offsetWidth;
    cards.classList.add('flip');
    render();
  }),
);

// Modales
document.addEventListener('click', (e) => {
  const el = e.target as HTMLElement;
  const open = el.closest<HTMLElement>('[data-open]');
  if (open) (document.getElementById(open.dataset.open!) as HTMLDialogElement | null)?.showModal();

  if (el.closest('[data-close]')) el.closest('dialog')?.close();
  else if (el instanceof HTMLDialogElement) el.close(); // clic en el fondo oscuro

  const g = el.closest<HTMLElement>('.g-btn');
  if (g) {
    const gal = g.parentElement!.querySelector<HTMLElement>('.gallery')!;
    gal.scrollBy({ left: Number(g.dataset.dir) * gal.clientWidth, behavior: 'smooth' });
  }
});

render();

/** Devuelve la ruta correcta aunque el sitio viva en /nombre-del-repo */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

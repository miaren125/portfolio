import type { Bi } from './content';

/**
 * category: 'tech' (folder de código) | 'arte' (folder de arte)
 * Si tiene `repo`, el detalle muestra el botón del repositorio.
 * Los proyectos sin repo (bases de datos, etc.) usan desc/req/design/impl/result (los "blogs").
 * Rutas de imágenes: dentro de public/  (ej. 'images/projects/p1.jpg')
 */
export type Project = {
  id: string; category: 'tech' | 'arte'; name: Bi; cover: string; photos?: string[];
  what?: Bi; tech?: string[]; features?: Bi[]; repo?: string;
  desc?: Bi; req?: Bi; design?: Bi; impl?: Bi; result?: Bi;
};

const ph = (es = 'Placeholder.', en = 'Placeholder.'): Bi => ({ es, en });

export const projects: Project[] = [
  { id: 'p1', category: 'tech', name: ph('Proyecto 1', 'Project 1'), cover: 'images/projects/p1-1.jpg',
    photos: ['images/projects/p1-1.jpg', 'images/projects/p1-2.jpg', 'images/projects/p1-3.jpg'],
    what: ph('Qué es el proyecto y en qué participé.', 'What the project is and my part in it.'),
    tech: ['HTML', 'CSS', 'JS'], features: [ph('Feature 1', 'Feature 1'), ph('Feature 2', 'Feature 2')],
    repo: 'https://github.com/TU-USUARIO/repo-1' },
  { id: 'p2', category: 'tech', name: ph('Proyecto 2', 'Project 2'), cover: 'images/projects/p2-1.jpg',
    what: ph(), tech: ['Python'], features: [ph('Feature 1', 'Feature 1')], repo: 'https://github.com/TU-USUARIO/repo-2' },
  { id: 'p3', category: 'tech', name: ph('Proyecto 3', 'Project 3'), cover: 'images/projects/p3-1.jpg',
    what: ph(), tech: ['Java'], features: [ph('Feature 1', 'Feature 1')], repo: 'https://github.com/TU-USUARIO/repo-3' },
  { id: 'b1', category: 'tech', name: ph('Blog: Administración de base de datos', 'Blog: Database administration'),
    cover: 'images/projects/b1-1.jpg', desc: ph(), req: ph('Requerimientos del cliente.', 'Client requirements.'),
    design: ph(), impl: ph(), result: ph() },
  { id: 'b2', category: 'tech', name: ph('Blog: Proyecto 2', 'Blog: Project 2'), cover: 'images/projects/b2-1.jpg',
    desc: ph(), req: ph(), design: ph(), impl: ph(), result: ph() },
  { id: 'a1', category: 'arte', name: ph('Proyecto de arte 1', 'Art project 1'), cover: 'images/projects/a1-1.jpg',
    what: ph(), desc: ph(), result: ph() },
  { id: 'a2', category: 'arte', name: ph('Proyecto de arte 2', 'Art project 2'), cover: 'images/projects/a2-1.jpg',
    what: ph(), desc: ph(), result: ph() },
];

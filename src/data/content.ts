/* ===== TODO EL CONTENIDO DEL SITIO (edita aquí) ===== */
export type Bi = { es: string; en: string };

export const profile = {
  name: ['Mia Renee', 'Valenzuela', 'Yescas'],
  role: { es: 'Puesto al que aspiras (placeholder)', en: 'Target position (placeholder)' } as Bi,
};

export const contacts = {
  linkedin: 'https://www.linkedin.com/in/TU-USUARIO',
  github: 'https://github.com/TU-USUARIO',
  email: 'tucorreo@ejemplo.com',
};

export const about = {
  who: { es: '¿Quién eres? Placeholder: escribe aquí quién eres.', en: 'Who are you? Placeholder: write who you are here.' } as Bi,
  can: { es: '¿Qué puedes hacer? Placeholder: escribe aquí lo que sabes hacer.', en: 'What can you do? Placeholder: write what you can do here.' } as Bi,
  cv: 'cv/CV-Mia-Valenzuela.pdf',
};

/** level = % de la barra */
export const hardSkills = [
  { name: 'HTML / CSS', level: 80 }, { name: 'JavaScript', level: 60 }, { name: 'Python', level: 70 },
  { name: 'SQL / Bases de datos', level: 65 }, { name: 'Git / GitHub', level: 70 }, { name: 'Java', level: 50 },
  { name: 'Placeholder 7', level: 40 }, { name: 'Placeholder 8', level: 30 },
];

export const softSkills: Bi[] = [
  { es: 'Trabajo en equipo', en: 'Teamwork' }, { es: 'Comunicación', en: 'Communication' },
  { es: 'Adaptabilidad', en: 'Adaptability' }, { es: 'Creatividad', en: 'Creativity' },
  { es: 'Resolución de problemas', en: 'Problem solving' }, { es: 'Organización', en: 'Organization' },
];

export const education = [
  { title: { es: 'Ingeniería en Sistemas (placeholder)', en: 'Systems Engineering (placeholder)' } as Bi,
    place: { es: 'Universidad / Institución', en: 'University / Institution' } as Bi, years: '20XX – 20XX' },
  { title: { es: 'Otra carrera o curso (placeholder)', en: 'Another degree or course (placeholder)' } as Bi,
    place: { es: 'Institución', en: 'Institution' } as Bi, years: '20XX – 20XX' },
];

export const aspire: Bi[] = [
  { es: 'Desarrolladora Web', en: 'Web Developer' },
  { es: 'Desarrolladora Full Stack', en: 'Full Stack Developer' },
  { es: 'Administradora de Bases de Datos', en: 'Database Administrator' },
  { es: 'Ilustradora / Artista digital', en: 'Illustrator / Digital Artist' },
];

/* ====== TODO EL CONTENIDO VIVE AQUÍ ====== */
const CONTACT = {
  linkedin: "https://www.linkedin.com/in/mia-valenzuela", // Cambia por tu link
  github: "https://github.com/TU-USUARIO", // Cambia por tu usuario
  email: "tucorreo@ejemplo.com" // Cambia por tu correo
};

const I18N = {
  es: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Proyectos","nav.contact":"Contacto",
    "hero.hello":"¡Hola! soy:","hero.role":"Ingeniera en Sistemas & Artista Digital",
    "about.title":"Descripción",
    "about.who":"Soy estudiante de Ingeniería en Sistemas en la Universidad de Sonora. Me especializo en el desarrollo técnico de videojuegos, ingeniería de software y arte digital. Formo parte del colectivo de desarrollo ELOA (Eat Logic Output Art) como desarrolladora técnica y líder visual.",
    "about.can":"Tengo experiencia creando videojuegos interactivos en Unity y Unreal Engine 5, desarrollando aplicaciones web full-stack, manejando bases de datos y diseñando interfaces (UI/UX). Fusiono la lógica de programación con el diseño artístico para crear experiencias interactivas completas.",
    "about.cv":"CV descargable",
    "skills.title":"Habilidades","skills.hard":"Hard skills","skills.soft":"Soft skills",
    "edu.title":"Educación","aspire.title":"Puestos a los que aspiro",
    "tabs.art":"Arte","card.details":"Detalles","type.repo":"Repositorio","type.blog":"Blog",
    "m.what":"¿Qué es y en qué participé?","m.tech":"Tecnologías","m.feat":"Key features","m.repo":"Ver repositorio",
    "m.desc":"Descripción","m.req":"Requerimientos del cliente","m.design":"¿Cómo se diseñó la solución?",
    "m.impl":"¿Cómo se implementó la solución?","m.result":"¿Cuál fue el resultado?",
    "contact.thanks":"Gracias por querer contactarme. Siempre estoy abierta a platicar sobre desarrollo, arte digital o nuevos proyectos."
  },
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "hero.hello":"Hi! I'm:","hero.role":"Systems Engineer & Digital Artist",
    "about.title":"About me",
    "about.who":"I'm a Systems Engineering student at Universidad de Sonora. I specialize in technical game development, software engineering, and digital art. I am a core member of the ELOA (Eat Logic Output Art) collective as a technical developer and visual lead.",
    "about.can":"I have experience building interactive games in Unity and Unreal Engine 5, developing full-stack web applications, managing databases, and designing UI/UX. I blend programming logic with artistic design to create complete interactive experiences.",
    "about.cv":"Download CV",
    "skills.title":"Skills","skills.hard":"Hard skills","skills.soft":"Soft skills",
    "edu.title":"Education","aspire.title":"Positions I aim for",
    "tabs.art":"Art","card.details":"Details","type.repo":"Repository","type.blog":"Blog",
    "m.what":"What is it and what did I do?","m.tech":"Technologies","m.feat":"Key features","m.repo":"View repository",
    "m.desc":"Description","m.req":"Client requirements","m.design":"How was the solution designed?",
    "m.impl":"How was it implemented?","m.result":"What was the result?",
    "contact.thanks":"Thanks for reaching out! I'm always open to chat about game dev, digital art, or new projects."
  }
};

/* level = porcentaje de la barra (ya está configurado a doble fila por tu CSS) */
const HARD_SKILLS = [
  {name:"Unity (C#) & URP", level:90},
  {name:"Unreal Engine 5 (C++ / Blueprints)", level:75},
  {name:"Python & Flask", level:80},
  {name:"SQL (PostgreSQL, MySQL, SQLite)", level:85},
  {name:"HTML / CSS / JavaScript", level:85},
  {name:"Git / GitHub", level:90},
  {name:"Figma & UI/UX", level:80},
  {name:"Clip Studio Paint & Krita", level:95}
];

const SOFT_SKILLS = {
  es:["Trabajo en equipo","Liderazgo Visual","Resolución de problemas","Creatividad","Diseño Narrativo","Adaptabilidad"],
  en:["Teamwork","Visual Leadership","Problem Solving","Creativity","Narrative Design","Adaptability"]
};

const EDUCATION = {
  es:[{title:"Ingeniería en Sistemas",place:"Universidad de Sonora (UNISON) - Hermosillo",years:"Actualidad"}],
  en:[{title:"Systems Engineering",place:"Universidad de Sonora (UNISON) - Hermosillo",years:"Present"}]
};

const ASPIRE = {
  es:["Desarrolladora de Videojuegos","Technical Artist","Desarrolladora Web Full Stack","Diseñadora UI/UX"],
  en:["Game Developer","Technical Artist","Full Stack Web Developer","UI/UX Designer"]
};

/* Proyectos divididos en TECH y ARTE, y en REPO o BLOG (para lo que pidió tu profesor) */
const PROJECTS = [
  // --- TECH (Repos y Blogs técnicos) ---
  {id:"tech1", category:"tech", kind:"repo", cover:"assets/img/proyectos/tech1.jpg",
   name:{es:"Protocol Entropy", en:"Protocol Entropy"},
   what:{es:"Desarrollo técnico de un videojuego basado en físicas centrado en el Modelo Estándar de partículas elementales.", en:"Technical development of a physics-based video game centered on the Standard Model of particle physics."},
   tech:["Unity", "C#", "Físicas 2D/3D"],
   features:{es:["Mecánicas basadas en interacciones de partículas","Aceptado en MexIHC 2026 y Congreso Nacional de Física"], en:["Mechanics based on particle interactions","Accepted for MexIHC 2026"]},
   photos:[], repo:"https://github.com/TU-USUARIO/protocol-entropy"},

  {id:"tech2", category:"tech", kind:"repo", cover:"assets/img/proyectos/tech2.jpg",
   name:{es:"Sistema de Coordenadas Web", en:"Coordinate System Web"},
   what:{es:"Plataforma educativa web con herramientas de graficación 3D y calculadoras de conversión de coordenadas.", en:"Educational web platform featuring 3D graphing tools and coordinate conversion calculators."},
   tech:["HTML", "CSS", "JavaScript", "Python"],
   features:{es:["Visualización 3D interactiva", "Calculadoras precisas en tiempo real"], en:["Interactive 3D visualization", "Real-time precision calculators"]},
   photos:[], repo:"https://github.com/TU-USUARIO/sistema-coordenadas"},

  {id:"blog1", category:"tech", kind:"blog", cover:"assets/img/proyectos/blog1.jpg",
   name:{es:"Memoria y Legado (Portal Gubernamental)", en:"Memoria y Legado (Gov Portal)"},
   desc:{es:"Prototipo de portal web para el Gobierno del Estado de Sonora para la localización de tumbas y nichos.", en:"Web portal prototype for the Government of Sonora to locate graves and niches."},
   req:{es:"Crear un sistema intuitivo y respetuoso para que los ciudadanos busquen a sus familiares fallecidos.", en:"Create an intuitive and respectful system for citizens to find deceased relatives."},
   design:{es:"Se diseñaron layouts de UI/UX en Figma con un tono institucional y un dashboard fácil de usar.", en:"UI/UX layouts were designed in Figma with an institutional tone and an easy-to-use dashboard."},
   impl:{es:"Arquitectura visual y mock-ups listos para integración con bases de datos.", en:"Visual architecture and mock-ups ready for database integration."},
   result:{es:"Un diseño aprobado que facilita la navegación y búsqueda de registros históricos.", en:"An approved design that facilitates navigation and search of historical records."},
   photos:[]},

  // --- ARTE (Juegos con enfoque narrativo/visual y proyectos artísticos) ---
  {id:"arte1", category:"arte", kind:"repo", cover:"assets/img/proyectos/arte1.jpg",
   name:{es:"Sobremesa", en:"Sobremesa"},
   what:{es:"Visual novel otome gótica con mecánicas de restauración de antigüedades y múltiples rutas narrativas.", en:"Gothic otome visual novel incorporating antique restoration mechanics and multi-route narratives."},
   tech:["Unity", "C#", "Clip Studio Paint", "Krita"],
   features:{es:["Diseño de personajes propio","Múltiples finales narrativos","Mecánica de restauración"], en:["Original character design","Multiple narrative endings","Restoration mechanics"]},
   photos:[], repo:"https://github.com/TU-USUARIO/sobremesa"},

  {id:"arte2", category:"arte", kind:"repo", cover:"assets/img/proyectos/arte2.jpg",
   name:{es:"The Bound Anthology", en:"The Bound Anthology"},
   what:{es:"Novela visual de terror gótico desarrollada para una Game Jam de Halloween.", en:"Gothic horror visual novel developed for a Halloween game jam."},
   tech:["Unity", "C#", "UI/UX"],
   features:{es:["Atmósfera de terror gótico","Programación de mecánicas e interfaz completas en tiempo límite"], en:["Gothic horror atmosphere","Full mechanics and UI programming within a time limit"]},
   photos:[], repo:"https://github.com/TU-USUARIO/bound-anthology"},

   {id:"arte3", category:"arte", kind:"repo", cover:"assets/img/proyectos/arte3.jpg",
   name:{es:"Lerping", en:"Lerping"},
   what:{es:"Concepto de juego educativo para enseñar fundamentos de programación a niños usando a la mascota robot LERP.", en:"Educational game concept to teach programming fundamentals to children using the robot mascot LERP."},
   tech:["Unity", "Diseño Narrativo"],
   features:{es:["Mascota interactiva (LERP)","Traducción de conceptos lógicos a mecánicas de juego visuales"], en:["Interactive mascot (LERP)","Translation of logical concepts to visual game mechanics"]},
   photos:[], repo:"https://github.com/TU-USUARIO/lerping"}
];
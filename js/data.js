/* ====== TODO EL CONTENIDO VIVE AQUÍ (edita solo este archivo) ====== */
const CONTACT = {
  linkedin: "https://www.linkedin.com/in/TU-USUARIO",
  github: "https://github.com/TU-USUARIO",
  email: "tucorreo@ejemplo.com"
};

const I18N = {
  es: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Proyectos","nav.contact":"Contacto",
    "hero.hello":"¡Hola! soy:","hero.role":"Puesto al que aspiras (placeholder)",
    "about.title":"Descripción","about.who":"¿Quién eres? Placeholder: escribe aquí quién eres.",
    "about.can":"¿Qué puedes hacer? Placeholder: escribe aquí lo que sabes hacer.","about.cv":"CV descargable",
    "skills.title":"Habilidades","skills.hard":"Hard skills","skills.soft":"Soft skills",
    "edu.title":"Educación","aspire.title":"Puestos a los que aspiro",
    "tabs.art":"Arte","card.details":"Detalles","type.repo":"Repositorio","type.blog":"Blog",
    "m.what":"¿Qué es y en qué participé?","m.tech":"Tecnologías","m.feat":"Key features","m.repo":"Ver repositorio",
    "m.desc":"Descripción","m.req":"Requerimientos del cliente","m.design":"¿Cómo se diseñó la solución?",
    "m.impl":"¿Cómo se implementó la solución?","m.result":"¿Cuál fue el resultado?",
    "contact.thanks":"Gracias por querer contactarme. Placeholder: escribe aquí un mensaje corto."
  },
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "hero.hello":"Hi! I'm:","hero.role":"Target position (placeholder)",
    "about.title":"About me","about.who":"Who are you? Placeholder: write who you are here.",
    "about.can":"What can you do? Placeholder: write what you can do here.","about.cv":"Download CV",
    "skills.title":"Skills","skills.hard":"Hard skills","skills.soft":"Soft skills",
    "edu.title":"Education","aspire.title":"Positions I aim for",
    "tabs.art":"Art","card.details":"Details","type.repo":"Repository","type.blog":"Blog",
    "m.what":"What is it and what did I do?","m.tech":"Technologies","m.feat":"Key features","m.repo":"View repository",
    "m.desc":"Description","m.req":"Client requirements","m.design":"How was the solution designed?",
    "m.impl":"How was it implemented?","m.result":"What was the result?",
    "contact.thanks":"Thanks for wanting to reach out. Placeholder: write a short message here."
  }
};

/* level = porcentaje de la barra */
const HARD_SKILLS = [
  {name:"HTML / CSS", level:80},{name:"JavaScript", level:60},{name:"Python", level:70},
  {name:"SQL / Bases de datos", level:65},{name:"Git / GitHub", level:70},{name:"Java", level:50},
  {name:"Placeholder 7", level:40},{name:"Placeholder 8", level:30}
];
const SOFT_SKILLS = {
  es:["Trabajo en equipo","Comunicación","Adaptabilidad","Creatividad","Resolución de problemas","Organización"],
  en:["Teamwork","Communication","Adaptability","Creativity","Problem solving","Organization"]
};
const EDUCATION = {
  es:[{title:"Ingeniería en Sistemas (placeholder)",place:"Universidad / Institución",years:"20XX – 20XX"},
      {title:"Otra carrera o curso (placeholder)",place:"Institución",years:"20XX – 20XX"}],
  en:[{title:"Systems Engineering (placeholder)",place:"University / Institution",years:"20XX – 20XX"},
      {title:"Another degree or course (placeholder)",place:"Institution",years:"20XX – 20XX"}]
};
const ASPIRE = {
  es:["Desarrolladora Web","Desarrolladora Full Stack","Administradora de Bases de Datos","Ilustradora / Artista digital"],
  en:["Web Developer","Full Stack Developer","Database Administrator","Illustrator / Digital Artist"]
};

/* kind: "repo" (tarea 2) o "blog" (proyectos sin repositorio). category: "tech" o "arte". */
const PROJECTS = [
  {id:"p1",category:"tech",kind:"repo",cover:"assets/img/proyectos/p1-1.jpg",
   name:{es:"Nombre del proyecto 1",en:"Project name 1"},
   what:{es:"Placeholder: qué es el proyecto y en qué parte participé.",en:"Placeholder: what the project is and my part in it."},
   tech:["HTML","CSS","JS"],features:{es:["Feature 1","Feature 2","Feature 3"],en:["Feature 1","Feature 2","Feature 3"]},
   photos:["assets/img/proyectos/p1-1.jpg","assets/img/proyectos/p1-2.jpg","assets/img/proyectos/p1-3.jpg"],
   repo:"https://github.com/TU-USUARIO/repo-1"},
  {id:"p2",category:"tech",kind:"repo",cover:"assets/img/proyectos/p2-1.jpg",
   name:{es:"Nombre del proyecto 2",en:"Project name 2"},
   what:{es:"Placeholder.",en:"Placeholder."},tech:["Python"],features:{es:["Feature 1"],en:["Feature 1"]},
   photos:[],repo:"https://github.com/TU-USUARIO/repo-2"},
  {id:"b1",category:"tech",kind:"blog",cover:"assets/img/proyectos/b1-1.jpg",
   name:{es:"Blog: Administración de base de datos",en:"Blog: Database administration"},
   desc:{es:"Placeholder: descripción.",en:"Placeholder: description."},
   req:{es:"Placeholder: requerimientos del cliente.",en:"Placeholder: client requirements."},
   design:{es:"Placeholder: cómo se diseñó la solución.",en:"Placeholder: how it was designed."},
   impl:{es:"Placeholder: cómo se implementó.",en:"Placeholder: how it was implemented."},
   result:{es:"Placeholder: resultado.",en:"Placeholder: result."},photos:[]},
  {id:"a1",category:"arte",kind:"blog",cover:"assets/img/proyectos/a1-1.jpg",
   name:{es:"Proyecto de arte 1",en:"Art project 1"},
   desc:{es:"Placeholder.",en:"Placeholder."},req:{es:"Placeholder.",en:"Placeholder."},
   design:{es:"Placeholder.",en:"Placeholder."},impl:{es:"Placeholder.",en:"Placeholder."},
   result:{es:"Placeholder.",en:"Placeholder."},photos:[]}
];

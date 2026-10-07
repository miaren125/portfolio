// Lógica para cambiar entre pestañas de Tech y Arte
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).style.display = 'grid';
    event.currentTarget.classList.add('active');
}

// Datos de tus proyectos para el modal
const projectData = {
    'protocol': {
        title: 'Protocol Entropy',
        desc: 'Un videojuego basado en la física del Modelo Estándar de partículas. Fui la desarrolladora principal.',
        req: 'Crear una experiencia lúdica que enseñe conceptos de física avanzada para congresos.',
        impl: 'Diseñado con un enfoque educativo interactivo e implementado integrando consultas de física reales en la mecánica del juego.',
        tech: 'Unity, C#',
        res: 'Aceptado para presentación en MexIHC y el Congreso Nacional de Física.',
        link: 'https://github.com/tu-usuario/protocol-entropy'
    },
    'coordenadas': {
        title: 'Sistema de Coordenadas',
        desc: 'Plataforma web educativa con herramientas de graficación 3D.',
        req: 'Proveer calculadoras de conversión y visualización 3D para estudiantes.',
        impl: 'Se diseñaron interfaces responsivas y se programaron algoritmos matemáticos en el backend.',
        tech: 'Python, HTML, CSS, JavaScript',
        res: 'Herramienta funcional y accesible para estudiantes.',
        link: 'https://github.com/tu-usuario/sistema-coordenadas'
    },
    'lerping': {
        title: 'Lerping',
        desc: 'Juego educativo para enseñar fundamentos de programación a niños usando a la mascota robot LERP.',
        req: 'Crear una interfaz amigable para un público infantil.',
        impl: 'Se conceptualizó la narrativa y mecánicas de programación por bloques lógicos.',
        tech: 'Unity, C#, Arte Digital',
        res: 'Prototipo funcional con excelente recepción visual.',
        link: 'https://github.com/tu-usuario/lerping'
    },
    'bound': {
        title: 'The Bound Anthology',
        desc: 'Visual novel de terror gótico creada para un Game Jam de Halloween.',
        req: 'Desarrollar una narrativa ramificada en tiempo límite.',
        impl: 'Programé mecánicas de juego, flujos de historia e interfaz de usuario.',
        tech: 'Unity, C#, Herramientas de UI',
        res: 'Juego completado y publicado exitosamente en el marco del Game Jam.',
        link: 'https://github.com/tu-usuario/bound-anthology'
    },
    'sobremesa': {
        title: 'Sobremesa',
        desc: 'Otome visual novel de temática gótica con mecánicas de restauración de antigüedades.',
        req: 'Integrar minijuegos de restauración dentro de rutas de personajes.',
        impl: 'Diseño de personajes, arcos narrativos y lógica de los minijuegos.',
        tech: 'Unity, Clip Studio Paint, Figma',
        res: 'En fase de desarrollo activo con la preproducción completada.',
        link: 'https://github.com/tu-usuario/sobremesa'
    }
};

// Lógica del Modal
const modal = document.getElementById("projectModal");

function openModal(projectId) {
    const data = projectData[projectId];
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalDesc").innerText = data.desc;
    document.getElementById("modalReq").innerText = data.req;
    document.getElementById("modalImpl").innerText = data.impl;
    document.getElementById("modalTech").innerText = data.tech;
    document.getElementById("modalRes").innerText = data.res;
    document.getElementById("modalLink").href = data.link;
    
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
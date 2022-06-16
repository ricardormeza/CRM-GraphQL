
const cursos = [{
    titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
    tecnologia: 'JavaScript ES6',
},
{
    titulo: 'React - La Guía Completa: Hooks Context Redux MERN +15 Apps',
    tecnologia: 'Reaccionar',
},
{
    titulo: 'Node.js - Bootcamp Desarrollo Web inc. MVC y API´s REST ',
    tecnologia: 'Node.js'
},
{
    titulo: 'ReactJS Avanzado - FullStack React GraphQL y Apollo',
    tecnologia: 'Reaccionar'
}
];
// resolvers

const resolvers = {
    Query: {
        obtenerCursos: () => cursos,
        obtenerTecnologia: () => cursos
    }
}

module.exports = resolvers;
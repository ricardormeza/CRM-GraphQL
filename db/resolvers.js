const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');

// resolvers
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    },
    Mutation: {
        nuevoUsuario: async (_, { input }) => {
            //console.log(input);

            const { email, password } = input;

            //Revisar si el usuario ya esta registrado
            const existeUsuario = await Usuario.findOne({email});
            //console.log(existeUsuario);
            if (existeUsuario){
                throw new Error('El usuario ya esta registrado');
            }

            //Hashear su password
            const salt = bcryptjs.genSaltSync(10);
            input.password = bcryptjs.hashSync(password, salt);

            try{
                //Guardar en la base de datos
                const usuario = new Usuario(input);
                //guardamos el usuario
                usuario.save();
                return usuario;
            }catch (error){
                console.log(error);
            }

            
        }
    }
}

module.exports = resolvers;
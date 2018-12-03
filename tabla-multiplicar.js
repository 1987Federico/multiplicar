//requireds
const colors = require('colors');

const argv = require('yargs').command('listar', 'imprime tabla', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: '10'

        }
    })
    .help()
    .argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', (archivo).red))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}




//let parametro = argv[2];
//let base = parametro.split('=')[1];
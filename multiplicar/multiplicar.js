const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {


    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('no es un numero');
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${i} * ${base}=${i*base}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}-limite-${limite}.txt`)
            };
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) || !Number(limite)) {
            reject(`El valor de la ${base} no es un numero`)
            return;
        } else {
            console.log('=================='.green);
            console.log(`tabla de ${ base }===`.green);
            console.log('====================='.green);
            for (let i = 0; i <= limite; i++) {
                data += `${i} * ${base} = ${i*base}\n`;

            }

        }
        resolve(data);
    })

};




module.exports = {
    crearArchivo,
    listarTabla
};
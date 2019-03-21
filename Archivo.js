nombre = {
    alias:'n',
    demand: true
},
    matematicas={
        demand: true,
        alias:'m'
    },
    ingles={
        demand: 0,
        alias:'i'
},
programacion={
    demand: true,
    alias:'p'
}
const argv = require('yargs')
.command ('promedio','Calcular el promedio', opciones)
.argv
console.log(argv.matematicas);
console.log(argv);
console.log('El promedio es: '+ (argv.m+argv.i+argv.p)/3);
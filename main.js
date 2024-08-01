//console.log("Hola Mundo! desde la consola")
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniera en Sistemas Computacionales| Tecnica con titulo en Programación')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!<strong>')
    .pauseFor()
    .start();
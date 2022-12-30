function myfunction() {


    var x = 1024;
    var y = 9999;

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function () {
        element.classList.add('animate');
    }, 5000);
}


var listaCoders = [];

let show = listaCoders[Math.floor(Math.random() * listaCoders.length)];
// console.info(show)

let coder = document.getElementById('coder')
let anadir = document.getElementById('anadir')
let listar = document.getElementById('listado')
let wheel = document.getElementById("coder-1")
let expandable = document.getElementById("box")

function agregarCoder() {
    anadir.addEventListener("click", () => {
        listaCoders.push(coder.value)
        console.log(listaCoders)
        listar.innerHTML += `<p>${coder.value}</p>`
        wheel.innerHTML += `<p>${coder.value}</p>`
    })
}

agregarCoder()






document.getElementById('kill-button').addEventListener("click", e => {
    if (!listaCoders.length) return;
    const coderKilled = Math.floor(Math.random() * listaCoders.length);
    let killed = listaCoders[coderKilled];
    listaCoders.splice(coderKilled, 1);
    loosers.innerHTML += `<p>${killed}</p>`
});




function play() {
    var audio = document.getElementById("anadir");
    audio.play();
    audio.volume = 0.2;
}

function play() {
    var audio = document.getElementById("bgaudio");
    audio.play();
    audio.volume = 0.1;
}


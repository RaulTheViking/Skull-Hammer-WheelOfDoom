var codersList = [];

let coder = document.getElementById('coder')
let add = document.getElementById('add')
let listing = document.getElementById('listado')

function addCoder() {
    add.addEventListener("click", () => {
        codersList.push(coder.value)
        listing.innerHTML += `<p>${coder.value}</p>`
        document.getElementById ("coder").value = "";
    })
}

addCoder()


document.getElementById('kill-button').addEventListener("click", e => {
    if (!codersList.length) return;
  
    const coderKilled = Math.floor(Math.random() * codersList.length);
    const killed = codersList[coderKilled];
    codersList = codersList.filter((_, i) => i !== coderKilled);
  
    updateListado(codersList);
    updateLoosers(killed);
    updateMurdered(killed);
  });
  
  function updateListado (items) {
    const listing = document.getElementById("listado");
    listing.innerHTML = "";
    items.forEach(item => {
      listing.innerHTML += `<p>${item}</p>`;
    });
  };
  
  function updateLoosers (item) {
    const loosers = document.getElementById("loosers");
    loosers.innerHTML += `<p>${item}</p>`;
  };
  
  function updateMurdered (item) {
    const murdered = document.getElementById("murdered");
    murdered.innerHTML += `<p>${item} has been murdered </p>`;
  };


var modal = document.getElementById("pop-Up");
var btn = document.getElementById("kill-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function play() {
    var audio = document.getElementById("audiox");
    audio.play();
    audio.volume = 0.2;
}

function play() {
    var audio = document.getElementById("bgaudio");
    audio.play();
    audio.volume = 0.1;
}


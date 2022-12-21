function myfunction(){


	var x = 1024;
	var y = 9999; 

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 5000);
}


let listaDeCoders = []


listaDeCoders.push ();

//slice 

var coder1 = document.getElementById('coder-1');
var coder2 = document.getElementById('coder-2');
var coder3 = document.getElementById('coder-3');
var coder4 = document.getElementById('coder-4');
var coder5 = document.getElementById('coder-5');
var coder6 = document.getElementById('coder-6');
var coder7 = document.getElementById('coder-7');
var coder8 = document.getElementById('coder-8');



//funciones de los arrays 

function updateText() {
    // Obtén el valor del input
    var inputText = document.getElementById("input-text").value;
  
    // Establece el valor del input como el contenido del elemento text-container
    document.getElementById("text-container").innerHTML = inputText;
  }
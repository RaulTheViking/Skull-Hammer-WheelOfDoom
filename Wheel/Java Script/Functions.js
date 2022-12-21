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

function updateText() {
    // Obtén el valor del input
    var inputText = document.getElementById("input-1").value;
    var inputText = document.getElementById("input-2").value;
    var inputText = document.getElementById("input-3").value;
    var inputText = document.getElementById("input-4").value;
    var inputText = document.getElementById("input-5").value;
    var inputText = document.getElementById("input-6").value;

    // Establece el valor del input como el contenido del elemento text-container
    document.getElementById("coder-1").innerHTML = inputText;
    document.getElementById("coder-2").innerHTML = inputText;
    document.getElementById("coder-3").innerHTML = inputText;
    document.getElementById("coder-4").innerHTML = inputText;
    document.getElementById("coder-5").innerHTML = inputText;
    document.getElementById("coder-6").innerHTML = inputText;


}
 
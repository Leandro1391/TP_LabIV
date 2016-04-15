/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random() * 100)+1;
	
	 
		alert(numeroSecreto );
	

}

function verificar()
{
	contadorIntentos++;
	document.getElementById("intentos").value = contadorIntentos;
	var numeroIngresado = parseInt(document.getElementById("numero").value); //obtengo el numero que ingrese en el formulario ingreso
	//y el mismo tipo de objeto int

	//Inspeccion
	//alert("numero ingresado: " + numeroIngresado); 


	//si es equal value and equal type ===

	if(numeroIngresado == numeroSecreto)
	{
			alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
			document.location.href="AdivinaElNumero1.html";
	} 
			

	if(numeroIngresado < numeroSecreto)
			alert("falta....");

	if(numeroIngresado > numeroSecreto)
			alert("se pasó....");

	
}
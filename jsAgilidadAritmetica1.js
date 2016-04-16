/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno;
var numeroDos;
var stringOperator="+-*/";
var operador;


function comenzar()
{
	//alert("funcion Comenzar");

	numeroUno=Math.floor(Math.random() * 10)+1;

	operador=stringOperator.substr(Math.floor(Math.random() * 4), 1);

	numeroDos=Math.floor(Math.random() * 10)+1;

	document.getElementById("PrimerNumero").value=numeroUno;
	document.getElementById("Operador").value=operador;
	document.getElementById("SegundoNumero").value=numeroDos;

}//FIN DE LA FUNCIÓN


function Responder()
{
	switch(operador)
	{
		case'+':
			respuesta = numeroUno+numeroDos;
			if (respuesta == document.getElementById("Respuesta").value)
				alert("Correcto la respuesta es "+ respuesta);
			else
				alert("Incorrecto la respuesta es "+respuesta+" NO "+ document.getElementById("Respuesta").value );
		break;
		case'-':
			respuesta = numeroUno-numeroDos;
			if (respuesta == document.getElementById("Respuesta").value)
				alert("Correcto la respuesta es "+ respuesta);
			else
				alert("Incorrecto la respuesta es "+respuesta+" NO "+ document.getElementById("Respuesta").value );
		break;
		case'*':
			respuesta = numeroUno*numeroDos;
			if (respuesta == document.getElementById("Respuesta").value)
				alert("Correcto la respuesta es "+ respuesta);
			else
				alert("Incorrecto la respuesta es "+respuesta+" NO "+ document.getElementById("Respuesta").value );
		break;
		case'/':
			respuesta = parseInt(numeroUno/numeroDos);
			if (respuesta == parseInt(document.getElementById("Respuesta").value))
				alert("Correcto la respuesta es "+ respuesta);
			else
				alert("Incorrecto la respuesta es "+respuesta+" NO "+ document.getElementById("Respuesta").value );
		break;
	}

	document.location.href="AgilidadAritmetica1.html";

}//FIN DE LA FUNCIÓN


/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */


var respuesta;
var numeroUno;
var numeroDos;
var stringOperator="+-*/";
var operador;
var temporizador;



function comenzar()
{

	numeroUno=Math.floor(Math.random() * 10)+1;

	operador=stringOperator.substr(Math.floor(Math.random() * 4), 1);

	numeroDos=Math.floor(Math.random() * 10)+1;

	document.getElementById("PrimerNumero").value=numeroUno;
	document.getElementById("Operador").value=operador;
	document.getElementById("SegundoNumero").value=numeroDos;

	setTimeout(Responder, 4000);

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

	//document.location.href="AgilidadAritmetica2.html";
	document.getElementById("Respuesta").value="";
	comenzar();

}//FIN DE LA FUNCIÓN

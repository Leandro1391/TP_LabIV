/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{

	numeroSecreto=Math.floor(Math.random() *100)+1;

	//inspeccion
	//alert("El número secreto es: " + numeroSecreto);
	alert("se generó el número random");	

}

function verificar()
{
	contadorIntentos++;

	numeroIngresado=parseInt(document.getElementById("numero").value);

	document.getElementById("intentos").value=contadorIntentos;

	//inspección
	//alert("Número ingresado es: " + numeroIngresado);

	switch(contadorIntentos){

		case 1:
		if (numeroIngresado==numeroSecreto)
		{
				alert("Usted es un Psíquico");
				document.location.href="AdivinaElnumero2.html";
		}
		else
			cerca(numeroIngresado);
			break;
		case 2:


		if (numeroIngresado==numeroSecreto)
		{
			alert("excelente percepción");
			document.location.href="AdivinaElnumero2.html";
		}
		else
			cerca(numeroIngresado);
			break;


		case 3:
		if (numeroIngresado==numeroSecreto)
		{
			alert("Esto es suerte");
			document.location.href="AdivinaElnumero2.html";
		}
		else
			cerca(numeroIngresado);
			break;


		case 4:
		if (numeroIngresado==numeroSecreto)
		{
			alert("Excelente técnica");
			document.location.href="AdivinaElnumero2.html";
		}
		else
			cerca(numeroIngresado);
		break;


		case 5:
		if (numeroIngresado==numeroSecreto)
		{
			alert("usted está en la media")
			document.location.href="AdivinaElnumero2.html";
		}
		else
			cerca(numeroIngresado);
		break;

		default:
		if (numeroIngresado==numeroSecreto)
			if(contadorIntentos>=6 && contadorIntentos<=10)
			{
				alert("falta técnica");
				document.location.href="AdivinaElnumero2.html";
				break;
			}
			else
			{
				alert("afortunado en el amor!!");
				document.location.href="AdivinaElnumero2.html";
				break;
			}
		cerca(numeroIngresado);
	}
}



function cerca(numero)
{
	if (numero<numeroSecreto)
		alert("falta.....");
	else
		alert("se pasó....");
}
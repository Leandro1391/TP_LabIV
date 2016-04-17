/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	var numeroElegido=Math.floor(Math.random() *3)+1;

	//alert("número elegido: "+ numeroElegido);

	switch(numeroElegido)
	{
		case 1:
		if(numeroElegido == 1)
			eleccionMaquina="piedra";
		break;
		case 2:
		if (numeroElegido == 2) 
			eleccionMaquina="papel";
		break;
		case 3:
		if (numeroElegido == 3)
			eleccionMaquina="tijera";
		break;
	}
}//FIN DE LA FUNCIÓN


function piedra()
{

	alert("Máquina seleccionó "+ eleccionMaquina);

	if (eleccionMaquina == "piedra")
		alert("Empate");
	else if(eleccionMaquina == "papel")
		alert("Ganó máquina");
	else
		alert("Usted ganó");

	comenzar();
}//FIN DE LA FUNCIÓN


function papel()
{
	alert("Máquina seleccionó "+ eleccionMaquina);

	if (eleccionMaquina == "piedra")
		alert("Usted ganó");
	else if(eleccionMaquina == "papel")
		alert("Empate");
	else
		alert("Ganó máquina");

	comenzar();

}//FIN DE LA FUNCIÓN


function tijera()
{
	alert("Máquina seleccionó "+ eleccionMaquina);

	if (eleccionMaquina == "piedra")
		alert("Ganó máquina");
	else if(eleccionMaquina == "papel")
		alert("Usted ganó");
	else
		alert("Empate");

	comenzar();

}//FIN DE LA FUNCIÓN
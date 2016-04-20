MiAngaap2.controller("contAN2", function($scope){

	$scope.numeroSecreto=0; 
	$scope.contadorIntentos=0;
	$scope.numeroIngresado=0;

	$scope.comenzar=function()
	{

		$scope.numeroSecreto=Math.floor(Math.random() *100)+1;

		//inspeccion
		//alert("El número secreto es: " + numeroSecreto);
		alert("se generó el número random" + $scope.numeroSecreto);	

	}

	$scope.verificar=function()
	{
		$scope.contadorIntentos++;


		$scope.numeroIngresado=$scope.numero;   //parseInt(document.getElementById("numero").value);

		//document.getElementById("intentos").value=$scope.contadorIntentos;
		$scope.intentos=$scope.contadorIntentos;

		//inspección
		//alert("Número ingresado es: " + numeroIngresado);

		switch($scope.contadorIntentos){

			case 1:
			if ($scope.numeroIngresado==$scope.numeroSecreto)
			{
					alert("Usted es un Psíquico");
					$scope.cargar();
			}
			else
				$scope.cerca($scope.numeroIngresado);
				break;
			case 2:


			if ($scope.numeroIngresado==$scope.numeroSecreto)
			{
				alert("excelente percepción");
				$scope.cargar();
			}
			else
				$scope.cerca($scope.numeroIngresado);
				break;


			case 3:
			if ($scope.numeroIngresado==$scope.numeroSecreto)
			{
				alert("Esto es suerte");
				$scope.cargar();
			}
			else
				$scope.cerca($scope.numeroIngresado);
				break;


			case 4:
			if ($scope.numeroIngresado==$scope.numeroSecreto)
			{
				alert("Excelente técnica");
				$scope.cargar();
			}
			else
				$scope.cerca($scope.numeroIngresado);
			break;


			case 5:
			if ($scope.numeroIngresado==$scope.numeroSecreto)
			{
				alert("usted está en la media")
				$scope.cargar();
			}
			else
				$scope.cerca($scope.numeroIngresado);
			break;

			default:
			if ($scope.numeroIngresado==$scope.numeroSecreto)
				if($scope.contadorIntentos>=6 && $scope.contadorIntentos<=10)
				{
					alert("falta técnica");
					$scope.cargar();
					break;
				}
				else
				{
					alert("afortunado en el amor!!");
					$scope.cargar();
					break;
				}
			$scope.cerca($scope.numeroIngresado);
		}
	}



	$scope.cerca=function(number)
	{
		if (number<$scope.numeroSecreto)
			alert("falta.....");
		else
			alert("se pasó....");
	}

	$scope.cargar=function(){

		$scope.numeroSecreto=0; 
		$scope.contadorIntentos=0;
		$scope.numeroIngresado=0;
		$scope.intentos=0;
		$scope.numero=0;

		$scope.comenzar();
	}

});
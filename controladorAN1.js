MiAngaap.controller("contAN1", function($scope){

	$scope.numeroSecreto=0; 
	$scope.contadorIntentos=0;

	$scope.comenzar=function(){


		//alert("Hoolaaa");
		//Genero el número RANDOM entre 1 y 100
		$scope.numeroSecreto=Math.floor(Math.random() * 100)+1;
		
		alert("Se generó el número random: "+ $scope.numeroSecreto);
		
	}

	$scope.verificar=function(){

		//alert("esta en verificar");
		$scope.contadorIntentos++;
		$scope.intentos=$scope.contadorIntentos;
		$scope.numeroIngresado=$scope.numero; //obtengo el numero que ingrese en el formulario ingreso
		//y el mismo tipo de objeto int


		if($scope.numeroIngresado==$scope.numeroSecreto)
		{
				alert("Usted es un ganador!!! y en solo "+$scope.contadorIntentos+" intentos");
				//document.location.href="AdivinaElNumero1.html";
		} 
				

		if($scope.numeroIngresado<$scope.numeroSecreto)
				alert("falta....");

		if($scope.numeroIngresado>$scope.numeroSecreto)
				alert("se pasó....");

		
	}

});
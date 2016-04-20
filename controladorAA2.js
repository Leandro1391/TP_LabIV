aplicacionAng.controller("contAA2", function($scope){

	$scope.respuesta;
	// $scope.numeroUno;
	// $scope.numeroDos;
	$scope.stringOperator="+-*/";
	// $scope.operador;
	// $scope.temporizador;



	$scope.comenzar=function()
	{

		//alert("funcion comenzar")

		$scope.PrimerNumero=Math.floor(Math.random() * 10)+1;

		$scope.Operador=$scope.stringOperator.substr(Math.floor(Math.random() * 4), 1);

		$scope.SegundoNumero=Math.floor(Math.random() * 10)+1;

		// document.getElementById("PrimerNumero").value=numeroUno;
		// document.getElementById("Operador").value=operador;
		// document.getElementById("SegundoNumero").value=numeroDos;

		setTimeout($scope.Responder, 4000);

	}//FIN DE LA FUNCIÓN



	$scope.Responder=function()
	{
		
		switch($scope.Operador)
		{
			case'+':
				$scope.respuesta = $scope.PrimerNumero+$scope.SegundoNumero;
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+$scope.respuesta+" NO "+ $scope.Respuesta);
			break;
			case'-':
				$scope.respuesta = $scope.PrimerNumero-$scope.SegundoNumero;
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+$scope.respuesta+" NO "+ $scope.Respuesta);
			break;
			case'*':
				$scope.respuesta = $scope.PrimerNumero*$scope.SegundoNumero;
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+$scope.respuesta+" NO "+ $scope.Respuesta );
			break;
			case'/':
				$scope.respuesta = parseInt($scope.PrimerNumero/$scope.SegundoNumero);
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+$scope.respuesta+" NO "+ $scope.Respuesta);
			break;
		}

		document.location.href="AgilidadAritmetica2.html";
		// document.getElementById("Respuesta").value="";

		

	}//FIN DE LA FUNCIÓN


	//LLAMO LA FUNCIÓN COMENZAR
	$scope.comenzar();

});
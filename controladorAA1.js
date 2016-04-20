MyAngapp.controller("contAA1", function($scope){

	$scope.respuesta='';
	$scope.numeroUno=0;
	$scope.numeroDos=0;
	$scope.stringOperator="+-*/";
	$scope.operador='';

	//Defino la función comenzar
	$scope.comenzar=function()
	{
		//alert("funcion Comenzar");

		$scope.numeroUno=Math.floor(Math.random() * 10)+1;

		$scope.operador=$scope.stringOperator.substr(Math.floor(Math.random() * 4), 1);

		$scope.numeroDos=Math.floor(Math.random() * 10)+1;

		// document.getElementById("PrimerNumero").value=numeroUno;
		// document.getElementById("Operador").value=operador;
		// document.getElementById("SegundoNumero").value=numeroDos;

		$scope.PrimerNumero=$scope.numeroUno;
		$scope.Operador=$scope.operador;
		$scope.SegundoNumero=$scope.numeroDos;

	}//FIN DE LA FUNCIÓN


	//LLAMADA DE LA FUNCIÓN
	$scope.comenzar();


	$scope.Responder=function() 
	{
		switch($scope.operador)
		{
			case'+':
				$scope.respuesta = $scope.numeroUno+$scope.numeroDos;
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+$scope.respuesta+" NO "+ $scope.Respuesta );
			break;
			case'-':
				$scope.respuesta = $scope.numeroUno-$scope.numeroDos;
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+respuesta+" NO "+ $scope.Respuesta );
			break;
			case'*':
				$scope.respuesta = $scope.numeroUno*$scope.numeroDos;
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+$scope.respuesta+" NO "+ $scope.Respuesta );
			break;
			case'/':
				$scope.respuesta = parseInt($scope.numeroUno/$scope.numeroDos);
				if ($scope.respuesta == $scope.Respuesta)
					alert("Correcto la respuesta es "+ $scope.respuesta);
				else
					alert("Incorrecto la respuesta es "+$scope.respuesta+" NO "+ $scope.Respuesta );
			break;
		}

		document.location.href="AgilidadAritmetica1.html";
		

	}//FIN DE LA FUNCIÓN


})
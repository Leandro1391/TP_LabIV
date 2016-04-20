Otroapp.controller('contPPT1', function($scope){

	$scope.eleccionMaquina=0;


	$scope.comenzar=function(){

		$scope.numeroElegido=Math.floor(Math.random() *3)+1;

		//alert("número elegido: "+ numeroElegido);

		switch($scope.numeroElegido)
		{

			case 1:
				$scope.eleccionMaquina="piedra";
			break;

			case 2:
				$scope.eleccionMaquina="papel";
			break;

			case 3:
				$scope.eleccionMaquina="tijera";
			break;

		}
	}//FIN DE LA FUNCIÓN


	$scope.piedra=function(){

		$scope.comenzar();

		alert("Máquina seleccionó "+ $scope.eleccionMaquina);

		if ($scope.eleccionMaquina == "piedra")
			alert("Empate");
		else if($scope.eleccionMaquina == "papel")
			alert("Ganó máquina");
		else
			alert("Usted ganó");

		

	}//FIN DE LA FUNCIÓN


	$scope.papel=function(){

		$scope.comenzar();

		alert("Máquina seleccionó "+ $scope.eleccionMaquina);

		if ($scope.eleccionMaquina == "piedra")
			alert("Usted ganó");
		else if($scope.eleccionMaquina == "papel")
			alert("Empate");
		else
			alert("Ganó máquina");


	}//FIN DE LA FUNCIÓN


	$scope.tijera=function(){

		$scope.comenzar(); //primero llamer la funcion comenzar o sino no arranca
		
		alert("Máquina seleccionó "+ $scope.eleccionMaquina);

		if ($scope.eleccionMaquina == "piedra")
			alert("Ganó máquina");
		else if($scope.eleccionMaquina == "papel")
			alert("Usted ganó");
		else
			alert("Empate");


	}//FIN DE LA FUNCIÓN
});
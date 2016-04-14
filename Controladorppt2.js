Angapp.controller('contPPT2', function($scope){
	$scope.empatadas=0;
	$scope.perdidas=0;
	$scope.ganadas=0;
	$scope.eleccionMaquina="papel";
	//$scope.papel();
	$scope.comenzar=function(){
		$scope.numeroSecreto =Math.floor( Math.random()*3)+1;
		//alert(numeroSecreto);
		switch($scope.numeroSecreto)
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
		//alert(eleccionMaquina);
	}




	$scope.papel=function(){
							$scope.comenzar();
							//alert("Hola"); //es una funcion xq está con paréntesis
							alert("la maquina selecciono: "+$scope.eleccionMaquina);
						$scope.eleccionHumano="papel";
						if($scope.eleccionHumano==$scope.eleccionMaquina)
						{
							alert("empate.");
							$scope.empatadas++;		

						}
						else if($scope.eleccionMaquina=="piedra")
						{
							alert("vos ganastes.");
							$scope.ganadas++;
						}
						else
						{
							alert("ganó la Maquina.");
							$scope.perdidas++;
						}

	}


	$scope.tijera=function(){
							$scope.comenzar();
							//alert("Hola"); //es una funcion xq anda con paréntesis
							alert("la maquina selecciono: "+$scope.eleccionMaquina);
						$scope.eleccionHumano="tijera";
						if($scope.eleccionHumano==$scope.eleccionMaquina)
						{
							alert("empate.");
							$scope.empatadas++;		

						}
						else if($scope.eleccionMaquina=="papel")
						{
							alert("vos ganastes.");
							$scope.ganadas++;
						}
						else
						{
							alert("ganó la Maquina.");
							$scope.perdidas++;
						}

	}



	$scope.piedra=function(){
							$scope.comenzar();
							//alert("Hola"); //es una funcion xq anda con paréntesis
							alert("la maquina selecciono: "+$scope.eleccionMaquina);
						$scope.eleccionHumano="piedra";
						if($scope.eleccionHumano==$scope.eleccionMaquina)
						{
							alert("empate.");
							$scope.empatadas++;		

						}
						else if($scope.eleccionMaquina=="tijera")
						{
							alert("vos ganastes.");
							$scope.ganadas++;
						}
						else
						{
							alert("ganó la Maquina.");
							$scope.perdidas++;
						}

	}
	//$scope.papel();
}) // lo que recibe el controlador es una funcion  -- scope
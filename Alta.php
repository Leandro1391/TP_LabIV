<!DOCTYPE html>
<html>
<head>
    
	<title>Registro</title>
    
    <!--Estilos-->
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<link rel="stylesheet" type="text/css" href="animacion.css">
	<!--final de Estilos-->
    
</head>

<body>
    
    <div class = "CajaUno animated bounceInDown">
        <h1>REGISTRO</h1>
        
        <form id="FormIngreso" method="post" action="Alta.php" >
                
            <input type="text" name="nombre" id="nombre" placeholder="Ingrese nombre"">
            
            <input type="text" name="apelliido" id="apellido" placeholder="Ingrese apellido">
            
            <input type="text" name="edad" id="edad" placeholder="Ingrese edad" value="<?php echo isset($unaPersona) ?  
            $unaPersona->GetEdad() : "" ; ?>" /> 
            <span id="lblDni" style="display:none;color:#FF0000;width:1%;float:right;font-size:80">*</span>
            
            <input type="text" name="usuario" id="usuario" placeholder="Ingrese nombre de usuario para loguear">
            
            <input type="text" name="contraseña" id="contraseña" placeholder="Ingrese contraseña">
            
            <input type="button" class="btn btn-danger" name="guardar" value="Guardar" onclick="Validar()" >
			<input type="hidden" value="" id="hdnAgregar" name="agregar" >
            
            
        </form>
        
        <!--form>
            
            <input type="radio" name="gender" value="male" checked> Male<br>
            <input type="radio" name="gender" value="female"> Female<br>
            <input type="radio" name="gender" value="other"> Other
            
        </form-->
        
    </div>

</body>

</html>
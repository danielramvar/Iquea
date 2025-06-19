<?php
// db.php
$servidor="localhost";
$usuario="root";
$contrasena="";
$basededatos="iquea";

$conexion=mysqli_connect($servidor, $usuario, $contrasena, $basededatos);

if (!$conexion) {
    die("La conexión ha fallado: ".mysqli_connect_error());
}
?>
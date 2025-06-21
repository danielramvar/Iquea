<?php
// registro.php
require('db.php');

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username=stripslashes($_POST['username']);
    $username=mysqli_real_escape_string($conexion, $username);
    $password=stripslashes($_POST['password']);
    $password=mysqli_real_escape_string($conexion, $password);

    $password_hash=password_hash($password, PASSWORD_DEFAULT);

    $query="INSERT INTO usuarios (username, password) VALUES ('$username', '$password_hash')";
    $result=mysqli_query($conexion, $query);

    if($result) {
        echo "<div class='form-container'>
                <h3>Te has registrado correctamente.</h3>
                <br/>Haz clic aquí para <a href='login.php'>Iniciar Sesión</a></div>";
    }else{
        echo "<div class='form-container'>
                <h3>Error al registrar. Intenta con otro nombre de usuario.</h3>
                <br/><a href='registro.html'>Volver</a>
              </div>";
    }
}else{

}?>

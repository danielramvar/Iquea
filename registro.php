<?php
// registro.php
require('db.php');

if (isset($_REQUEST['username'])) {
    $username = stripslashes($_REQUEST['username']);
    $username = mysqli_real_escape_string($conexion, $username);
    $password = stripslashes($_REQUEST['password']);
    $password = mysqli_real_escape_string($conexion, $password);
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $query = "INSERT into `usuarios` (username, password) VALUES ('$username', '$hashed_password')";
    $result = mysqli_query($conexion, $query);

    if ($result) {
        echo "<div class='form-container'>
              <h3>Te has registrado correctamente.</h3>
              <br/>Haz clic aquí para <a href='login.php'>Iniciar Sesión</a></div>";
    }
} 
?>

<?php
require('db.php');
session_start();

if(isset($_POST['username'])) {
    $username=stripslashes($_REQUEST['username']);
    $username=mysqli_real_escape_string($conexion, $username);
    $password=stripslashes($_REQUEST['password']);
    $password=mysqli_real_escape_string($conexion, $password);

    $query="SELECT * FROM `usuarios` WHERE username='$username'";
    $result=mysqli_query($conexion, $query) or die(mysqli_error($conexion));
    $rows=mysqli_num_rows($result);

    if ($rows==1) {
        $user=mysqli_fetch_assoc($result);
        if(password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            header("Location: bienvenida.php");
        }else{
            echo "<div class='form-container'>
                  <h3>Nombre de usuario/contraseña incorrectos.</h3>
                  <br/>Haz clic aquí para <a href='login.php'>intentar de nuevo</a>.</div>";
        }
    } else {
        echo "<div class='form-container'>
              <h3>Nombre de usuario/contraseña incorrectos.</h3>
              <br/>Haz clic aquí para <a href='login.php'>intentar de nuevo</a>.</div>";
    }
    }
?>
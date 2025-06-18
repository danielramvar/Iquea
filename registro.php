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
} else {
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Registro</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <div class="form-container">
        <h2>Registro de Usuario</h2>
        <form name="registration" action="" method="post">
            <input type="text" name="username" placeholder="Nombre de usuario" required />
            <input type="password" name="password" placeholder="Contraseña" required />
            <input type="submit" name="submit" value="Registrarse" />
        </form>
        <p>¿Ya tienes una cuenta? <a href="login.php">Inicia Sesión Aquí</a></p>
    </div>
</body>
</html>
<?php
}
?>
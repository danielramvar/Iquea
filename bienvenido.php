<?php
// bienvenida.php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>¡Bienvenido!</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="form-container">
        <h2>¡Bienvenido, <?php echo $_SESSION['username']; ?>!</h2>
        <p>Has iniciado sesión correctamente.</p>
        <a href="logout.php">Cerrar Sesión</a>
    </div>
</body>
</html>
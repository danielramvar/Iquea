<?php
// productos.php

// Incluir el archivo de configuración para la conexión a la BD
require_once 'config.php';

// Iniciar la sesión (necesario para el carrito de compras, registro de usuarios, etc. más adelante)
session_start();

$titulo_pagina = "Catálogo de Productos";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $titulo_pagina; ?> - iquea </title>
    <style>
        /* Estilos básicos para demostración */
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; color: #333; }
        header { background-color: #333; color: #fff; padding: 1em 0; text-align: center; }
        nav a { color: #fff; margin: 0 15px; text-decoration: none; }
        .container { width: 80%; margin: 20px auto; background-color: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .producto { border: 1px solid #ddd; margin-bottom: 20px; padding: 15px; overflow: auto; } /* overflow: auto para contener flotantes */
        .producto img { max-width: 150px; float: left; margin-right: 15px; }
        .producto h3 { margin-top: 0; }
        .producto p { margin-bottom: 5px; }
        .producto .precio { font-weight: bold; color: #5cb85c; }
        .footer { text-align: center; padding: 20px 0; margin-top: 30px; background-color: #333; color: #fff;}
        /* Aquí iría un diseño mucho más atractivo y que refleje la identidad de la empresa */
    </style>
</head>
<body>

    <header>
        <h1>Tienda de Muebles de Segunda Mano</h1>
        <nav>
            <a href="index.php">Inicio</a>
            <a href="productos.php">Productos</a>
            <a href="contacto.php">Contacto</a>
            <?php // En un sistema completo, aquí habría enlaces a login/registro/carrito ?>
        </nav>
    </header>

    <div class="container">
        <h2><?php echo $titulo_pagina; ?></h2>
        
        <?php // Lógica para la búsqueda avanzada iría aquí ?>

        <div class="listado-productos">
            <?php
            // Consulta SQL para obtener los productos (ejemplo básico)
            // En un caso real, tu tabla 'productos' tendría más columnas como descripcion, imagen_url, categoria_id, estado, fecha_publicacion, usuario_id, etc.
            $sql = "SELECT id, nombre, descripcion_corta, precio, imagen_nombre FROM productos WHERE disponible = 1 ORDER BY nombre ASC";
            
            if($resultado = $mysqli->query($sql)){
                if($resultado->num_rows > 0){
                    while($producto = $resultado->fetch_assoc()){
                        echo '<div class="producto">';
                        // Asumiendo que tienes una carpeta 'imagenes_productos/'
                        // En un sistema real, el manejo de imágenes sería más robusto.
                        if (!empty($producto['imagen_nombre']) && file_exists('imagenes_productos/' . htmlspecialchars($producto['imagen_nombre']))) {
                            echo '<img src="imagenes_productos/' . htmlspecialchars($producto['imagen_nombre']) . '" alt="' . htmlspecialchars($producto['nombre']) . '">';
                        } else {
                            echo '<img src="imagenes_productos/default.png" alt="Imagen no disponible">'; // Imagen por defecto
                        }
                        echo '<h3>' . htmlspecialchars($producto['nombre']) . '</h3>';
                        echo '<p>' . htmlspecialchars($producto['descripcion_corta']) . '</p>';
                        echo '<p class="precio">Precio: $' . htmlspecialchars(number_format($producto['precio'], 2)) . '</p>';
                        // En un sistema completo, aquí iría un enlace a "Ver detalles" o "Añadir al carrito"
                        // echo '<a href="producto_detalle.php?id=' . $producto['id'] . '">Ver detalles</a>';
                        // echo '<a href="carrito_acciones.php?accion=agregar&id=' . $producto['id'] . '">Añadir al carrito</a>';
                        echo '</div>';
                    }
                    // Liberar el conjunto de resultados
                    $resultado->free();
                } else{
                    echo '<p>No hay productos disponibles en este momento.</p>';
                }
            } else{
                echo "ERROR: No se pudo ejecutar la consulta $sql. " . $mysqli->error;
            }
            
            // Cerrar la conexión a la base de datos
            $mysqli->close();
            ?>
        </div>
    </div>

    <footer class="footer">
        <p>&copy; <?php echo date("Y"); ?> Tienda de Muebles de Segunda Mano. Todos los derechos reservados.</p>
        <?php // Aquí iría información de contacto, enlaces a políticas, etc. ?>
    </footer>

</body>
</html>
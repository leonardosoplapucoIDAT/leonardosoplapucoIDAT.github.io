<?php
if (isset($_POST['Nombres']) && isset($_POST['Correo']) && isset($_POST['Mensaje'])) {
    $nombre = $_POST['Nombres'];
    $correo = $_POST['Correo'];
    $mensaje = $_POST['Mensaje'];

    // Validar que los datos del formulario estén correctamente ingresados
    if (empty($nombre) || empty($correo) || empty($mensaje)) {
        // Mostrar un mensaje de error si algún campo está vacío
        echo 'Por favor, ingresa todos los campos del formulario.';
    } elseif (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        // Mostrar un mensaje de error si el correo electrónico no es válido
        echo 'Por favor, ingresa un correo electrónico válido.';
    } else {
        // Enviar el correo electrónico con los datos del formulario
        $destinatario = 'leosoplapuco29@gmail.com';
        $asunto = 'Mensaje desde formulario de contacto';
        $cuerpo = "Nombre: $nombre\nCorreo electrónico: $correo\nMensaje: $mensaje";
        $cabeceras = 'From: tu-correo-electronico@tu-dominio.com' . "\r\n" .
                    'Reply-To: ' . $correo . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

        if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
            // Mostrar un mensaje de éxito si el correo electrónico se envió correctamente
            echo 'Gracias por contactarnos. Te responderemos lo antes posible.';
        } else {
            // Mostrar un mensaje de error si ocurrió un problema al enviar el correo electrónico
            echo 'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.';
        }
    }
    // Redirigir al usuario de vuelta al formulario
    header('Location: index.html');
} else {
    // Redirigir al usuario de vuelta al formulario
    header('Location: index.html');
}
?>
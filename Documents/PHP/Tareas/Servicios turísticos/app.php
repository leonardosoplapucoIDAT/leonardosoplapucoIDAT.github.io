<?php
if (isset($_POST['Nombres']) && isset($_POST['Correo']) && isset($_POST['Mensaje'])) {
    $nombre = $_POST['Nombres'];
    $correo = $_POST['Correo'];
    $mensaje = $_POST['Mensaje'];

// Por ejemplo, puedes enviar el correo electrónico con los datos del formulario
$destinatario = 'leosoplapuco29@gmail.com';
$asunto = 'Mensaje desde formulario de contacto';
$cuerpo = "Nombre: $nombre\n Correo electrónico: $correo\n Mensaje: $mensaje";
$cabeceras = 'From: tu-correo-electronico@tu-dominio.com' . "\r\n" .
            'Reply-To: ' . $correo . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

mail($destinatario, $asunto, $cuerpo, $cabeceras);

header('Location: index.html');}

else{
    header('Location: index.html');
}
?>
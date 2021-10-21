<?php
$name =$_POST['name'];
$visitor_email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];


$email_from ='jaykeranthony@gmail.com';
$email_subject= 'new form submission';
$email_body= "user name:$name.\n"
            "user email:$visitor_email.\n"
            "user subject:$subject.\n"
            "user message:$message.\n";
$to = 'roveranthony123@gmail.com';

$headers ="form:$email_from\r\n";
$headers. ="reply to:$visitor_email\r\n";
mail($to,$email_subject,$email_body,$headers);
header("location:uni.html")


?>
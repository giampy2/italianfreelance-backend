<?php
// Protezione anti-spam
if (!empty($_POST['honeypot'])) {
  header("Location: grazie.html");
  exit;
}

// Dati del modulo
$nome = htmlspecialchars($_POST['nome']);
$email = htmlspecialchars($_POST['email']);
$messaggio = htmlspecialchars($_POST['messaggio']);

// Email di destinazione
$to = "info@italianfreelance.com";
$subject = "Nuovo messaggio da ItalianFreelance";
$body = "Nome: $nome\nEmail: $email\nMessaggio:\n$messaggio";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Invio
if (mail($to, $subject, $body, $headers)) {
  header("Location: grazie.html");
} else {
  echo "Errore nell'invio. Riprova.";
}
?>

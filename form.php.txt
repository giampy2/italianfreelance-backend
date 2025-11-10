<?php
session_start();

// Genera un token CSRF sicuro
if (empty($_SESSION['csrf_token'])) {
  $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
?>
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Modulo di contatto</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Header di sicurezza base -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-Frame-Options" content="DENY">
  <meta http-equiv="Referrer-Policy" content="no-referrer">
</head>
<body>
  <h1>Contattaci</h1>
  <form method="POST" action="process.php" autocomplete="off" novalidate>
    <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
    
    <label>
      Nome:<br>
      <input type="text" name="name" required minlength="2" maxlength="100">
    </label><br><br>
    
    <label>
      Email:<br>
      <input type="email" name="email" required maxlength="150">
    </label><br><br>
    
    <label>
      Messaggio:<br>
      <textarea name="message" required minlength="10" maxlength="2000"></textarea>
    </label><br><br>
    
    <!-- Honeypot anti-spam invisibile -->
    <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
    
    <button type="submit">Invia</button>
  </form>
</body>
</html>

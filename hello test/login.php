<?php
session_start();

// Tableau d'utilisateurs autorisés
$users = [
    ["name" => "Ahmed", "password" => "admin123", "role" => "administrateur", "active" => true],
    ["name" => "Sara",  "password" => "pass456",  "role" => "formateur",       "active" => true],
    ["name" => "Leila", "password" => "test789",  "role" => "apprenant",       "active" => false],
    ["name" => "Alae",  "password" => "test309",  "role" => "apprenant",       "active" => true]
];

$message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    $found = false;

    foreach ($users as $user) {
        if ($user["name"] === $name && $user["password"] === $password) {
            $found = true;
            if ($user["active"]) {
                // Stocker les infos utilisateur dans la session
                $_SESSION["user"] = [
                    "name" => $user["name"],
                    "role" => $user["role"]
                ];
                header("Location: accueil.php");
                exit;
            } else {
                $message = "⛔ Compte désactivé.";
            }
        }
    }

    if (!$found && empty($message)) {
        $message = "❌ Identifiants incorrects.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Authentification</title>
  <style>
    body { font-family: Arial; margin: 40px; background: #f4f4f4; }
    form { background: white; padding: 20px; width: 300px; border-radius: 10px; }
    input, button { width: 100%; padding: 8px; margin-top: 10px; }
    .msg { color: red; margin-top: 15px; }
  </style>
</head>
<body>
  <h2>Page de connexion</h2>
  <form action="" method="post">
    <label>Nom d'utilisateur :</label>
    <input type="text" name="username" required>

    <label>Mot de passe :</label>
    <input type="password" name="password" required>

    <button type="submit">Se connecter</button>

    <?php if (!empty($message)) : ?>
      <p class="msg"><?= htmlspecialchars($message) ?></p>
    <?php endif; ?>
  </form>
</body>
</html>

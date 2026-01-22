<?php
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION["user"])) {
    header("Location: login.php");
    exit;
}

$user = $_SESSION["user"];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Accueil</title>
  <style>
    body { font-family: Arial; margin: 40px; background: #eef; }
    .container { background: white; padding: 20px; border-radius: 10px; width: 400px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>✅ Bienvenue <?= htmlspecialchars($user["name"]) ?></h2>
    <p>Vous êtes connecté en tant que <strong><?= htmlspecialchars($user["role"]) ?></strong>.</p>

    <?php
    if ($user["role"] === "administrateur") {
        echo "<p>Accès complet à l’application.</p>";
    } elseif ($user["role"] === "formateur") {
        echo "<p>Accès aux modules de formation.</p>";
    } else {
        echo "<p>Accès limité en tant qu’apprenant.</p>";
    }
    ?>

    <form action="logout.php" method="post">
      <button type="submit">Se déconnecter</button>
    </form>
  </div>
</body>
</html>

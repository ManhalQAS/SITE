document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('connexion-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Vérifie si les champs email et mot de passe sont remplis
        if (email && password) {
            // Redirige vers la page d'accueil
            window.location.href = "accueil.html";
        }
    });
});

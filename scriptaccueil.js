document.addEventListener('DOMContentLoaded', function() {
    const formulaire = document.getElementById('contact-form');
    const messageEnvoyeElement = document.getElementById('message-envoye');

    formulaire.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher l'envoi par défaut du formulaire
        
        // Envoyer le formulaire (simulé ici avec un délai de 1 seconde)
        setTimeout(function() {
            messageEnvoyeElement.style.display = 'block'; // Afficher le message
            formulaire.reset(); // Réinitialiser le formulaire
            formulaire.style.display = 'none'; // Masquer le formulaire
        }, 1000);
    });
});

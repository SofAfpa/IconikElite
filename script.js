// Lorsque la page est chargée, afficher le pop-up des cookies
window.addEventListener('load', function() {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

// Lorsque l'utilisateur clique sur le bouton "Accepter"
document.getElementById('accept-cookies').addEventListener('click', function() {
    document.getElementById('cookie-banner').style.display = 'none'; // Fermer le pop-up
    localStorage.setItem('cookiesAccepted', 'true'); // Enregistrer l'acceptation des cookies
});

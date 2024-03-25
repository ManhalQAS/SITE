document.addEventListener('DOMContentLoaded', function() {
    const boutonsAjoutPanier = document.querySelectorAll('.ajouter-panier');
    const totalElement = document.getElementById('total');
    
    boutonsAjoutPanier.forEach(bouton => {
        bouton.addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            const produit = bouton.dataset.produit;
            const prix = parseFloat(bouton.dataset.prix);
            ajouterAuPanier(produit, prix);
            afficherTotal();
        });
    });

    function ajouterAuPanier(produit, prix) {
        let panier = localStorage.getItem('panier');
        panier = panier ? JSON.parse(panier) : [];
        panier.push({ produit, prix });
        localStorage.setItem('panier', JSON.stringify(panier));
        alert('Produit ajouté au panier !');
    }

    function afficherTotal() {
        let total = 0;
        const panier = JSON.parse(localStorage.getItem('panier')) || [];
        panier.forEach(item => {
            total += item.prix;
        });
        totalElement.textContent = 'Total : ' + total.toFixed(2) + '€';
    }
});

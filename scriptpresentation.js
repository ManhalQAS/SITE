document.addEventListener('DOMContentLoaded', function() {
    const boutonAjouterPanier = document.querySelector('.ajouter-panier');

    boutonAjouterPanier.addEventListener('click', function() {
        const nomProduitElement = document.querySelector('.presentation-produit h2');
        const prixProduitElement = document.querySelector('.presentation-produit p');

        const nomProduit = nomProduitElement.innerText.trim();
        const prixProduit = parseFloat(prixProduitElement.innerText.trim().split(' ')[1]);

        const produitAjoute = {
            nom: nomProduit,
            prix: prixProduit
        };

        let panier = JSON.parse(localStorage.getItem('panier')) || [];
        panier.push(produitAjoute);
        localStorage.setItem('panier', JSON.stringify(panier));

        alert('Le produit a été ajouté au panier !');
    });
});

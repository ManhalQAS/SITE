document.addEventListener('DOMContentLoaded', function() {
    afficherPanier();

    document.getElementById('vider-panier').addEventListener('click', () => {
        localStorage.removeItem('panier');
        afficherPanier();
    });
});

function afficherPanier() {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];
    const ul = document.getElementById('panier');
    ul.innerHTML = '';
    let total = 0;

    panier.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produit} - ${item.prix}€`;

        const supprimerBtn = document.createElement('button');
        supprimerBtn.textContent = 'Supprimer';
        supprimerBtn.addEventListener('click', () => supprimerDuPanier(item.produit));
        li.appendChild(supprimerBtn);

        ul.appendChild(li);
        total += item.prix;
    });

    document.getElementById('total').textContent = total.toFixed(2) + '€';
}

function supprimerDuPanier(produit) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    panier = panier.filter(item => item.produit !== produit);
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier();
}

function ajouterAuPanier(produit, prix) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    panier.push({ produit, prix });
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier();
}

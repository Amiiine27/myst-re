// Liste de mots aléatoires
const wordsList = [
    "IL EST PAS FOU EN VRAI",
    "NON PAS TROP",
    "IL M'INTERESSE PAS",
    "Y'A MIEUX QUE LUI",
    "JSUIS TROP BELLE POUR LUI",
    "IL ME MERITE PAS",
    "TROP NUL SON PARFUM",
    "SES CHEVEUX TOUT SEC",
    "IL A PAS ASSEZ D'ABDOS"
];

// Fonction pour choisir un mot aléatoire
function chooseRandomWord() {
    const randomWordIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomWordIndex];
}

// Fonction pour changer le texte du bouton non
function updateNonButtonText() {
    const nonButton = document.querySelector('.non');
    nonButton.innerText = chooseRandomWord();
}

// Fonction pour déplacer le bouton non à des coordonnées aléatoires
function moveNonButton() {
    const nonButton = document.querySelector('.non');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Générer des coordonnées aléatoires
    const randomX = Math.floor(Math.random() * (windowWidth - 100)); // 100 est la largeur du bouton
    const randomY = Math.floor(Math.random() * (windowHeight - 50)); // 50 est la hauteur du bouton

    // Définir les nouvelles coordonnées
    nonButton.style.left = randomX + 'px';
    nonButton.style.top = randomY + 'px';
}

// Gestionnaire d'événements pour le clic sur le bouton non
document.addEventListener('DOMContentLoaded', function() {
    const nonButton = document.querySelector('.non');

    // Gestionnaire d'événements pour le clic sur le bouton non
    nonButton.addEventListener('click', function() {
        updateNonButtonText(); // Pour changer le texte du bouton non
        moveNonButton(); // Pour déplacer le bouton non à de nouvelles coordonnées
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const ouiButton = document.querySelector('.oui');
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none'; // Cache l'overlay
    });

    ouiButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche la propagation du clic vers l'overlay
        overlay.style.display = 'block'; // Affiche l'overlay
    });

    // Empêche le clic sur l'image de fermer l'overlay
    overlay.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});



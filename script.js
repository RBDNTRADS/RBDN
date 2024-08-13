document.addEventListener('DOMContentLoaded', () => {
    const chapitresGrid = document.querySelector('.chapitres-grid');
    const paginationDiv = document.querySelector('.pagination');
    const chapitresPerPage = 15; // Nombre de chapitres par page
    let currentPage = 0; // Page actuelle

    // Générer les chapitres de 472 à 241
    const chapitres = [];
    for (let i = 472; i >= 241; i--) {
        chapitres.push({ numero: i, titre: "", image: "https://zupimages.net/up/24/32/dsh1.png" });
    }

    const totalPages = Math.ceil(chapitres.length / chapitresPerPage); // Calcul du nombre de pages

    // Fonction pour afficher les chapitres d'une page spécifique
    function displayChapitres(page) {
        chapitresGrid.innerHTML = ""; // Vider la grille avant d'ajouter de nouveaux chapitres
        const start = page * chapitresPerPage;
        const end = start + chapitresPerPage;
        const chapitresToShow = chapitres.slice(start, end);

        chapitresToShow.forEach(chapitre => {
            const chapitreCard = document.createElement('div');
            chapitreCard.classList.add('chapitre-card');
            chapitreCard.innerHTML = `
                <img src="${chapitre.image}" alt="Chapitre ${chapitre.numero}">
                <div class="chapitre-info">
                    <h3>Chapitre ${chapitre.numero}</h3>
                    <p>${chapitre.titre}</p>
                </div>
            `;
            chapitresGrid.appendChild(chapitreCard);
        });

        // Mettre à jour l'état actif des boutons de pagination
        updatePagination(page);
    }

    // Fonction pour créer les boutons de pagination
    function createPaginationButtons() {
        paginationDiv.innerHTML = ""; // Vider la pagination avant d'ajouter de nouveaux boutons

        for (let i = 0; i < totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i + 1;
            btn.addEventListener('click', () => {
                currentPage = i;
                displayChapitres(currentPage);
            });
            paginationDiv.appendChild(btn);
        }
    }

    // Fonction pour mettre à jour l'état actif des boutons de pagination
    function updatePagination(page) {
        const buttons = paginationDiv.querySelectorAll('button');
        buttons.forEach((button, index) => {
            if (index === page) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Initialiser la première page et les boutons de pagination
    createPaginationButtons();
    displayChapitres(currentPage);
});

const chapitresGrid = document.querySelector('.tomes-grid');
const chapitres = [
    { numero: 1, titre: "", image: "https://i.postimg.cc/cHb69YS1/vol1.png", lien: "Tome 01.html" },
    { numero: 2, titre: "", image: "https://i.postimg.cc/668h9fT0/vol2.png", lien: "Tome 02.html" },
    { numero: 3, titre: "", image: "https://i.postimg.cc/s2fpbpt5/vol3.png", lien: "Tome 03.html" },
    { numero: 4, titre: "", image: "https://i.postimg.cc/zXWShDCH/vol4.png", lien: "Tome 04.html" },
    { numero: 5, titre: "", image: "https://i.postimg.cc/C1zbxwM1/vol5.png", lien: "Tome 05.html" },
    { numero: 6, titre: "", image: "https://i.postimg.cc/DyV17V9v/vol6.png", lien: "Tome 06.html" },
    { numero: 7, titre: "", image: "https://i.postimg.cc/ZqDygXPh/vol7.png", lien: "Tome 07.html" },
    { numero: 8, titre: "", image: "https://i.postimg.cc/Wz0Fd3B2/vol8.png", lien: "Tome 08.html" },
    { numero: 9, titre: "", image: "https://i.postimg.cc/7PzTssfp/vol9.png", lien: "Tome 09.html" },
    { numero: 10, titre: "", image: "https://i.postimg.cc/qMd69sKg/vol10.png", lien: "Tome 10.html" },
    { numero: 11, titre: "", image: "https://i.postimg.cc/tCtnysdk/vol11.png", lien: "Tome 11.html" },
    { numero: 12, titre: "", image: "https://i.postimg.cc/XYsZGtzy/vol12.png", lien: "Tome 12.html" },
    { numero: 13, titre: "", image: "https://i.postimg.cc/pTFySrXD/vol13.png", lien: "Tome 13.html" },
    { numero: 14, titre: "", image: "https://i.postimg.cc/W4tdMSBY/vol14.png", lien: "Tome 14.html" },
    { numero: 15, titre: "", image: "https://i.postimg.cc/W4KhSgjN/vol15.png", lien: "Tome 15.html" },
    { numero: 16, titre: "", image: "https://i.postimg.cc/hvRhRnfN/vol16.png", lien: "Tome 16.html" },
    { numero: 17, titre: "", image: "https://i.postimg.cc/mZ7tNPn4/vol17.png", lien: "Tome 17.html" },
    { numero: 18, titre: "", image: "https://i.postimg.cc/hv8vSYmv/vol18.png", lien: "Tome 18.html" },
    { numero: 19, titre: "", image: "https://i.postimg.cc/RVRhyj9b/vol19.png", lien: "Tome 19.html" },
    { numero: 20, titre: "", image: "https://i.postimg.cc/65wTH9sv/vol20.png", lien: "Tome 20.html" },
];

chapitres.forEach(chapitre => {
    const chapitreCard = document.createElement('div');
    chapitreCard.classList.add('chapitre-card');

    const chapitreLink = document.createElement('a');
    chapitreLink.href = chapitre.lien;
    chapitreLink.classList.add('chapitre-link'); 
    chapitreLink.innerHTML = `
        <img src="${chapitre.image}" alt="Tome ${chapitre.numero}">
        <div class="chapitre-info">
            <h3>Tome ${chapitre.numero}</h3>
            <p>${chapitre.titre}</p>
        </div>
    `;

    chapitreCard.appendChild(chapitreLink);
    chapitresGrid.appendChild(chapitreCard);
});

document.addEventListener('DOMContentLoaded', () => {
    const tomeCoverImage = document.getElementById('tomeCoverImage');
    const synopsis = document.getElementById('synopsis');

    tomeCoverImage.addEventListener('click', () => {
        // Toggle synopsis visibility on click
        if (synopsis.style.display === 'block') {
            synopsis.style.display = 'none';
        } else {
            synopsis.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tomeCoverImage = document.getElementById('tomeCoverImage');
    const synopsis = document.getElementById('synopsis');

    tomeCoverImage.addEventListener('click', () => {
        // Toggle synopsis visibility on click
        if (synopsis.style.display === 'block') {
            synopsis.style.display = 'none';
        } else {
            synopsis.style.display = 'block';
        }
    });
});

const carousel = document.querySelector('.carousel-inner');
const cards = document.querySelectorAll('.manga-card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function showCard(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Automatic carousel
setInterval(nextCard, 5000);

function pageTransition(e) {
    e.preventDefault();
    let target = e.target.href;
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = target;
    }, 500);
}

// Ajoutez cet écouteur d'événements à tous les liens de manga
document.querySelectorAll('.manga-link').forEach(link => {
    link.addEventListener('click', pageTransition);
});

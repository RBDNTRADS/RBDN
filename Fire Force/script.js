document.addEventListener('DOMContentLoaded', () => {
    const chapitresGrid = document.querySelector('.tomes-grid');
    const paginationDiv = document.querySelector('.pagination');
    const chapitresPerPage = 15; // Nombre de chapitres par page
    let currentPage = 0; // Page actuelle

    // Liste des chapitres avec les images associées
    const chapitres = [
        { numero: 1, titre: "Tome 1", image: "https://i.postimg.cc/C5TPhwt7/vol1.jpg" },
        { numero: 2, titre: "Tome 2", image: "https://i.postimg.cc/dtFHgtGt/vol2.jpg" },
        { numero: 3, titre: "Tome 3", image: "https://i.postimg.cc/Yqxn7KxN/vol3.jpg" },
        { numero: 4, titre: "Tome 4", image: "https://i.postimg.cc/RZsg37yN/vol4.jpg" },
        { numero: 5, titre: "Tome 5", image: "https://i.postimg.cc/K8v9vq96/vol5.jpg" },
        { numero: 6, titre: "Tome 6", image: "https://i.postimg.cc/ZqXjHTTm/vol6.jpg" },
        { numero: 7, titre: "Tome 7", image: "https://i.postimg.cc/KzLfsdzM/vol7.jpg" },
        { numero: 8, titre: "Tome 8", image: "https://i.postimg.cc/FHBxF9kS/vol8.jpg" },
        { numero: 9, titre: "Tome 9", image: "https://i.postimg.cc/k4xNyK1N/vol9.jpg" },
        { numero: 10, titre: "Tome 10", image: "https://i.postimg.cc/HndwvnRq/vol10.jpg" },
        { numero: 11, titre: "Tome 11", image: "https://i.postimg.cc/cChQpZNr/vol11.jpg" },
        { numero: 12, titre: "Tome 12", image: "https://i.postimg.cc/t4whQ28t/vol12.jpg" },
        { numero: 13, titre: "Tome 13", image: "https://i.postimg.cc/Xv59V9bM/vol13.jpg" },
        { numero: 14, titre: "Tome 14", image: "https://i.postimg.cc/XJcF53qQ/vol14.jpg" },
        { numero: 15, titre: "Tome 15", image: "https://i.postimg.cc/MH6Bb4jx/vol15.jpg" },
        { numero: 16, titre: "Tome 16", image: "https://i.postimg.cc/fWCmTw6b/vol16.jpg" },
        { numero: 17, titre: "Tome 17", image: "https://i.postimg.cc/fTbXVGNf/vol17.jpg" },
        { numero: 18, titre: "Tome 18", image: "https://i.postimg.cc/7YQz0KP8/vol18.jpg" },
        { numero: 19, titre: "Tome 19", image: "https://i.postimg.cc/x1wbFqb6/vol19.jpg" },
        { numero: 20, titre: "Tome 20", image: "https://i.postimg.cc/wBDsKHXg/vol20.jpg" },
        { numero: 21, titre: "Tome 21", image: "https://i.postimg.cc/FRmkNqpc/vol21.jpg" },
        { numero: 22, titre: "Tome 22", image: "https://i.postimg.cc/j5Xw5X31/vol22.jpg" },
        { numero: 23, titre: "Tome 23", image: "https://i.postimg.cc/hvTYTXxN/vol23.jpg" },
        { numero: 24, titre: "Tome 24", image: "https://i.postimg.cc/85q37RFh/vol24.jpg" },
        { numero: 25, titre: "Tome 25", image: "https://i.postimg.cc/MTcNZPG6/vol25.jpg" },
        { numero: 26, titre: "Tome 26", image: "https://i.postimg.cc/FKCw45NC/vol26.jpg" },
        { numero: 27, titre: "Tome 27", image: "https://i.postimg.cc/t45LBnfj/vol27.jpg" },
        { numero: 28, titre: "Tome 28", image: "https://i.postimg.cc/K8F67D0f/vol28.jpg" },
        { numero: 29, titre: "Tome 29", image: "https://i.postimg.cc/7Yv8hk7p/vol29.jpg" },
        { numero: 30, titre: "Tome 30", image: "https://i.postimg.cc/RhHkdsrs/vol30.jpg" },
        { numero: 31, titre: "Tome 31", image: "https://i.postimg.cc/tTw0h0cn/vol31.jpg" },
        { numero: 32, titre: "Tome 32", image: "https://i.postimg.cc/MZfJzTc7/vol32.jpg" },
        { numero: 33, titre: "Tome 33", image: "https://i.postimg.cc/QtHG9Nfr/vol33.jpg" },
        { numero: 34, titre: "Tome 34", image: "https://i.postimg.cc/5tPW2Qq3/vol34.jpg" }
    ];

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
                <img src="${chapitre.image}" alt="Tome ${chapitre.numero}">
                <div class="chapitre-info">
                    <h3>${chapitre.titre}</h3>
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

// Sélectionne tous les boutons avec des liens correspondant au motif
const buttons = document.querySelectorAll('a[href^="Tome 01/Chapitre "][href$=".html"]');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    const chapterNumber = parseInt(this.getAttribute('href').match(/\d+/)[0]);
    
    if (chapterNumber >= 13 && chapterNumber <= 24) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
      
      // Affiche la notification
      showNotification("Les chapitres sont en cours d'upload");
    }
  });
});

// Fonction pour afficher la notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #333;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1000;
  `;
  
  document.body.appendChild(notification);
  
  // Supprime la notification après 3 secondes
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
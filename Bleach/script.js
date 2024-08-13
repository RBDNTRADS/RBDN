document.addEventListener('DOMContentLoaded', () => {
    const chapitresGrid = document.querySelector('.tomes-grid');
    const paginationDiv = document.querySelector('.pagination');
    const chapitresPerPage = 15; // Nombre de chapitres par page
    let currentPage = 0; // Page actuelle

    // Liste des chapitres avec les images associées
    const chapitres = [
        { numero: 1, titre: "Tome 1", image: "https://i.postimg.cc/13VKt8hQ/vol01.png" },
        { numero: 2, titre: "Tome 2", image: "https://i.postimg.cc/cCJRNHMP/vol02.png" },
        { numero: 3, titre: "Tome 3", image: "https://i.postimg.cc/6q1d6XMq/vol03.png" },
        { numero: 4, titre: "Tome 4", image: "https://i.postimg.cc/G3MPxFbR/vol04.png" },
        { numero: 5, titre: "Tome 5", image: "https://i.postimg.cc/9Frd8Df7/vol05.png" },
        { numero: 6, titre: "Tome 6", image: "https://i.postimg.cc/YSfYGgdJ/vol06.png" },
        { numero: 7, titre: "Tome 7", image: "https://i.postimg.cc/nrMDPWnJ/vol07.png" },
        { numero: 8, titre: "Tome 8", image: "https://i.postimg.cc/cCjnycJ8/vol08.png" },
        { numero: 9, titre: "Tome 9", image: "https://i.postimg.cc/8PJvdxyd/vol09.png" },
        { numero: 10, titre: "Tome 10", image: "https://i.postimg.cc/qMP31QYP/vol10.png" },
        { numero: 11, titre: "Tome 11", image: "https://i.postimg.cc/2SnBMhNV/vol11.png" },
        { numero: 12, titre: "Tome 12", image: "https://i.postimg.cc/FKmJ4zhG/vol12.png" },
        { numero: 13, titre: "Tome 13", image: "https://i.postimg.cc/rpJRFTmT/vol13.png" },
        { numero: 14, titre: "Tome 14", image: "https://i.postimg.cc/3Rx4kq4v/vol14.png" },
        { numero: 15, titre: "Tome 15", image: "https://i.postimg.cc/hvHf3PCL/vol15.png" },
        { numero: 16, titre: "Tome 16", image: "https://i.postimg.cc/CxCzm0b8/vol16.png" },
        { numero: 17, titre: "Tome 17", image: "https://i.postimg.cc/6Q9TPPhm/vol17.png" },
        { numero: 18, titre: "Tome 18", image: "https://i.postimg.cc/FKD1XxWs/vol18.png" },
        { numero: 19, titre: "Tome 19", image: "https://i.postimg.cc/1tdtf31k/vol19.png" },
        { numero: 20, titre: "Tome 20", image: "https://i.postimg.cc/7PC1XChT/vol20.png" },
        { numero: 21, titre: "Tome 21", image: "https://i.postimg.cc/q7bnx0dL/vol21.png" },
        { numero: 22, titre: "Tome 22", image: "https://i.postimg.cc/G24DMNL1/vol22.png" },
        { numero: 23, titre: "Tome 23", image: "https://i.postimg.cc/6qRvKv4j/vol23.png" },
        { numero: 24, titre: "Tome 24", image: "https://i.postimg.cc/pVn8zgcf/vol24.png" },
        { numero: 25, titre: "Tome 25", image: "https://i.postimg.cc/xTvzFL2q/vol25.jpg" },
        { numero: 26, titre: "Tome 26", image: "https://i.postimg.cc/Cxwqydh7/vol26.png" },
        { numero: 27, titre: "Tome 27", image: "https://i.postimg.cc/Dw5b7FmT/vol27.png" },
        { numero: 28, titre: "Tome 28", image: "https://i.postimg.cc/xdCNC7bb/vol28.jpg" },
        { numero: 29, titre: "Tome 29", image: "https://i.postimg.cc/ZqMBycrs/vol29.png" },
        { numero: 30, titre: "Tome 30", image: "https://i.postimg.cc/9XTRryz1/vol30.png" },
        { numero: 31, titre: "Tome 31", image: "https://i.postimg.cc/t4RYSfkm/vol31.png" },
        { numero: 32, titre: "Tome 32", image: "https://i.postimg.cc/VLm6vTxL/vol32.png" },
        { numero: 33, titre: "Tome 33", image: "https://i.postimg.cc/3xwxCGrs/vol33.png" },
        { numero: 34, titre: "Tome 34", image: "https://i.postimg.cc/15BzqBS0/vol34.jpg" },
        { numero: 35, titre: "Tome 35", image: "https://i.postimg.cc/P5Fr6qPP/vol35.png" },
        { numero: 36, titre: "Tome 36", image: "https://i.postimg.cc/SK2QHpMV/vol36.png" },
        { numero: 37, titre: "Tome 37", image: "https://i.postimg.cc/L5Tmj9c4/vol37.jpg" },
        { numero: 38, titre: "Tome 38", image: "https://i.postimg.cc/Y2fr5Rvc/vol38.jpg" },
        { numero: 39, titre: "Tome 39", image: "https://i.postimg.cc/8PppNvv7/vol39.jpg" },
        { numero: 40, titre: "Tome 40", image: "https://i.postimg.cc/Dwm7bKBF/vol40.jpg" },
        { numero: 41, titre: "Tome 41", image: "https://i.postimg.cc/rwbM1YP4/vol41.jpg" },
        { numero: 42, titre: "Tome 42", image: "https://i.postimg.cc/NMvtV2Yf/vol42.jpg" },
        { numero: 43, titre: "Tome 43", image: "https://i.postimg.cc/wTjpSpKJ/vol43.jpg" },
        { numero: 44, titre: "Tome 44", image: "https://i.postimg.cc/nh6fj9XY/vol44.jpg" },
        { numero: 45, titre: "Tome 45", image: "https://i.postimg.cc/25hR4jvp/vol45.jpg" },
        { numero: 46, titre: "Tome 46", image: "https://i.postimg.cc/bJ97B633/vol46.jpg" },
        { numero: 47, titre: "Tome 47", image: "https://i.postimg.cc/MHZC2yLx/vol47.jpg" },
        { numero: 48, titre: "Tome 48", image: "https://i.postimg.cc/4y8rJYCc/vol48.jpg" },
        { numero: 49, titre: "Tome 49", image: "https://i.postimg.cc/wTvCwQJQ/vol49.jpg" },
        { numero: 50, titre: "Tome 50", image: "https://i.postimg.cc/c4bV2tBy/vol50.jpg" },
        { numero: 51, titre: "Tome 51", image: "https://i.postimg.cc/6QsF5sPM/vol51.jpg" },
        { numero: 52, titre: "Tome 52", image: "https://i.postimg.cc/tJgMm914/vol52.jpg" },
        { numero: 52, titre: "Tome 52", image: "https://i.postimg.cc/tJgMm914/vol52.jpg" },
        { numero: 53, titre: "Tome 53", image: "https://i.postimg.cc/J0ddfSJc/vol53.jpg" },
        { numero: 54, titre: "Tome 54", image: "https://i.postimg.cc/T2kS55SL/vol54.jpg" },
        { numero: 55, titre: "Tome 55", image: "https://i.postimg.cc/ncCW4cbd/vol55.jpg" },
        { numero: 56, titre: "Tome 56", image: "https://i.postimg.cc/L6wbNKmm/vol56.jpg" },
        { numero: 57, titre: "Tome 57", image: "https://i.postimg.cc/76Hsfqnn/vol57.jpg" },
        { numero: 58, titre: "Tome 58", image: "https://i.postimg.cc/C1cv89vT/vol58.jpg" },
        { numero: 59, titre: "Tome 59", image: "https://i.postimg.cc/1X4vrMTg/vol59.jpg" },
        { numero: 60, titre: "Tome 60", image: "https://i.postimg.cc/RV6P3sKy/vol60.jpg" },
        { numero: 61, titre: "Tome 61", image: "https://i.postimg.cc/Cxbm7Rv4/vol61.jpg" },
        { numero: 62, titre: "Tome 62", image: "https://i.postimg.cc/SKqVvm3b/vol62.jpg" },
        { numero: 63, titre: "Tome 63", image: "https://i.postimg.cc/76Z9qmqB/vol63.jpg" },
        { numero: 64, titre: "Tome 64", image: "https://i.postimg.cc/JnYq0ZnR/vol64.jpg" },
        { numero: 65, titre: "Tome 65", image: "https://i.postimg.cc/3NPFChm6/vol65.jpg" },
        { numero: 66, titre: "Tome 66", image: "https://i.postimg.cc/mkcSHkzC/vol66.jpg" },
        { numero: 67, titre: "Tome 67", image: "https://i.postimg.cc/v8jhdrkz/vol67.jpg" },
        { numero: 68, titre: "Tome 68", image: "https://i.postimg.cc/0y1Cz88K/vol68.jpg" },
        { numero: 69, titre: "Tome 69", image: "https://i.postimg.cc/YCNzgJ9n/vol69.jpg" },
        { numero: 70, titre: "Tome 70", image: "https://i.postimg.cc/tgXtz2nX/vol70.jpg" },
        { numero: 71, titre: "Tome 71", image: "https://i.postimg.cc/k4HQqC14/vol71.jpg" },
        { numero: 72, titre: "Tome 72", image: "https://i.postimg.cc/cC8QJz2c/vol72.jpg" },
        { numero: 73, titre: "Tome 73", image: "https://i.postimg.cc/LhKjgTMF/vol73.jpg" },
        { numero: 74, titre: "Tome 74", image: "https://i.postimg.cc/sfB8SgRT/vol74.jpg" }
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
                <img src="${chapitre.image}" alt="Chapitre ${chapitre.numero}">
                <div class="chapitre-info">
                    <h3>Tome ${chapitre.numero}</h3>
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
    { numero: 2, titre: "", image: "https://i.postimg.cc/QM87sVKM/vol2.jpg", lien: "Tome 02.html" },
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
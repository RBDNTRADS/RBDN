function updateNavbar(links) {
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        let navbarContent = '<ul>';
        links.forEach(link => {
            navbarContent += `<li><a href="${link.url}" target="${link.target}">${link.text}</a></li>`;
        });
        navbarContent += '</ul>';
        navbar.innerHTML = navbarContent;
    }
}

function updatePageInfo({ 
    newTitle = null, 
    ogTitle = null, 
    ogDescription = null, 
    ogImage = null, 
    ogUrl = null, 
    ogSiteName = null, 
    faviconUrl = null,
    footerContent = null
} = {}) {

    // Changer le titre de la page
    if (newTitle) {
        document.title = newTitle;
    }

    // Fonction pour changer ou ajouter une balise meta
    function changeMetaTag(property, content) {
        const metaTag = document.querySelector(`meta[property="${property}"]`);
        if (metaTag) {
            metaTag.setAttribute('content', content);
        } else {
            const newMetaTag = document.createElement('meta');
            newMetaTag.setAttribute('property', property);
            newMetaTag.setAttribute('content', content);
            document.head.appendChild(newMetaTag);
        }
    }

    // Mettre à jour les balises Open Graph
    if (ogTitle) changeMetaTag("og:title", ogTitle);
    if (ogDescription) changeMetaTag("og:description", ogDescription);
    if (ogImage) changeMetaTag("og:image", ogImage);
    if (ogUrl) changeMetaTag("og:url", ogUrl);
    if (ogSiteName) changeMetaTag("og:site_name", ogSiteName);

    // Changer le favicon
    if (faviconUrl) {
        let favicon = document.querySelector('link[rel="icon"]');
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.setAttribute('rel', 'icon');
            document.head.appendChild(favicon);
        }
        favicon.setAttribute('href', faviconUrl);
    }

    // Mettre à jour le contenu du footer
    if (footerContent) {
        const footer = document.querySelector('footer');
        if (footer) {
            footer.innerHTML = footerContent;
        }
    }
}

// Exemple d'utilisation de la fonction unifiée
updatePageInfo({
    newTitle: "RBDN Traduction",
    ogTitle: "RBDN Traduction",
    ogDescription: "Nouvelle Description OG",
    ogImage: "https://exemple.com/nouvelle-image.png",
    ogUrl: "https://rbdntraduction.netlify.app/",
    ogSiteName: "RBDN Traduction",
    faviconUrl: "https://exemple.com/nouveau-logo.png",
    footerContent: "<p>© 2024 RBDN Traduction.</p>"
});

// Exemple de mise à jour de la navbar
updateNavbar([
    { url: "https://rbdntraduction.netlify.app/", text: "Accueil", target: "_self" },
    { url: "https://discord.com", text: "Discord", target: "_blank" },
    { url: "https://twitter.com", text: "Twitter", target: "_blank" }
]);
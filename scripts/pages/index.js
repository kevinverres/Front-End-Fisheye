async function getPhotographers() {
    // requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch('data/photographers');
    return await response.json();
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    for (let i = 0; i < photographers.length; i++) {
        const e = photographers[i];
        const photographerModel = photographerFactory(e, i);
        const userCardDOM = photographerModel.getUserCardDOM();
        
        photographersSection.appendChild(userCardDOM);
    }
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch('data/photographers.json');
    return await response.json();
}

async function displayDataGalery(medias) {
    const factoryMedia = photographerGaleryFactory(medias);
    return factoryMedia.displayGalery();

};

async function init() {
    // Récupère les datas des photographes
    const params = new window.URLSearchParams(window.location.search);
    const getParams = params.get('id');
    const { photographers, media } = await getPhotographers();
    const div = document.querySelector('.photograph-header');
    const result = photographers.filter(photographers => photographers.id == getParams);
    const result2 = media.filter(media => media.photographerId == getParams);
    const contact_button = document.querySelector('.contact_button');

    if (result == 0) {
        // window.location.search = history.back()
        window.location.href = 'http://localhost/Front-End-Fisheye/';
    } else {
        const photographerModel = photographerFactory(result[0], result2);
        const userInfo = photographerModel.getUserInfo();


        // console.log('j\'affiche les informations du photographe : ', result[0]);
        // console.log('j\'affiche les media du photographe : ', result2);
        div.appendChild(userInfo);
        displayDataGalery(result2);
        contact_button.addEventListener('click', () => { displayModal() });
    }
    displayElement(result[0]);
};

init();
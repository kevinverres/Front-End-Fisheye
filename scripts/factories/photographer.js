function photographerFactory(data, keys) {
    const { city, country, id, name, portrait, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;



    function getUserCardDOM() {
        const a = document.createElement('a');
        const article = document.createElement('article');
        const zoom = document.createElement('div');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const location = document.createElement('strong');
        const info = document.createElement('strong');
        const salary = document.createElement('span');

        a.classList.add('link_index');
        zoom.classList.add('zoom');
        location.classList.add('strong_1');
        info.classList.add('strong_2');
        salary.classList.add('span_1');


        h2.textContent = name;
        location.textContent = city + ', ' + country;
        info.textContent = tagline;
        salary.textContent = price + '€/jour';
        salary.setAttribute("aria-label", `${price}€ par jour`);

        a.setAttribute('href', "photographer.html?id=" + id);
        a.setAttribute("aria-label", `Photographe ${name} de ${city} ${country}, commentaire : ${tagline}, avec un salaire de ${price}€ par jour`);

        a.setAttribute('tabindex', 0);
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de profil de ${name}`);

        article.appendChild(zoom);
        article.appendChild(h2);
        zoom.appendChild(img);
        article.appendChild(location);
        article.appendChild(info);
        article.appendChild(salary);
        a.appendChild(article);

        return (a);
    }

    function getUserInfo() {

        // photograph header
        const article1 = document.createElement('article');
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const img = document.createElement('img');
        const btnContact = document.querySelector('.contact_button');
        const main = document.querySelector('main');
        const location = document.createElement('p');
        const info = document.createElement('p');
        const html = document.querySelector('html');

        // phtotgraph like & salary
        const like_salary = document.createElement('div');
        const like = document.createElement('p');
        const salary = document.createElement('p');

        // photograph short
        const short = document.querySelector('.photograph-to-sort');
        const label_short = document.createElement('label');
        const ul_short = document.querySelector('.ul-short');
        const li_short_option = document.querySelectorAll('.option-short');
        const iconAngle1 = document.createElement('i');
        const iconAngle2 = document.createElement('i');
        const btn_Short = document.querySelector('.btnShort');

        // photograph css
        div.classList.add('article-info');
        location.classList.add('article-p1');
        info.classList.add('article-p2');
        like_salary.classList.add('like-salary');
        iconAngle1.classList.add('fa-solid');
        iconAngle1.classList.add('fa-angle-up');
        iconAngle1.classList.add('angle-up');
        iconAngle2.classList.add('fa-solid');
        iconAngle2.classList.add('fa-angle-down');
        iconAngle2.classList.add('angle-down');
        li_short_option[0].classList.add('li-border');
        li_short_option[1].classList.add('li-border');
        li_short_option[2].classList.add('li-border');
        like.classList.add('likes');

        // photograph textContent
        h1.textContent = name;
        location.textContent = city + ', ' + country;
        info.textContent = tagline;
        salary.textContent = price + '€/jour';
        label_short.textContent = 'Trier par';

        // style content
        ul_short.style.display = "none";
        ul_short.style.borderRadius = "4px";
        li_short_option[0].style.display = "flex";
        li_short_option[0].style.alignItems = "center";

        // loop & event
        li_short_option.forEach(e => {
            e.style.padding = '10px';
        });
        html.onclick = function (e) {
            // console.log(e.target)
            if (e.target === btn_Short || e.target === document.querySelector('.angle-down')) {
                ul_short.style.display = "flex";
                ul_short.style.visibility = "visible";
            } else {
                ul_short.style.display = "none";
                ul_short.style.visibility = "hidden";
            }
        }

        // photograph setAttribute
        img.setAttribute("src", picture);
        img.setAttribute("title", `photo de profile de ${name}`);
        img.setAttribute("tabindex", 0);
        label_short.setAttribute("for", "short");
        btnContact.setAttribute("tabindex", 0);

        // photograph appendChild
        div.appendChild(h1);
        div.appendChild(location);
        div.appendChild(info);
        article1.appendChild(div);
        article1.appendChild(btnContact);
        article1.appendChild(img);
        main.appendChild(like_salary);
        like_salary.appendChild(like);
        like_salary.appendChild(salary);
        short.appendChild(label_short);
        li_short_option[0].appendChild(iconAngle1);
        btn_Short.appendChild(iconAngle2);


        return (article1);
    }

    return { city, country, id, name, portrait, price, tagline, getUserCardDOM, getUserInfo }
}

function photographerGaleryFactory(data) {
    // const { id, photographerId, title, date } = data;

    function displayGalery() {
        // photograph picture
        const galery = document.querySelector('.photograph-picture');

        // photograph short
        const li_short_option = document.querySelectorAll('.option-short');
        const btn_Short = document.querySelector('.btnShort');
        const ul_short = document.querySelector('.ul-short');
        const iconAngle2 = document.createElement('i');
        iconAngle2.classList.add('fa-solid');
        iconAngle2.classList.add('fa-angle-down');
        iconAngle2.classList.add('angle-down');

        // comportement par défaut
        if (btn_Short.textContent === 'Popularité') {
            sortByDefault(data);
        }

        // comportement une fois trier
        li_short_option.forEach(e => {
            e.onclick = function () {
                // console.log(e.textContent);
                btn_Short.textContent = e.textContent;
                btn_Short.appendChild(iconAngle2);
                ul_short.style.display = "none";

                if (e.textContent === 'Popularité') {
                    // J'affiche la galerie en fonction de la popularité;
                    sortBy(data, 'popular');

                } else if (e.textContent === 'Date') {
                    // J\'affiche la galerie en fonction de la date;
                    sortBy(data, 'date');

                } else if (e.textContent === 'Titre') {
                    // J\'affiche la galerie en fonction du titre;
                    sortBy(data, 'title');

                }
            };
        });

        // compteur de like
        liked(data);

    }

    return { displayGalery }
}
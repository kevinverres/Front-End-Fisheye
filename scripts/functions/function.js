let nbLikes = 0;
let currentSlide = 0;
let data2 = [];

function modalShowPicture(data, photographerId) {
    // Ici le code permettant d'ouvrir notre image cliqué en taille normal
    const img = document.querySelectorAll('.galeryImg');

    img.forEach(e => {
        e.addEventListener('click', () => {
            let string = null;
            if (e.lastChild) {
                string = e.lastChild.src
            } else {
                string = e.src
            }
            const newString = string.replace(`http://localhost/Front-End-Fisheye/assets/images/${photographerId}/`, "");
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                data2.push(element);
                
                displayContent(element, newString, i);

            }
            console.log(data2);
        });

        e.addEventListener("keypress", function (evt) {

            if (evt.key === "Enter") {
                let string = null;
                if (e.lastChild) {
                    string = e.lastChild.src
                } else {
                    string = e.src
                }
                const newString = string.replace(`http://localhost/Front-End-Fisheye/assets/images/${photographerId}/`, "");
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    data2.push(element);
                    displayContent(element, newString, i);

                }
            }
        });
    });



}

function svgClose() {
    const close_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svg_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const close_box = document.createElement('div');
    const slider = document.querySelector('#slider_modal');

    close_svg.setAttribute("tabindex", 0);
    close_svg.setAttribute("aria-label", "fermer le slider");

    close_box.classList.add('close_box');
    close_svg.classList.add('close_svg');
    svg_path.classList.add('svg_path');

    close_svg.setAttribute('viewBox', '0 0 42 42');
    close_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    close_svg.setAttribute('fill', 'none');
    close_svg.setAttribute('width', '42');
    close_svg.setAttribute('height', '42');
    svg_path.setAttribute('d', 'M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z');
    slider.appendChild(close_box);
    close_box.appendChild(close_svg);
    close_svg.appendChild(svg_path);
}

function svgLeft(data) {
    const left_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svg_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const left_box = document.createElement('div');
    const slider = document.querySelector('#slider_modal');

    left_svg.setAttribute("tabindex", 0);
    left_svg.setAttribute("aria-label", "élément précédent");

    left_box.classList.add('left_box');
    left_svg.classList.add('left_svg');
    svg_path.classList.add('svgLeft_path');
    left_svg.setAttribute('width', '42');
    left_svg.setAttribute('height', '42');
    left_svg.setAttribute('viewBox', '0 0 320 512');
    left_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg_path.setAttribute('d', 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z');
    slider.appendChild(left_box);
    left_box.appendChild(left_svg);
    left_svg.appendChild(svg_path);

    document.querySelector('.left_svg').addEventListener('click', () => {
        changeSlide(data, -1);
    });
    document.querySelector('.left_svg').addEventListener("keypress", function (evt) {

        if (evt.key === "Enter") {
            changeSlide(data, -1);
        }
    });
}

function svgRight(data) {
    const right_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svg_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const right_box = document.createElement('div');
    const slider = document.querySelector('#slider_modal');

    right_svg.setAttribute("tabindex", 0);
    right_svg.setAttribute("aria-label", "élément suivant");

    right_box.classList.add('right_box');
    right_svg.classList.add('right_svg');
    svg_path.classList.add('svgRight_path');
    right_svg.setAttribute('width', '42');
    right_svg.setAttribute('height', '42');
    right_svg.setAttribute('viewBox', '0 0 320 512');
    right_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg_path.setAttribute('d', 'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z');

    slider.appendChild(right_box);
    right_box.appendChild(right_svg);
    right_svg.appendChild(svg_path);

    document.querySelector('.right_svg').addEventListener('click', () => {
        changeSlide(data, 1);
    });
    document.querySelector('.right_svg').addEventListener("keypress", function (evt) {

        if (evt.key === "Enter") {
            changeSlide(data, -1);
        }
    });
}

function changeSlide(data, sens) {
    if (sens == 1) {
        currentSlide++;
    } else if (sens == -1) {
        currentSlide -= 1;
    }

    if (currentSlide >= data.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = data.length - 1;
    }
    let newPicture = `assets/images/${data[currentSlide].photographerId}/${data[currentSlide].image}`;
    let mp4 = `assets/images/${data[currentSlide].photographerId}/${data[currentSlide].video}`;
    const content_slider = document.querySelector('.content_slider');
    const oldImg = document.querySelector('.first_img');
    const oldVideo = document.querySelector('.first_video');
    const oldSource = document.querySelector('.first_source');

    const newImg = document.createElement('img');
    const newVideo = document.createElement('video');
    const newSource = document.createElement('source');

    if (data[currentSlide].image) {

        if (oldImg) {
            content_slider.removeChild(oldImg);
            content_slider.appendChild(newImg);
        } else {
            oldVideo.removeChild(oldSource);
            content_slider.removeChild(oldVideo);
            content_slider.appendChild(newImg);
        }

        newImg.setAttribute("tabindex", 0);
        newImg.setAttribute('src', newPicture);
        newImg.classList.add('first_img');
        newImg.setAttribute("alt", `image ${data[currentSlide].title}`);
    } else {

        if (oldVideo) {
            oldVideo.removeChild(oldSource);
            content_slider.removeChild(oldVideo);
        } else {
            content_slider.removeChild(oldImg);
            content_slider.appendChild(newVideo);
            newVideo.appendChild(newSource);
        }

        newVideo.setAttribute("tabindex", 0);
        newVideo.setAttribute("title", `video ${data[currentSlide].title}`);
        newSource.setAttribute('src', mp4);
        newVideo.classList.add('first_video');
        newSource.classList.add('first_source');
        newVideo.setAttribute('autoplay', '');
        newVideo.setAttribute("controls", "");
        newSource.setAttribute("type", "video/mp4");
    }
}

function displayContent(element1, element2, index) {
    const slider = document.querySelector('#slider_modal');
    const img = document.createElement('img');
    const content_slider = document.createElement('div');
    const video = document.createElement('video');
    const source = document.createElement('source');
    const picture = `assets/images/${element1.photographerId}/${element1.image}`;
    const mp4 = `assets/images/${element1.photographerId}/${element1.video}`;

    if (element1.image == element2) {
        console.log(index);
        currentSlide = index;
        svgClose();
        svgLeft(data2);
        slider.appendChild(content_slider);
        content_slider.appendChild(img);
        img.setAttribute('src', picture);
        img.setAttribute("tabindex", 0);
        img.setAttribute("alt", `image ${element1.title}`);

        source.setAttribute("type", "video/mp4");
        video.classList.add('first_video');
        source.classList.add('first_source');

        svgRight(data2);
        img.classList.add('first_img');
        content_slider.classList.add('content_slider');

        slider.style.display = 'flex';
        slider.style.position = 'fixed';

        const content_element = document.querySelector('.content_slider');
        const close_box_element = document.querySelector('.close_box');
        const close_svg_element = document.querySelector('.close_svg');
        const svg_path_element = document.querySelector('.svg_path');

        const left_box_element = document.querySelector('.left_box');
        const left_svg_element = document.querySelector('.left_svg');
        const svgLeft_path_element = document.querySelector('.svgLeft_path');

        const right_box_element = document.querySelector('.right_box');
        const right_svg_element = document.querySelector('.right_svg');
        const svgRight_path_element = document.querySelector('.svgRight_path');

        close_svg_element.addEventListener('click', () => {
            slider.style.display = 'none';
            slider.style.position = 'initial';
            slider.removeChild(content_element);
            slider.removeChild(close_box_element);
            close_box_element.removeChild(close_svg_element);
            close_svg_element.removeChild(svg_path_element);
            slider.removeChild(left_box_element);
            left_box_element.removeChild(left_svg_element);
            left_svg_element.removeChild(svgLeft_path_element);

            slider.removeChild(right_box_element);
            right_box_element.removeChild(right_svg_element);
            right_svg_element.removeChild(svgRight_path_element);
            data2.length = 0;
            currentSlide = 0;
        });
        close_svg_element.addEventListener("keypress", function (evt) {

            if (evt.key === "Enter") {
                slider.style.display = 'none';
            slider.style.position = 'initial';
            slider.removeChild(content_element);
            slider.removeChild(close_box_element);
            close_box_element.removeChild(close_svg_element);
            close_svg_element.removeChild(svg_path_element);
            slider.removeChild(left_box_element);
            left_box_element.removeChild(left_svg_element);
            left_svg_element.removeChild(svgLeft_path_element);

            slider.removeChild(right_box_element);
            right_box_element.removeChild(right_svg_element);
            right_svg_element.removeChild(svgRight_path_element);
            data2.length = 0;
            currentSlide = 0;
            }
        });
        

    } else if (element1.video == element2) {
        // console.log(element1);
        svgClose();
        svgLeft(data2);
        slider.appendChild(content_slider);

        slider.appendChild(content_slider);
        content_slider.appendChild(video);
        video.appendChild(source);
        svgRight(data2);
        video.setAttribute("title", `video ${element1.title}`);
        video.setAttribute("tabindex", 0);
        video.setAttribute("autoplay", "");
        video.setAttribute("controls", "");
        source.setAttribute("src", mp4);
        source.setAttribute("type", "video/mp4");
        video.classList.add('first_video');
        source.classList.add('first_source');
        content_slider.classList.add('content_slider');
        slider.style.display = 'flex';
        slider.style.position = 'fixed';

        const content_element = document.querySelector('.content_slider');
        const close_box_element = document.querySelector('.close_box');
        const close_svg_element = document.querySelector('.close_svg');
        const svg_path_element = document.querySelector('.svg_path');

        const left_box_element = document.querySelector('.left_box');
        const left_svg_element = document.querySelector('.left_svg');
        const svgLeft_path_element = document.querySelector('.svgLeft_path');

        const right_box_element = document.querySelector('.right_box');
        const right_svg_element = document.querySelector('.right_svg');
        const svgRight_path_element = document.querySelector('.svgRight_path');

        close_svg_element.addEventListener('click', () => {
            slider.style.display = 'none';
            slider.style.position = 'initial';

            slider.removeChild(content_element);
            slider.removeChild(close_box_element);
            close_box_element.removeChild(close_svg_element);
            close_svg_element.removeChild(svg_path_element);
            slider.removeChild(left_box_element);
            left_box_element.removeChild(left_svg_element);
            left_svg_element.removeChild(svgLeft_path_element);

            slider.removeChild(right_box_element);
            right_box_element.removeChild(right_svg_element);
            right_svg_element.removeChild(svgRight_path_element);
            data2.length = 0;
            currentSlide = 0;
        });
        close_svg_element.addEventListener("keypress", function (evt) {
            if (evt.key === "Enter") {
                slider.style.display = 'none';
            slider.style.position = 'initial';

            slider.removeChild(content_element);
            slider.removeChild(close_box_element);
            close_box_element.removeChild(close_svg_element);
            close_svg_element.removeChild(svg_path_element);
            slider.removeChild(left_box_element);
            left_box_element.removeChild(left_svg_element);
            left_svg_element.removeChild(svgLeft_path_element);

            slider.removeChild(right_box_element);
            right_box_element.removeChild(right_svg_element);
            right_svg_element.removeChild(svgRight_path_element);
            data2.length = 0;
            currentSlide = 0;
            }
        });
    }


}

function displayImage(picture, Title, likes) {
    const galery = document.querySelector('.photograph-picture');
    const img = document.createElement('img');
    const article = document.createElement('article');
    const title = document.createElement('p');
    const like = document.createElement('p');
    const heart = document.createElement('i');
    const div_like = document.createElement('div');
    const div = document.createElement('div');

    img.setAttribute("tabindex", 0);
    img.setAttribute("alt", `image ${Title}`);
    like.setAttribute("aria-label", `${likes} j'aime`);
    like.setAttribute("tabindex", 0);
    heart.setAttribute("tabindex", 0);
    heart.setAttribute("aria-label", "boutton j'aime");

    title.textContent = Title;
    like.textContent = likes;

    heart.classList.add('fa-regular');
    heart.classList.add('fa-heart');
    heart.classList.add('heart-2');
    div.classList.add('image-info');
    div_like.classList.add('like-info');
    like.classList.add('like');
    img.classList.add('galeryImg');

    article.classList.add('photo');
    img.setAttribute("src", picture)
    article.appendChild(img);
    div.appendChild(div_like);
    div.appendChild(title);
    article.appendChild(div);
    like.appendChild(heart);
    div_like.appendChild(like);
    galery.appendChild(article);
}

function displayVideo(mp4, Title, likes) {
    const galery = document.querySelector('.photograph-picture');
    const video = document.createElement('video');
    const source = document.createElement('source');
    const article = document.createElement('article');
    const title = document.createElement('p');
    const like = document.createElement('p');
    const heart = document.createElement('i');
    const div_like = document.createElement('div');
    const div = document.createElement('div');

    video.setAttribute("tabindex", 0);
    video.setAttribute("title", `video ${Title}`);
    like.setAttribute("tabindex", 0);
    heart.setAttribute("tabindex", 0);
    heart.setAttribute("aria-label", "boutton j'aime");

    title.textContent = Title;
    like.textContent = likes;

    heart.classList.add('fa-regular');
    heart.classList.add('fa-heart');
    heart.classList.add('heart-2');
    div.classList.add('image-info');
    div_like.classList.add('like-info');
    like.classList.add('like');
    video.classList.add('galeryImg');

    article.classList.add('photo');
    // video.setAttribute("controls", "controls");
    source.setAttribute("src", mp4);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    article.appendChild(video);
    article.appendChild(div);
    div.appendChild(div_like);
    div.appendChild(title);
    article.appendChild(div);
    like.appendChild(heart);
    div_like.appendChild(like);
    galery.appendChild(article);
}

function sortByDefault(data) {
    data.sort(function (a, b) {
        return (b.likes - a.likes)
    })

    let photographerId = null

    data.forEach((media) => {
        photographerId = media.photographerId
        const picture = `assets/images/${media.photographerId}/${media.image}`;
        const mp4 = `assets/images/${media.photographerId}/${media.video}`;
        const title = `${media.title}`;
        const like = `${media.likes}`;

        if (media.image) {
            displayImage(picture, title, like);
        } else if (media.video) {
            displayVideo(mp4, title, like);
        }

    });

    modalShowPicture(data, photographerId);
}

function sortBy(data, sort) {
    const galery = document.querySelector('.photograph-picture');
    if (sort === 'popular') {
        data.sort(function (a, b) {
            return (b.likes - a.likes)
        })
    } else if (sort === 'date') {
        data.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date)
        })
    } else if (sort === 'title') {
        data.sort(function (a, b) {
            return a.title.localeCompare(b.title)
        })
    }
    document.querySelectorAll('.photo').forEach(e => {
        galery.removeChild(e);
    });
    nbLikes = 0;
    let photographerId = null
    data.forEach((media) => {
        photographerId = media.photographerId
        const picture = `assets/images/${media.photographerId}/${media.image}`;
        const mp4 = `assets/images/${media.photographerId}/${media.video}`;
        const title = `${media.title}`;
        const like = `${media.likes}`;

        if (media.image) {
            displayImage(picture, title, like);
        } else if (media.video) {
            displayVideo(mp4, title, like);
        }

    });
    modalShowPicture(data, photographerId);
    liked(data);
}

function liked(data) {
    const like = document.querySelector('.likes');
    const iconHeart = document.createElement('i');

    iconHeart.classList.add('fa-solid');
    iconHeart.classList.add('fa-heart');
    iconHeart.classList.add('heart');

    document.querySelectorAll('.like').forEach(e => {
        const result = data.filter(media => media.likes == e.textContent);
        e.onclick = function (t) {

            document.querySelectorAll('.like').forEach(element => {



                if (e.textContent == result[0].likes && t.target == element.children[0]) {
                    const heart = document.createElement('i');
                    heart.classList.add('fa-solid');
                    heart.classList.add('fa-heart');
                    heart.classList.add('heart-2');
                    e.textContent = parseInt(e.textContent) + 1;
                    e.appendChild(heart);
                    nbLikes = parseInt(nbLikes) + 1
                } else if (e.textContent == parseInt(result[0].likes) + 1 && t.target == element.children[0]) {
                    const heart = document.createElement('i');
                    heart.classList.add('fa-regular');
                    heart.classList.add('fa-heart');
                    heart.classList.add('heart-2');
                    e.textContent = parseInt(e.textContent) - 1;
                    e.appendChild(heart);
                    nbLikes = parseInt(nbLikes) - 1
                }

                updateTotalLike();
            });
        }

    });

    document.querySelectorAll('.like').forEach(e => {
        nbLikes += parseInt(e.textContent);

    });
    like.textContent = nbLikes;
    like.appendChild(iconHeart);

}

function updateTotalLike() {
    const like = document.querySelector('.likes');
    const iconHeart = document.createElement('i');

    iconHeart.classList.add('fa-solid');
    iconHeart.classList.add('fa-heart');
    iconHeart.classList.add('heart');

    like.innerHTML = nbLikes;
    like.appendChild(iconHeart);
}
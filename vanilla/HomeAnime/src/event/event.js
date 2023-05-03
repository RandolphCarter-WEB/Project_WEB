export const isHover = (id, isHovered) => {
    const video = document.querySelector("#video"+id);

    //TODO: first set all default <anti code>
    if(video) {
        if(isHovered) {
            video.paused ? video.play() : null;
            video.width = "250";
        } else {
            video.pause();
            video.currentTime = 0;
            video.width = "200";
        }
    }
}

export const animeHover = (id, isHovered) => {
    const num = document.querySelector("#titleNum"+id);
    const title = document.querySelector("#title"+id);
    const line = document.querySelector("#hr"+id);
    const anime = document.querySelector("#anime");

    if(isHovered) {
        setAnime(num, title, line, anime, id);
    } else {
        setDefault(num, title, line, anime, id);
    }
}

const setAnime =(num, title, line, anime, id) => {
    if(num) {
        num.style.fontSize = "2rem";
        num.style.color = "orange";
    }

    if(title) {
        title.style.fontSize = "1.8rem";
    }

    if(line) {
        line.style.width = "10rem";
        line.style.height = "0.3rem";
        line.style.backgroundColor = "orange";
    }

    if(anime) {
        anime.style.left = "20" * Number.parseInt(id) + "%";
        anime.style.opacity = "1";
    }
}

const setDefault = (num, title, line, anime, id) => {
    if(num) {
        num.style.fontSize = "1rem";
        num.style.color = "#555";
    }

    if(title) {
        title.style.fontSize = "1rem";
    }

    if(line) {
        line.style.width = "2rem";
        line.style.height = "0.1rem";
        line.style.backgroundColor = "gray";
    }

    if(anime) {
        anime.style.left = "-100%";
        anime.style.opacity = "0";
    }
}

export default {isHover, animeHover}
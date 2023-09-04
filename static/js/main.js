
// rotate function start
function rotate(element) {
    const newspaperSpinning = [
        { transform: "rotate(360deg) scale(0.1)" },
        { transform: "rotate(0) scale(1)" },
    ];

    const newspaperTiming = {
        duration: 2000,
        iterations: 1,
    };
    element.animate(newspaperSpinning, newspaperTiming);
}
// rotate end

// blur function start
function blur(element) {
    const newspaperSpinning = [
        { filter: "blur(5rem)" },
        { filter: "blur(0)" },
    ];

    const newspaperTiming = {
        duration: 2000,
        iterations: 1,
    };
    element.animate(newspaperSpinning, newspaperTiming);
}
// blur end

// brightness function start
function brightness(element) {
    const newspaperSpinning = [
        { filter: "brightness(0.5)" },
        { filter: "brightness(0)" },
        { filter: "brightness(1)" },
    ];

    const newspaperTiming = {
        duration: 2000,
        iterations: 1,
    };
    element.animate(newspaperSpinning, newspaperTiming);
}
// brightness end

async function getimg(num) {
    const response = await fetch(`img/${num}`);
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    const imageElement = document.getElementById("imgid");
    imageElement.src = imageUrl;
    const container = document.getElementById("image-container");
    container.appendChild(imageElement);
}

function randomEffect() {
    const mainDiv = document.getElementById("main");
    switch(getRandomInt(3)) {
    case 0:
        rotate(mainDiv);
        break;
    case 1:
        blur(mainDiv);
        break;
    case 2:
        brightness(mainDiv);
        break;
    default:
        // code block
    }
}

async function showcontent(num) {
    // temp start
    console.log(window.history.replaceState(null, null, num));
    // temp end

    //random effect start
    randomEffect();
    // random effect end

    const response = await fetch(`nav/${num}`);
    const context = await response.json();
    const titlediv = document.getElementById("title");
    titlediv.innerHTML = context.title;
    const textdiv = document.getElementById("text");
    textdiv.innerHTML = context.text;

    const videodiv = document.getElementById("video");
    if (String(context.vidio).toLowerCase() === 'null') {
        videodiv.classList.add("hide");
    } else {
        videodiv.classList.remove("hide");
        videodiv.src = String(context.vidio);
    }

    const contentdiv = document.getElementById("content");
    const imgdiv = document.getElementById("image-container");
    if (String(context.img).toLowerCase() === 'true') {
        getimg(num);
        imgdiv.classList.remove("hide");
        contentdiv.classList.remove("fullwith");
        contentdiv.classList.add("minWidth");
    } else {
        imgdiv.classList.add("hide");
        contentdiv.classList.remove("minWidth");
        contentdiv.classList.add("fullwith");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.item').forEach(button => {
        button.onclick = function () {
            
            showcontent(this.dataset.item);
        };
    });
});

async function setVideo(link) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = link;
}

async function getvideo() {
    const response = await fetch(`vid/`);
    const context = await response.json();

    const listdiv = document.getElementById('videolist');
    Object.entries(context).forEach(([key, value]) => {
        var a = document.createElement('a');
        var div = document.createElement('div');
        div.appendChild(a)
        a.href = String("javascript:setVideo('"+value.video +"')");
        a.text = value.subtitle;
        listdiv.appendChild(div);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
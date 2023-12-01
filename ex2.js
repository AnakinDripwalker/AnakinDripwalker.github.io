var img1 = document.getElementsByClassName("chatViolent");
var img2 = document.getElementsByTagName("img")[1];
var img3 = document.getElementsByTagName("img")[2];

var t = setInterval(alternance, 120);

function alternance() {
    for (let i = 0; i < img1.length; i++) {
        console.log(img1[i].src);
        if (img1[i].src == "https://anakindripwalker.github.io/img/pop.png") {
            img1[i].src = "img/pop2.png";
        }
        else {
            img1[i].src = "img/pop.png";
        }
    }
    
}

function pause() {
    clearInterval(t);
    t = null

    document.getElementById("resume").disabled = false;
    document.getElementById("pause").disabled = true;
}

function reprendre() {
    if (!t) {
        t = setInterval(alternance, 120);
    }

    document.getElementById("resume").disabled = true;
    document.getElementById("pause").disabled = false;
}

function cacher() {
    console.log(img2.src);
    img2.style.visibility = "hidden";

    document.getElementById("afficher").disabled = false;
    document.getElementById("cacher").disabled = true;
}

function afficher() {
    img2.style.visibility = null;

    document.getElementById("afficher").disabled = true;
    document.getElementById("cacher").disabled = false;
}

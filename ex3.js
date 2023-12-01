const lstImg = ["img/pop.png", "img/pop2.png", "img/sus_cat.jpg", "img/uhh.jpg"];

var idLst = 0

function gauche(i) {
    if (idLst > 0) {
        document.getElementsByTagName("img")[i].src = lstImg[idLst - 1];
        idLst -= 1;
    }
    else {
        idLst = lstImg.length - 1;
        document.getElementsByTagName("img")[i].src = lstImg[idLst];
    }
}

function droite(i) {
    if (idLst < lstImg.length - 1) {
        document.getElementsByTagName("img")[i].src = lstImg[idLst + 1];
        idLst += 1;
    }
    else {
        idLst = 0;
        document.getElementsByTagName("img")[i].src = lstImg[idLst];
    }
}

var t = setInterval(imgRandom, 2000);

function imgRandom() {
    document.getElementsByTagName("img")[1].src = lstImg[Math.floor(Math.random() * 4)];
}

function verifBout(e) {
    if (e.keyCode == 37) {
        gauche(2);
    }
    else if (e.keyCode == 39) {
        droite(2);
    }
}
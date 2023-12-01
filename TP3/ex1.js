// Lancement
alert("Page chargée !");

//Image
const lstImg = document.getElementsByTagName("img");

for (let i = 0; i < lstImg.length; i++) {
    hoverImg(lstImg[i]);
}

// Bouton
const lstBout = document.getElementsByTagName("button");

for (let i = 0; i < lstBout.length; i++) {
    if (lstBout[i].parentElement.nodeName != "FOOTER") {
        lstBout[i].onclick = function() { clicBouton(lstBout[i]) };
    }
}

// Texte
const lstP = document.getElementsByTagName("p");

for (let i = 0; i < lstP.length; i++) {
    lstP[i].onmouseover = function() { lstP[i].style.color = 'red' };
    lstP[i].onclick = function() { lstP[i].style.color = 'lime' };
    lstP[i].ondblclick = function() { lstP[i].style.color = 'navy' }
}

function hoverImg(image) {
    // Alert
    //image.onmouseover = function() { alert("oe l'image") };
    image.onmouseenter = function() { image.src = "img/pop2.png" };
    image.onmouseleave = function() { image.src = "img/pop.png" }
}

function clicBouton(bouton) {
    // Alert
    alert("c un bouton");

    // Couleur
    bouton.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    // Style
    if (bouton.style.borderRadius != '15px') {
        bouton.style.borderRadius = '15px';
    }
    else {
        bouton.style.borderRadius = null;
    }
}

// Touche appuyée
onkeydown = function() { alert("oui") };
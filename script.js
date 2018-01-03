let pictures = document.querySelector(".swap");

pictures.addEventListener("click", clicked);

function clicked() {
    window.location = "web.html";
}

let panda = document.querySelector("#panda");
let fu = document.querySelector("#fu");
let pandaImage = document.querySelector("#kungfu");
pandaImage.addEventListener("mouseenter", jumpHovered);

function jumpHovered() {
    console.log("Happy Pandas");
    fu.classList.toggle("fuJump");
    panda.classList.toggle("kungJump");
}
pandaImage.addEventListener("mouseleave", jumpLeft);

function jumpLeft() {
    console.log("Happy Pandas");
    fu.classList.remove("fuJump");
    panda.classList.remove("kungJump");
}
pandaImage.addEventListener("click", pandaClicked);

function pandaClicked() {
    window.location = "web.html";
}
let trololoMom = document.querySelector("#mom");
let momContainer = document.querySelector("#trololo");
let interactiveImage = document.querySelector("#interactive_anim");
interactiveImage.addEventListener("mouseenter", trololoEntered);

function trololoEntered() {
    trololoMom.classList.toggle("mom_moves");
    momContainer.classList.toggle("trololo_moves");
}
interactiveImage.addEventListener("animationend", myEndFunction);

function myEndFunction() {
    trololoMom.classList.remove("mom_moves");
    momContainer.classList.remove("trololo_moves");
}
interactiveImage.addEventListener("click", interactiveClicked);

function interactiveClicked() {
    window.location = "web.html";
}

let flowers = document.querySelector("#pool1");
flowers.addEventListener("click", flowersClicked);

function flowersClicked() {
    window.location = "web.html";
}

let a = document.querySelector("#a");
let s = document.querySelector("#s");
let d = document.querySelector("#d");
let w = document.querySelector("#w");
let x = document.querySelector("#x");
let z = document.querySelector("#z");
let aa = document.querySelector(".aa");
let ss = document.querySelector(".ss");
let dd = document.querySelector(".dd");
let ww = document.querySelector(".ww");
let xx = document.querySelector(".xx");
let zz = document.querySelector(".zz");
let key = document.querySelectorAll(".key");
let counter = 0;

window.addEventListener("keydown", clicked)
a.addEventListener("click", function () {
    let evtClone = {
        key: "a"
    }
    clicked(evtClone);
})
s.addEventListener("click", function () {
    let evtClone = {
        key: "s"
    }
    clicked(evtClone);
})
d.addEventListener("click", function () {
    let evtClone = {
        key: "d"
    }
    clicked(evtClone);
})
w.addEventListener("click", function () {
    let evtClone = {
        key: "w"
    }
    clicked(evtClone);
})
x.addEventListener("click", function () {
    let evtClone = {
        key: "x"
    }
    clicked(evtClone);
})
z.addEventListener("click", function () {
    let evtClone = {
        key: "z"
    }
    clicked(evtClone);
})

function clicked(evt) {



    switch (evt.key) {

        case "a":
            a.classList.remove("playing");
            aa.currentTime = 0; //rewind to the start
            aa.play();
            console.log("A Clicked");
            a.classList.add("playing");
            a.addEventListener("transitionend", function () {
                a.classList.remove("playing");
            })

            break;
        case "s":
            ss.currentTime = 0;
            ss.play();
            console.log("S Clicked");
            s.classList.add("playing");
            s.addEventListener("transitionend", function () {
                s.classList.remove("playing");
            })
            break;
        case "d":
            dd.currentTime = 0;
            dd.play();
            console.log("D Clicked");
            d.classList.add("playing");
            d.addEventListener("transitionend", function () {
                d.classList.remove("playing");
            })
            break;
        case "w":
            ww.currentTime = 0;
            ww.play();
            console.log("W Clicked");
            w.classList.add("playing");
            w.addEventListener("transitionend", function () {
                w.classList.remove("playing");
            })
            break;
        case "x":
            xx.currentTime = 0;
            xx.play();
            console.log("X Clicked");
            x.classList.add("playing");
            x.addEventListener("transitionend", function () {
                x.classList.remove("playing");
            })
            break;
        case "z":
            zz.currentTime = 0;
            zz.play();
            console.log("Z Clicked");
            z.classList.add("playing");
            z.addEventListener("transitionend", function () {
                z.classList.remove("playing");
            })
            break;
    }
}
let drums = document.querySelector("#pool2");
drums.addEventListener("click", drumsClicked);

function drumsClicked() {
    window.location = "web.html";
}
let hit = document.querySelector("#teaser_anim");
let heilMyself = document.querySelector("#myself");
hit.addEventListener("mouseenter", movesHand);

function movesHand() {
    document.getElementById("hitler").style.backgroundImage = "url(images/desktop/hitler.png)"
    document.getElementById("hitler").classList.add("heilHitler");
    heilMyself.play();
}
hit.addEventListener("mouseout", hitlerEnds);

function hitlerEnds() {

    document.getElementById("hitler").classList.remove("heilHitler");
}
let movie = document.querySelector("#teaser_anim");
movie.addEventListener("click", teaserClicked);

function teaserClicked() {
    window.location = "web.html";
}

let boat = document.querySelector("#logoTransparent");
let boatContainer = document.querySelector("#agency")
let boatBackground = document.querySelector("#boat_container")
boat.addEventListener("mouseover", float);
boatContainer.addEventListener("mouseover", float);

function float() {
    boat.classList.add("float");
}
boatContainer.addEventListener("mouseout", floatEnds);
boatBackground.addEventListener("mouseout", floatEnds);

function floatEnds() {
    boat.classList.remove("float");

}
boatContainer.addEventListener("click", boatClicked);
boatBackground.addEventListener("click", boatClicked);

function boatClicked() {
    window.location = "web.html";
}

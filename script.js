/* nav bar section */

// name
let navderList = [
    "g/RUFEVEAN",
    "gi/RUFEVEAN",
    "git/RUFEVEAN",
    "gith/RUFEVEAN",
    "githu/RUFEVEAN",
    "github/RUFEVEAN",
    "github./RUFEVEAN",
    "github.c/RUFEVEAN",
    "github.co/RUFEVEAN",
    "github.com/RUFEVEAN",
];
let count = 0;
let navde1 = function () {
    document.getElementById("navder").innerHTML = navderList[count];
    if (count != navderList.length - 1) {
        count = count + 1;
    }
};

let in1;
let navde = function () {
    count = 0;
    in1 = setInterval(navde1, 100);
};

let navdull = function () {
    clearInterval(in1);
    document.getElementById("navder").innerHTML = "/RUFEVEAN";
};
let greetlist = ["", "Hello", "नमस्ते", "Kamusta", "హలో"];

let count2 = 0;
let gree1 = function () {
    (document.getElementById("greeting1").innerHTML = greetlist[count2]),
        "I am Dheeraj Chowdary";
    count2 = (count2 % (greetlist.length - 1)) + 1;
};

let r2 = setInterval(gree1, 300);

const toggle = document.getElementById("toggle");
const body = document.body;
const menu1 = document.getElementById("abb1");
const menu2 = document.getElementById("abb2");
const menu3 = document.getElementById("abb3");
const body1 = document.getElementById("am1");
const body2 = document.getElementById("am2");
const body3 = document.getElementById("am3");
const body4 = document.getElementById("am4");
const ruff = document.getElementById("navder");
const gree12 = document.getElementById("greeting1");
const name12 = document.getElementById("name12");
const prof1 = document.getElementById("profession1");
const scrol1 = document.getElementById("scroll1");
const l1 = document.getElementById("l1");
const g1 = document.getElementById("g1");
const i1 = document.getElementById("i1");
const t1 = document.getElementById("t1");
const night1 = document.getElementById("icon1");
const n1 = document.getElementById("n1");
const toggle1 = document.getElementById("toggle1");

toggle1.addEventListener("input", (ev) => {
    const check1 = ev.target.checked;
    if (check1) {
        body.classList.add("transition2");
        night1.classList.remove("fa-moon");
        night1.classList.add("fa-sun");
    } else {
        body.classList.remove("transition2");
        night1.classList.add("fa-moon");
        night1.classList.remove("fa-sun");
    }
});
toggle.addEventListener("input", (t) => {
    const isChecked = t.target.checked;

    if (isChecked) {
        body.classList.add("transition1");
        // n1.innerHTML = '<i class="fa-solid fa-moon night1" id="icon1"></i>';
        menu1.classList.add("ab4");
        menu2.classList.add("ab5");
        menu3.classList.add("ab6");
        body1.classList.add("am2");
        body2.classList.add("am2");
        body3.classList.add("am2");
        body4.classList.add("am2");
        ruff.classList.add("navd1");
        gree12.classList.add("ungreeting1");
        name12.classList.add("unnaming");
        prof1.classList.add("unprofession");
        scrol1.classList.add("unscroll1");
        l1.classList.add("tyu1");
        g1.classList.add("tyu1");
        i1.classList.add("tyu1");
        t1.classList.add("tyu1");
    } else {
        body.classList.remove("transition1");
        menu1.classList.remove("ab4");
        menu2.classList.add("uab5");
        menu2.classList.remove("ab5");
        menu3.classList.remove("ab6");
        body1.classList.remove("am2");
        body2.classList.remove("am2");
        body3.classList.remove("am2");
        body4.classList.remove("am2");
        ruff.classList.remove("navd1");
        gree12.classList.remove("ungreeting1");
        name12.classList.remove("unnaming");
        prof1.classList.remove("unprofession");
        scrol1.classList.remove("unscroll1");
        l1.classList.remove("tyu1");
        g1.classList.remove("tyu1");
        i1.classList.remove("tyu1");
        t1.classList.remove("tyu1");
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 250) $("body").stop().fadeOut();
    else $("body").stop().fadeIn();
});


const m111 = document.getElementById("m122");

let m22 = function(){
    m111.classList.add("m1b");
}

let m32 = function(){
    m111.classList.remove("m1b");
}

"use strict";

/* nav bar section */
// name
var navderList = ["g/RUFEVEAN", "gi/RUFEVEAN", "git/RUFEVEAN", "gith/RUFEVEAN", "githu/RUFEVEAN", "github/RUFEVEAN", "github./RUFEVEAN", "github.c/RUFEVEAN", "github.co/RUFEVEAN", "github.com/RUFEVEAN"];
var count = 0;

var navde1 = function navde1() {
  document.getElementById("navder").innerHTML = navderList[count];

  if (count != navderList.length - 1) {
    count = count + 1;
  }
};

var in1;

var navde = function navde() {
  count = 0;
  in1 = setInterval(navde1, 100);
};

var navdull = function navdull() {
  clearInterval(in1);
  document.getElementById("navder").innerHTML = "/RUFEVEAN";
};

var greetlist = ["", "Hello", "नमस्ते", "Kamusta", "హలో"];
var count2 = 0;

var gree1 = function gree1() {
  document.getElementById("greeting1").innerHTML = greetlist[count2], "I am Dheeraj Chowdary";
  count2 = count2 % (greetlist.length - 1) + 1;
};

var r2 = setInterval(gree1, 300);
var toggle = document.getElementById("toggle");
var body = document.body;
var menu1 = document.getElementById("abb1");
var menu2 = document.getElementById("abb2");
var menu3 = document.getElementById("abb3");
var body1 = document.getElementById("am1");
var body2 = document.getElementById("am2");
var body3 = document.getElementById("am3");
var body4 = document.getElementById("am4");
var ruff = document.getElementById("navder");
var gree12 = document.getElementById("greeting1");
var name12 = document.getElementById("name12");
var prof1 = document.getElementById("profession1");
var scrol1 = document.getElementById("scroll1");
var l1 = document.getElementById("l1");
var g1 = document.getElementById("g1");
var i1 = document.getElementById("i1");
var t1 = document.getElementById("t1");
var night1 = document.getElementById("icon1");
var n1 = document.getElementById("n1");
var toggle1 = document.getElementById("toggle1");
toggle1.addEventListener("input", function (ev) {
  var check1 = ev.target.checked;

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
toggle.addEventListener("input", function (t) {
  var isChecked = t.target.checked;

  if (isChecked) {
    body.classList.add("transition1"); // n1.innerHTML = '<i class="fa-solid fa-moon night1" id="icon1"></i>';

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
var m112 = document.getElementById("m123");

function m22() {
  m112.classList.add("m1b");
}

function m32() {
  m112.classList.remove("m1b");
} //ury


function d22() {
  m112.classList.add("d1b");
}

function d32() {
  m112.classList.remove("d1b");
}

function s22() {
  m112.classList.add("s1b");
}

function s32() {
  m112.classList.remove("s1b");
}

"use strict";

var workp1 = document.getElementById("n13");

function change1() {
  workp1.classList.add("workpics11");
}

var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  cursor.setAttribute("style", "top : " + (e.pageY - 915) + "px;left : " + e.pageX + "px");
});
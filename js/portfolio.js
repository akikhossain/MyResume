// JavaScript to trigger the fade-in and fade-out animation
const fadeInOutImage = document.getElementById("fadeInOutImage");

// Initial fade-in when the page loads
fadeInOutImage.style.opacity = 1;

// Function to toggle the fade-in and fade-out animation
function toggleFadeInOut() {
    fadeInOutImage.style.opacity =
        fadeInOutImage.style.opacity === "0" ? "1" : "0";
}

// Set an interval to toggle the animation every 2000 milliseconds (2 seconds)
setInterval(toggleFadeInOut, 2000);

// hello banner animation
var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw =
        currentWord == words.length - 1
            ? wordArray[0]
            : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = "letter behind";
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = "letter out";
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = "letter in";
    }, 340 + i * 80);
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = "";
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement("span");
        letter.className = "letter";
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

// about me animation
document.addEventListener("DOMContentLoaded", function () {
    var aboutImg = document.querySelector(".about_img");
    var aboutText = document.querySelector(".about_text");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(aboutImg) || isElementInViewport(aboutText)) {
            aboutImg.classList.add("show");
            aboutText.classList.add("show");
            window.removeEventListener("scroll", onScroll);
        }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // Check on initial load
});

//navbar smooth scrolling to different
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
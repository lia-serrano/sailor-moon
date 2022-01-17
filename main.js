// Initialize Swiper //
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

window.onload = function () {
  document.getElementById("home").style.display = "block";
  document.getElementById("we").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("contact").style.display = "none";
};

const pageHome = document.querySelector('.btnHome');
pageHome.addEventListener('click', show)
function show()  {
  document.getElementById("home").style.display = "block";
  document.getElementById("we").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

const pageWe = document.querySelector('.btnWe');
pageWe.addEventListener('click', show1)
function show1()  {
  document.getElementById("home").style.display = "none";
  document.getElementById("we").style.display = "block";
  document.getElementById("characters").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

const pageCharacters = document.querySelector('.btnCharacters');
pageCharacters.addEventListener('click', show2)
function show2()  {
  document.getElementById("home").style.display = "none";
  document.getElementById("we").style.display = "none";
  document.getElementById("characters").style.display = "block";
  document.getElementById("contact").style.display = "none";
}

const pageContact = document.querySelector('.btnContact');
pageContact.addEventListener('click', show3)
function show3()  {
  document.getElementById("home").style.display = "none";
  document.getElementById("we").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("contact").style.display = "block";
}

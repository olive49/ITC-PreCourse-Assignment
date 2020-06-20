//GOOGLE MAPS & MARKER

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const maps = document.querySelectorAll('.map');
const marker = document.querySelector('.fa-map-marker');
let currentlySelected = 0;

const markers = [
  "7rem 10rem 10rem 10rem",
  "6.8rem 11.5rem 10rem 11.7rem",
  "9rem 10.5rem 10rem 7rem",
  "6.5rem 10.5rem 10rem 11rem",
];

prevBtn.addEventListener("click", function (){
  maps[currentlySelected].classList.remove("active"); currentlySelected--;

  maps[currentlySelected].classList.add("active");
  nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
    marker.style.padding = markers[currentlySelected];
    
});

nextBtn.addEventListener("click", function (){
  maps[currentlySelected].classList.remove("active"); currentlySelected++;

  maps[currentlySelected].classList.add("active");
  prevBtn.disabled = false;

  if (maps.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
    marker.style.padding = markers[currentlySelected];

});

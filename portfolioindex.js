//GITHUB CARD

const GITHUB_URL = 'https://api.github.com/users/olive49';

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })

  .then(function(data) {
    const profileImage = document.querySelector(".profile-image").setAttribute("src", data['avatar_url']);

    const { login } = data;
    document.getElementById('my-name').textContent = login;
  });
      

let card = document.querySelector('.card');
let linked = document.getElementById('linkedin');
let git = document.getElementById('github');
let stack = document.getElementById('stacked');

card.addEventListener("click", function (){
    card.classList.add('play')
    linked.style.color = "white";
    git.style.color = "white";
    stack.style.color = "white";

    setTimeout(function(){
      card.classList.remove('play')
      linked.style.color = "";
      git.style.color = "";
      stack.style.color = "";
    }, 1000)
});




function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtClose = document.querySelector(".close");//Sélection du bouton de fermeture du formulaire
const formData = document.querySelectorAll(".formData");

console.log(modalbg);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBtClose.addEventListener('click',closeModal);//appel de la fonction closeModal, si on clic sur le bouton de fermeture
}

function closeModal() {

  modalbg.style.display = "none"; //changement de la propriété display bloc en display none: pour supprimer le formulaire du Dom

}


//SELECTIONS DES ELEMENTS DU DOM------------------------------------------------
//Sélection des modales
const modalbg = document.querySelector(".bground");
const modalValide = document.querySelector(".bground-Valide");//Sélection de la modale

//Sélection du bouton "je m'inscris" en version desktop et mobile
const modalBtn = document.querySelectorAll(".modal-btn");

//Sélection du bouton de fermeture du formulaire
const modalBtClose = document.querySelector(".close");
const modalBtCloseValide = document.querySelector(".valide");
const modalBtCloseValideBouton = document.querySelector(".valide2");

//Selection de chaque champ du formulaire
const formData = document.querySelectorAll(".formData");

//Selection de l'icone du menu en mobile
const icon = document.getElementById('icon');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');

//Selection du bouton de validation du formulaire
const submit = document.getElementById('submit');
//SELECTIONS DES ELEMENTS DU DOM------------------------------------------------

//LANCEMENT DES ECOUTEURS D'EVENEMENTS-----------------------------------
//Ouverture du menu en mobile
icon.addEventListener('click', () => { editNav('myTopnav') });
icon2.addEventListener('click', () => { editNav('myTopnav2') });
icon3.addEventListener('click', () => { editNav('myTopnav3') });
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//Fermeture des modales
modalBtClose.addEventListener('click', () => { closeModal(modalbg) });
modalBtCloseValide.addEventListener('click', () => { closeModal(modalValide) });
modalBtCloseValideBouton.addEventListener('click', () => { closeModal(modalValide) });
//Vérification de la validation du formulaire
submit.addEventListener('click', validate);
//LANCEMENT DES ECOUTEURS D'EVENEMENTS-----------------------------------

//CREATIONS DES FONCTIONS-----------------------------------------------
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture des modales
function closeModal(id) {
  id.style.display = "none"; //changement de la propriété display bloc en display none: cacher le formulaire
}

//Ouverture et fermeture du menu en mobile
function editNav(id) {
  let x = document.getElementById(id);
  if (x.className == "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Algorithme  de validation du formulaire
function validate() {

  //Selection des éléments du DOM
  let firstName = document.forms["reserve"]["first"];
  let lastName = document.forms["reserve"]["last"];
  let eMail = document.forms["reserve"]["email"];
  let birthDate = document.forms["reserve"]["birthdate"];
  let quantity = document.forms["reserve"]["quantity"];
  let check = document.forms["reserve"]["checkbox1"];

  //Récupération de l'entré tapé au clavier
  let nbFirstName = firstName.value.trim(); //trim: permet de supprimer les espaces vides tapés
  let nbLasttName = lastName.value.trim();

  //Compteur inversé de champs non validé du formulaire
  let notValidate = 6;

  if (nbFirstName.length < 2) {
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formData[0].setAttribute("data-error-visible", "true");
  }
  else {
    notValidate--;
    formData[0].setAttribute("data-error-visible", "false");
  }

  if (nbLasttName.length < 2) {
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formData[1].setAttribute("data-error-visible", "true");
  }
  else {
    notValidate--;
    formData[1].setAttribute("data-error-visible", "false");
  }

  if (eMail.value == "") {
    formData[2].setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
    formData[2].setAttribute("data-error-visible", "true");
    valeur = false;
  }
  else {
    let mail = eMail.value;
    let regexp = /[a-zA-Z]@[a-zA-Z]+\.[a-z]{2,}$/gi;

    if (!mail.match(regexp)) {
      formData[2].setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
      formData[2].setAttribute("data-error-visible", "true");
    }
    else {
      notValidate--;
      formData[2].setAttribute("data-error-visible", "false");
    }
  }

  if (birthDate.value == "") {

    formData[3].setAttribute("data-error", "Veuillez entrer une date de naissance valide.");
    formData[3].setAttribute("data-error-visible", "true");
  }
  else {
    notValidate--;
    formData[3].setAttribute("data-error-visible", "false");
    valeur = true;
  }

  if (quantity.value == "" || isNaN(quantity.value) ||quantity.value < 0) {
    formData[4].setAttribute("data-error", "Veuillez entrer un nombre.");
    formData[4].setAttribute("data-error-visible", "true");
  }
  else {
    notValidate--;
    formData[4].setAttribute("data-error-visible", "false");
  }

  if (check.checked == false) {
    formData[6].setAttribute("data-error", "Vous devez acceptez les conditions d'utilisation.");
    formData[6].setAttribute("data-error-visible", "true");
    valeur = false;
  }
  else {
    notValidate--;
    formData[6].setAttribute("data-error-visible", "false");
  }

  if (notValidate == 0) {
    closeModal(modalbg);
    modalValide.style.display = "block";
  }

}
//CREATIONS DES FONCTIONS-----------------------------------------------

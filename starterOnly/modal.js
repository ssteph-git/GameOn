// var element = element.getElementsByClassName('icon');

const icon = document.getElementById('icon');
icon.addEventListener('click',editNav);
// icon.addEventListener('click',editNav);

const icon2 = document.getElementById('icon2');
icon2.addEventListener('click',editNav2);

const icon3 = document.getElementById('icon3');
icon3.addEventListener('click',editNav3);

// const icon2 = document.getElementsByClassName('icon');
// console.log(icon2);
// icon2[0].addEventListener("click", editNav('myTopnav'));
// icon2[1].addEventListener("click", editNav('myTopnav2'));


// const iconModal = document.getElementsByClassName('iconModal');
// iconModal[0].addEventListener("click", editNav('myTopnav2'));

// console.log(iconModal);


function editNav() {
  console.log('editNav!!');
  console.log();
  let x = document.getElementById('myTopnav');
  if (x.className == "topnav") {
    x.className += " responsive";
    console.log(x.className);
  } else {
    x.className = "topnav";
  }
}

function editNav2() {
  console.log('editNav!!');
  console.log();
  let x = document.getElementById('myTopnav2');
  if (x.className == "topnav") {
    x.className += " responsive";
    console.log(x.className);
  } else {
    x.className = "topnav";
  }
}

function editNav3() {
  console.log('editNav!!');
  console.log();
  let x = document.getElementById('myTopnav3');
  if (x.className == "topnav") {
    x.className += " responsive";
    console.log(x.className);
  } else {
    x.className = "topnav";
  }
}

// function editNav(e) {
//   console.log('editNav!!');
//   console.log(e);
//   let x = document.getElementById(e);
//   if (x.className == "topnav") {
//     x.className += " responsive";
//     console.log(x.className);
//   } else {
//     x.className = "topnav";
//   }
// }

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtClose = document.querySelector(".close");//Sélection du bouton de fermeture du formulaire
const modalBtCloseValide = document.querySelector(".valide");//Sélection du bouton de fermeture du formulaire

const formData = document.querySelectorAll(".formData");

const modalValide = document.querySelector(".bground-Valide");//Sélection du bouton de fermeture du formulaire

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtClose.addEventListener('click', closeModal);//appel de la fonction closeModal, si on clic sur le bouton de fermeture
modalBtCloseValide.addEventListener('click', closeValideModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}

function closeModal() {

  modalbg.style.display = "none"; //changement de la propriété display bloc en display none: pour supprimer le formulaire du Dom

}

function closeValideModal() {

  modalValide.style.display = "none"; //changement de la propriété display bloc en display none: pour supprimer le formulaire du Dom
  
}

function validate(e) {
// e.preventDefault();
// e.stopPropagation();
  let firstName = document.forms["reserve"]["first"]; //Récupération de l'entré tapé au clavier
  let lastName = document.forms["reserve"]["last"];
  let eMail = document.forms["reserve"]["email"];
  let birthDate = document.forms["reserve"]["birthdate"];
  let quantity = document.forms["reserve"]["quantity"];
  let check = document.forms["reserve"]["checkbox1"];
  let valeur;//valeur du champ tapé dans le formulaire: valide ou non: retourné à la fonction 

  let nbFirstName = firstName.value; 
  let nbLasttName = lastName.value; 

let notValidate = 6;

  if (nbFirstName.length < 2) {

    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formData[0].setAttribute("data-error-visible", "true");
    valeur = false;

  }
  else {

    notValidate--;
    formData[0].setAttribute("data-error-visible", "false");
    valeur = true;

  }

  if (nbLasttName.length < 2) {

    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formData[1].setAttribute("data-error-visible", "true");
    valeur = false;
  }
  else {
    notValidate--;
    formData[1].setAttribute("data-error-visible", "false");
    valeur = true;

  }

    if (eMail.value == "") {

    formData[2].setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
    formData[2].setAttribute("data-error-visible", "true");
    valeur = false;
  }
  else {
    let mail = eMail.value;
    let regexp = /[a-zA-Z]@[a-zA-Z]+\.[a-z]{2,4}$/gi;

    if(!mail.match(regexp))
    {
      formData[2].setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
      formData[2].setAttribute("data-error-visible", "true");
      valeur = false;
    }
    else{
      notValidate--;
    formData[2].setAttribute("data-error-visible", "false");
    valeur = true;
    }

  }

  if (birthDate.value == "" ) {

    formData[3].setAttribute("data-error", "Veuillez entrer une date de naissance valide.");
    formData[3].setAttribute("data-error-visible", "true");
    valeur = false;
  }
  else {

    // let birth = birthDate.value;
    // let regexp = /[0-9]|[1-31]{2}\/[0-9]{2}\/[0-9]{4}$/gi;

    // if(!birth.match(regexp))
    // {
    //   formData[2].setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
    //   formData[2].setAttribute("data-error-visible", "true");
    //   valeur = false;
    // }
    // else{
    // formData[2].setAttribute("data-error-visible", "false");
    // valeur = true;
    // }
    notValidate--;
    formData[3].setAttribute("data-error-visible", "false");
    valeur = true;

  }

  if (quantity.value == "" || isNaN(quantity.value)) {

    formData[4].setAttribute("data-error", "Veuillez entrer un nombre.");
    formData[4].setAttribute("data-error-visible", "true");
    valeur = false;
  }
  else {
    notValidate--;
    formData[4].setAttribute("data-error-visible", "false");
    valeur = true;

  }


  if (check.checked == false ) {

    formData[6].setAttribute("data-error", "Vous devez acceptez les conditions d'utilisation.");
    formData[6].setAttribute("data-error-visible", "true");
    valeur = false;

  }
  else {
    notValidate--;
    formData[6].setAttribute("data-error-visible", "false");

  }

if(notValidate==0){
  alert('Parfait');
  // submit.addEventListener('close',submit());
  closeModal();
  modalValide.style.display = "block";
  //modalBtClose.addEventListener('click', closeModal);//appel de la fonction closeModal, si on clic sur le bouton de fermeture
}
  // return false;
  return valeur;
}

// const formulaire = document.getElementById('reserve');
const submit = document.getElementById('submit');
console.log(submit);
submit.addEventListener('click',validate);



// submit.style.display="none";
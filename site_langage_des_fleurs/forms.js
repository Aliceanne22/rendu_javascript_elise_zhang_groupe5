let formulaire = document.querySelector("form")
let emailField = document.querySelector("#email")
let pseudo = document.querySelector('#pseudo')
let password = document.querySelector('#password')
let password2 = document.querySelector('#password2')
let messageError = document.querySelector('.message-error')
let messageErrorPseudo = document.querySelector('.message-error-pseudo')
let messageErrorEmail = document.querySelector('.message-error-email')
let messageErrorMdp = document.querySelector('.message-error-mdp')
let messageErrorMdp2 = document.querySelector('.message-error-mdp2')
let messageSuccess = document.querySelector('.message-success')


formulaire.addEventListener('submit', function(event) {
    event.preventDefault() 


    
    if (pseudo.value.length < 6) { 
        pseudo.classList.remove("success")
        pseudo.classList.add("error") // error
        // console.log("pseudo invalide")
        messageError.classList.remove("message-disappear") // enlève la classe qui n'affiche pas le message d'erreur
        messageErrorPseudo.classList.remove("message-disappear")
    } else {
        pseudo.classList.remove("error")
        pseudo.classList.add("success") // success
        // console.log("pseudo success")
        messageError.classList.add("message-disappear") // ajoute la classe qui n'affiche pas le message d'erreur
        messageErrorPseudo.classList.add("message-disappear")
    }



    if (emailField.value.trim() === "") { 
        emailField.classList.remove("success")
        emailField.classList.add("error") // error
        // console.log("email invalide")
        messageError.classList.remove("message-disappear")
        messageErrorEmail.classList.remove("message-disappear")
    } else {
        emailField.classList.remove("error")
        emailField.classList.add("success") // success
        // console.log("email success")
        messageError.classList.add("message-disappear")
        messageErrorEmail.classList.add("message-disappear")
    }


    
    if (password.value.length < 8) { 
        password.classList.remove("success")
        password.classList.add("error") // error
        // console.log("password invalide")
        messageError.classList.remove("message-disappear")
        messageErrorMdp.classList.remove("message-disappear")
    } else {
        password.classList.remove("error")
        password.classList.add("success") // success
        // console.log("password invalide")
        messageError.classList.add("message-disappear")
        messageErrorMdp.classList.add("message-disappear")
    }
        


    if (password2.value === password.value) { 
        if (password2.value.length < 8) { 
            password2.classList.remove("success")
            password2.classList.add("error") // error
            // console.log("password2 invalide")
            messageError.classList.remove("message-disappear")
            messageErrorMdp2.classList.remove("message-disappear")
        } else {
            password2.classList.remove("error")
            password2.classList.add("success") // success
            // console.log("password2 success")
            messageError.classList.add("message-disappear")
            messageErrorMdp2.classList.add("message-disappear")
        }
    } else {
        password2.classList.remove("success")
        password2.classList.add("error") // error
        // console.log("password2 invalide")
        messageError.classList.remove("message-disappear")
        messageErrorMdp2.classList.remove("message-disappear")
    }
 
    if (
        messageErrorPseudo.classList.contains("message-disappear") &&
        messageErrorEmail.classList.contains("message-disappear") &&
        messageErrorMdp.classList.contains("message-disappear") &&
        messageErrorMdp2.classList.contains("message-disappear")
    ) {
        // Si tous les messages d'erreus ne sont pas affichés grâce à la classe message-disappear, montre le message de succès
        messageSuccess.classList.remove("message-disappear");
    } else {
        // Sinon, le message de succès n'apparait pas
        messageSuccess.classList.add("message-disappear");
    }
})



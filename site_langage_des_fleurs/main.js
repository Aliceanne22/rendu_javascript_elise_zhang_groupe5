// Récupération des code HTML
let buttonColorChange = document.getElementById('buttonColorChange')
let bodyChangeMode = document.getElementById('body')
let buttonColorChangeImage = document.getElementById('buttonColorChange-tree')
let slogan = document.getElementById('slogan')
let logo = document.getElementById('logo')
let bandeau = document.getElementById('bandeau')
let barreDeNavigation = document.querySelector(".barre_de_navigation")
let nav = document.querySelector(".nav")
let navigationBouton2 = document.querySelector(".navigation_bouton2")



buttonColorChange.addEventListener('click', function() {
    bodyChangeMode.classList.toggle('bodyChange') // Si l'élément contient la classe bodyChange, il retire, sinon il l'ajoute
    if (buttonColorChangeImage.src.includes("images/tree.png")) { // Si on clique sur le bouton lorsqu'il est un arbre
        buttonColorChangeImage.src = "images/sakura.png"

        buttonColorChangeImage.classList.remove('buttonColorChange-tree')
        buttonColorChangeImage.classList.add('buttonColorChange-sakura')

        slogan.src = "images/slogan_sakura.png"
        logo.src = "images/logo_lushine_sakura.png"

        bandeau.classList.add('bandeau-sakura')
        barreDeNavigation.classList.add('barre_de_navigation-sakura')
        nav.classList.add('nav-sakura')
        navigationBouton2.classList.add('navigation_bouton2-sakura')
    } else { // Si on clique sur le bouton lorsqu'il est un sakura
        buttonColorChangeImage.src = "images/tree.png"

        buttonColorChangeImage.classList.add('buttonColorChange-tree')
        buttonColorChangeImage.classList.remove('buttonColorChange-sakura')

        slogan.src = "images/slogan_tree.png"
        logo.src = "images/logo_lushine_tree.png"

        bandeau.classList.remove('bandeau-sakura')
        barreDeNavigation.classList.remove('barre_de_navigation-sakura')
        nav.classList.remove('nav-sakura')
        navigationBouton2.classList.remove('navigation_bouton2-sakura')
    }
    
})




// Tab Rose

let tousLesTabsRose = document.querySelectorAll(".tabRose")
let tousLesContenusRose = document.querySelectorAll(".contenuRose")


tousLesTabsRose.forEach(function(tabRose) { 
    tabRose.addEventListener("click", function() {
        // On désactive tous les tabs
        tousLesTabsRose.forEach(function(tab) { 
            tab.classList.remove("tabRose-active") 
        })
        // On désactive tous les contenus
        tousLesContenusRose.forEach((contenuRose) => { 
            contenuRose.classList.remove("contenuRose-active") 
        })
        // On active le tab active
        this.classList.add("tabRose-active") 
        
        // On active le contenu active
        if (this.classList.contains('tabLegendeRose')) {
            let contenuLegendeRose = document.querySelector(".contenuLegendeRose")
            contenuLegendeRose.classList.add("contenuRose-active") 
        }
        
        if (this.classList.contains('tabHistoireRose')) {
            let contenuHistoireRose = document.querySelector(".contenuHistoireRose") 
            contenuHistoireRose.classList.add("contenuRose-active") 
        }
        
        if (this.classList.contains('tabSignificationRose')) {
            let contenuSignificationRose = document.querySelector(".contenuSignificationRose")  
            contenuSignificationRose.classList.add("contenuRose-active") 
        }
    })
})




// Tab Tournesol

let tousLesTabsTournesol = document.querySelectorAll(".tabTournesol") 
let tousLesContenusTournesol = document.querySelectorAll(".contenuTournesol") 


tousLesTabsTournesol.forEach(function(tabTournesol) { 
    tabTournesol.addEventListener("click", function() {
        tousLesTabsTournesol.forEach(function(tab) { 
            tab.classList.remove("tabTournesol-active") 
        })
        tousLesContenusTournesol.forEach((contenuTournesol) => { 
            contenuTournesol.classList.remove("contenuTournesol-active") 
        })
        this.classList.add("tabTournesol-active") 
        if (this.classList.contains('tabHistoireTournesol')) {
            let contenuHistoireTournesol = document.querySelector(".contenuHistoireTournesol") 
            contenuHistoireTournesol.classList.add("contenuTournesol-active") 
        }

        if (this.classList.contains('tabSignificationTournesol')) {
            let contenuSignificationTournesol = document.querySelector(".contenuSignificationTournesol") 
            contenuSignificationTournesol.classList.add("contenuTournesol-active")
        }
    })
})




// Tab Pivoine

let tousLesTabsPivoine = document.querySelectorAll(".tabPivoine") 
let tousLesContenusPivoine = document.querySelectorAll(".contenuPivoine") 


tousLesTabsPivoine.forEach(function(tabPivoine) { 
    tabPivoine.addEventListener("click", function() {
        tousLesTabsPivoine.forEach(function(tab) { 
            tab.classList.remove("tabPivoine-active") 
        })
        tousLesContenusPivoine.forEach((contenuPivoine) => { 
            contenuPivoine.classList.remove("contenuPivoine-active") 
        })
        if (this.classList.contains('tabLegendePivoine')) {
            let contenuLegendePivoine = document.querySelector(".contenuLegendePivoine")
            contenuLegendePivoine.classList.add("contenuPivoine-active") 
        }
        this.classList.add("tabPivoine-active") 
        if (this.classList.contains('tabHistoirePivoine')) {
            let contenuHistoirePivoine = document.querySelector(".contenuHistoirePivoine") 
            contenuHistoirePivoine.classList.add("contenuPivoine-active") 
        }

        if (this.classList.contains('tabSignificationPivoine')) {
            let contenuSignificationPivoine = document.querySelector(".contenuSignificationPivoine") 
            contenuSignificationPivoine.classList.add("contenuPivoine-active")
        }
    })
})


// Simulateur de combat

class Personnage {
    constructor(name, health, attack) {
        this.name = name
        this.health = health
        this.attack = attack
        this.precision = 0
    }   

    hitOrNot() { 
        // renvoie true si le personnage touche son attaque, false sinon
        this.precision = Math.random()
        if (this.precision >= 0.5) { 
            return true
        } else {
            return false
        }
    }

    calculateAttack(otherPlayer) { 
        // retourne une attaque du personnage s'il ne rate pas, et ne retourne pas d'attaque s'il rate
        if (this.hitOrNot() === true) {
            console.log(this.name, "a infligé", this.attack, "de dégâts!")
            console.log(otherPlayer.name, "a", otherPlayer.health-this.attack, "PV restants!")
            return this.attack
        } else {
            console.log("L'attaque de", this.name, "a raté!")
            return 0
        }
    }
}



let joueur1 = new Personnage(prompt("Nom du premier personnage : "), prompt("Vie du premier personnage : "), prompt("Attaque du premier personnage : "))
let joueur2 = new Personnage(prompt("Nom du second personnage : "), prompt("Vie du second personnage : "), prompt("Attaque du second personnage : "))




function combat() {
    if (joueur1.health <= 0 || joueur2.health <= 0) {
        // Termine le jeu si un joueur n'a plus de vie
        console.log(joueur1.health <= 0 ? joueur2.name + " a gagné!" : joueur1.name + " a gagné!");
        return;
    }

    let commencer = Math.random(); // Décide au hasard qui attaque en premier
    if (commencer < 0.5) { // Si joueur1 commence
        joueur2.health -= joueur1.calculateAttack(joueur2);
    } else { // Si joueur2 commence
        joueur1.health -= joueur2.calculateAttack(joueur1);
    }

    // Attend 1 seconde avant la prochaine attaque
    setTimeout(combat, 1000);  // Appelle la fonction combat() de manière récursive après 1 seconde
}

// Commence le jeu
combat();
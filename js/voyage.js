// -- Id utilisé pour gérer la valeur en km/h -- // 

const rangeSlider = document.getElementById("myRange");
const output = document.getElementById("value");

// -- Id utilisé pour gérer l'élément qui sera choisit en fonction de la valeur en km/h choisit dans le tableau -- //

const homme = document.getElementById("homme");
const cheval = document.getElementById("cheval");
const voiture = document.getElementById("voiture");
const avion_jet = document.getElementById("avion_jet");
const avion_ligne = document.getElementById("avion_ligne");
const fusee = document.getElementById("fusee");

// -- Id utilisé pour l'élément choisit dans le contenue de la page web -- / 

const objet = document.getElementById('objet');
const objet_choisit = document.getElementById('objet_choisit');

// Id utilisé pour gérer le temps de voyage par rapport au transport choisit -- / 

const temps = document.getElementById('temps_voyage');

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Ajout de la valeur dans notre page web -- / 

output.innerHTML = rangeSlider.value;

// -- Déclaration de nos variables pour utilisation ci-dessous -- /

let myInteger;
let string_convert;
let distance_terre_moon = 384400;
let calcul_heures;
let time = " heures";
let calcul_milisecondes;

// -- Variables utilisés pour notre function timeToDate -- /

let heures;
let heures_total;
let heures_final;

let minutes;
let minutes_total;
let minutes_finale;

let secondes; 
let secondes_total;
let secondes_final;

// -- Tableau contenant  les différents moyens de transports -- //

const tab_transports = [
    { 
        nom: "Homme à pied",
        value: 10,
        transport: homme,
        couleur:"red"
    },
    { 
        nom: "Cheval pur-sang",
        value: 65,
        transport:cheval,
        couleur:"red"
    },
    { 
        nom: "Voiture Ferrari",
        value: 325,
        transport:voiture,
        couleur:"red"
    },
    { 
        nom: "Avion jet",
        value: 740 ,
        transport:avion_jet,
        couleur:"red"
    },
    {
        nom: "Avion de ligne A380",
        value: 1185,
        transport:avion_ligne,
        couleur:"red"
    },
    { 
        nom: "Fusée Apollo 11",
        value: 5500,
        transport:fusee,
        couleur:"red"
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////

function timeToDate(millisecondes) {

    // -- Transformer les heures en millisecondes -- /

    let heures = millisecondes / (1000 * 60 * 60);
    let heures_total = Math.floor(heures);
    let heures_final = heures_total > 9 ? heures_total : '0' + heures_total;

    // -- Récupère le reste des nos heures et transforme en minute -- /

    let minutes = (heures - heures_total) * 60;
    let minutes_total = Math.floor(minutes);
    let minutes_finale = minutes_total > 9 ? minutes_total : '0' + minutes_total;

    // -- Récupère le reste des minutes et le transforme en secondes -- /

    let secondes = (minutes - minutes_total) * 60;
    let secondes_total = Math.floor(secondes);
    let secondes_final = secondes_total > 9 ? secondes_total : '0' + secondes_total;

    return heures_final + 'h ' + minutes_finale + 'min ' + secondes_final + 'sec';
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Fonction pour l'affichage en temps réel -- / 

rangeSlider.oninput = function() {

    myInteger = output.innerHTML;

    output.innerHTML = this.value;

    // -- Boucle pour gérer l'affichage en temps réel du transport adéquat -- //

    for(let l = 0; l<tab_transports.length-1; l ++){

        if(Math.abs(tab_transports[l].value - myInteger) < Math.abs(tab_transports[l+1].value - myInteger)){
            objet_choisit.innerHTML = tab_transports[l].nom;
            break;
        }else{
            objet_choisit.innerHTML = tab_transports[5].nom;
        }

        // -- Calcul de la valeur en km/h en millisecondes -- //

        calcul_heures = ((distance_terre_moon) / (output.innerHTML)); 
        calcul_milisecondes = ((calcul_heures) * (1000 * 60 * 60));

        temps_voyage.innerHTML = timeToDate(calcul_milisecondes);

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

}
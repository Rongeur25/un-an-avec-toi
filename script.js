// ===== COMPTEUR DE JOURS =====
function mettreAJourJours() {
    const debut = new Date('2026-07-05'); // ← METS TA DATE D'ANNIVERSAIRE ICI
    const maintenant = new Date();
    const diff = Math.floor((maintenant - debut) / (1000 * 60 * 60 * 24));
    document.getElementById('jours').textContent = diff + 1;
}
mettreAJourJours();

// ===== DATE DU JOUR =====
const now = new Date();
document.getElementById('dateJour').textContent = now.toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
});

// ===== CONTENU DES CARTES =====
const contenu = {

    commencement: {
        titre: "Le commencement",
        sousParties: [
            { titre: "Groupe de kholle", texte: "Plus j'y repense, plus je me dis que c'est fou que tout démarre par ça. Parce que mine de rien, sans ce fameux groupe de kholle, on aurait passé bien moins de temps ensemble...et on n'en serait peut-être pas là. Pour être honnête, il est arrivé un moment dans l'année où je m'inquiétais plus de ta prestation en kholle que de la mienne. Sans même m'en rendre compte, j'étais tombé amoureux de toi ? Évidemment, les kholles ne font pas tout. Ce que je trouve marrant, c'est qu'au fond, la seule chose qu'on ne faisait pas ensemble, c'était manger. Les matins, on se retrouvait, et après les cours on rentrait ensemble. Enfin, ensemble non...mais j'ai vite eu d'yeux que pour toi <3. Mêmes les soirs, on parlait beaucoup. Surtout des cours, certes, mais quand même ! T'étais la seule à qui je parlais autant." },
            { titre: "Les détails", texte: "Tu l'auras remarqué, j'accorde une certaine importance aux détails. Au point où je note qu'au bout d'une semaine, alors qu'il faisait chaud (début Septembre tu connais), il y a une petite brune toujours en t-shirt noir au milieu des autres filles en crop-top. Elle m'avait l'air sympathique, je la voyais discuter avec ses amies, toujours avec un grand sourire. Et puis il a fallu rejoindre un groupe de kholle, et on a commencé à rentrer ensemble...et son sourire était génial. Un joli sourire, et un style vestimentaire qui change, qui lui va bien. Puis au fil du temps, j'ai découvert à quel point elle était gentille. Elle a cette façon de parler, de faire les choses, que je trouve mignonne. L'hiver vient, ça nous arrive de rentrer ensemble après une kholle tardive. Ils me font du bien ces moments, on a beau être au milieu du RER, l'écouter parler, ça me détend. Et puis son sourire, ses yeux, ses fossettes...elle est belle. Quand elle est stressée, elle se frotte les mains ou se gratte les bras, parfois jusqu'à se faire mal. J'aime pas ça, alors je la regarde encore plus, je veux veiller sur elle." },
            { titre: "Des prises de tête qui valent le coup", texte: "Mars, je me creuse la tête pour mes études. Je me suis attaché à toi, tu me fais du bien. Mai, je sais où faire mes études. J'ai tout le temps pour penser à toi ; je pense à toi, tout le temps. Je me demande comment faire pour continuer à te voir sans éveiller les soupçons. On passe une après-midi au parc de Nogent. Assis, j'ai les bras autour de toi ; debouts, on se tient la main. Plus tard, tu me demandes ce que ça veut dire, s'il y a quelque chose entre nous. J'ai peur de te faire du mal, je veux pas me lancer. Malgré tout, on se rapproche. On se tient la main, même devant les autres. On se cherche du regard, on passe plus de temps ensemble entre les cours. Un jour, alors qu'on rentre en début d'après-midi, je te fais une blague pas très drôle...la blague du panneau. Tu le prends pas très bien, je m'en veux, j'ai envie de te prendre dans mes bras, mais je ne peux pas. Alors je rigole, bêtement, et m'excuse, tout aussi bête. L'année est finie, tu me manques. Je tombe sur l'affiche d'un film, une adaptation de Stephen King. Je sais que tu aimes cet auteur, alors je t'invite à aller le voir. On se tient la main tout le long du trajet, tu passes la séance collée à moi, quitte à te faire mal au dos. Sur le chemin du retour, tu m'offres un petit calepin, 'un an en prépa'. Je le range avec un joli dessin requin marteau, fais par tes soins, dans la coque de mon téléphone. Tu pleures, trouvant ça adorable. Et moi, je réalise que je te veux, pour la vie. Quelques heures plus tard, on sortait officiellement en semble." }
        ]
    },

    zoo: {
        titre: "Le zoo",
        texte: "Notre première sortie en couple. <br>J'ai passé la journée collé à toi, les mains sur ta taille quand on était statique, main dans la main en marchant, tout en te faisant des petits bisous dès que j'en avais l'occasion. Pour ma défense, on ne s'était pas vu depuis un moment avec nos vacances respectives... <br>À midi, pendant le repas, je t'ai raconté tout ce qu'il s'était passé avec Audrey. J'avais tellement peur que tu ne veuilles plus de moi à cause de ça. Dieu merci, ce n'est pas arrivé ! <br>À la fin du repas, tu m'as offert un bouquet de fleurs en crochet (que j'ai toujours sur mon bureau d'ailleurs), et après on s'est pris dans les bras (supplément bisous bien sûr). <br>On a ensuite continué la visite, jusqu'à atteindre l'enclos des girafes. Ce moment, c'était vraiment LE moment calme, il n'y avait personne autour. <br>On s'est mesuré avec les machins pour enfant, puis on s'est embrassé. Pour la première fois. <br>Bon, avec du recul, c'était plus un bisous sur les lèvres qu'un gros bon roulage de pelle...mais ça a l'honneur d'être notifié quand même. <br>T'as passé la journée à t'émerveiller devant les animaux...et j'ai passé la journée à m'émerveiller devant toi. <br>Ton sourire est la plus belle chose que j'ai vu ce jour là, malgré tous les beaux animaux.",
        detail: "Tu te souviens qu'on faisait semblant qu'il y avait un lion, ou un tigre, ou que sais-je, derrière nous ? C'était rigolo. RWAR !"
    },

    rer1: {
        titre: "Le RER",
        texte: "C'est important qu'on en parle, car ça a été le lieu de nos retrouvailles la plupart du temps. <br>Souvent, le plus souvent possible, je venais te rejoindre pour qu'on rentre ensemble. <br>Tu me racontais ta journée, parfois avec plein d'entrain parce qu'elle fut bonne, parfois avec une petite voix car elle était mauvaise. <br>De temps en temps en pleurs, ou presque, quand tu n'étais pas fière de toi. <br>Mais aussi toute contente, avec une folle envie de me faire des bisous...qu'il faut contenir par respect des autres. <br>Il y a eu les moments de stress aussi, qui couplés à la fatigue te font galérer à trouver tes mots. <br>Quelque soit ton état, j'essayais d'être là pour toi du mieux possible. <br>T'écouter, toujours. Trouver les mots juste, si possible. <br>Sans oublier, bien sûr, de te prendre contre moi et de te couvrir de bisous.",
        detail: "Je ne suis pas certain d'être très doué pour trouver les mots juste, mais je fais de mon mieux. <br>J'espère que ça ira, je t'aime."
    },

    anniversaire: {
        titre: "Ton anniversaire",
        texte: "— À MODIFIER —",
        detail: "— À MODIFIER —"
    },

    rer2: {
        titre: "Le RER — bis",
        texte: "— À MODIFIER —",
        detail: "— À MODIFIER —"
    },

    "chez-toi": {
        titre: "Chez toi",
        texte: "— À MODIFIER —",
        detail: "— À MODIFIER —"
    },

    jardin: {
        titre: "Le jardin des plantes",
        texte: "— À MODIFIER —",
        detail: "— À MODIFIER —"
    },

    lac: {
        titre: "Autour du lac",
        texte: "— À MODIFIER —",
        detail: "— À MODIFIER —"
    },

    suite: {
        titre: "La suite",
        texte: "L'avenir nous le dira. Mais une chose est sûre : je veux que tu sois là, à chaque page.",
        detail: "✧ Rendez-vous dans un an pour la suite ✧"
    }

};

// ===== OUVERTURE DE LA MODALE =====
const modale = document.getElementById('modale');
const modaleTexte = document.getElementById('modaleTexte');
const fermer = document.getElementById('fermerModale');

document.querySelectorAll('.carte').forEach(carte => {
    carte.addEventListener('click', function () {
        const id = this.dataset.id;
        const data = contenu[id];
        if (!data) return;

        let html = `<h2>${data.titre}</h2>`;

        if (data.sousParties) {
            data.sousParties.forEach(sp => {
                html += `
                    <div class="sous-partie">
                        <h3>${sp.titre}</h3>
                        <p>${sp.texte}</p>
                    </div>
                `;
            });
        } else {
            html += `<p>${data.texte}</p>`;
            if (data.detail) {
                html += `<p class="detail-sensoriel">◈ ${data.detail}</p>`;
            }
        }

        modaleTexte.innerHTML = html;
        modale.classList.add('ouverte');
        document.body.style.overflow = 'hidden';
    });
});

// ===== FERMETURE DE LA MODALE =====
function fermerModale() {
    modale.classList.remove('ouverte');
    document.body.style.overflow = 'auto';
}

fermer.addEventListener('click', fermerModale);
modale.addEventListener('click', function (e) {
    if (e.target === this) fermerModale();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fermerModale();
});

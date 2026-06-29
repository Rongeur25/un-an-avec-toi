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
            { titre: "Les détails", texte: "Tu l'auras remarqué, j'accorde une certaine importance aux détails. Au point où je note qu'au bout d'une semaine, alors qu'il faisait chaud (début Septembre tu connais), il y a une petite brune toujours en t-shirt noir au milieu des autres filles en crop-top. Elle m'avait l'air sympathique, je la voyais discuter avec ses amies, toujours avec un grand sourire. Et puis il a fallu rejoindre un groupe de kholle, et on a commencé à rentrer ensemble...et son sourire était génial. Un joli sourire, et un style vestimentaire qui change, qui lui va bien. Puis au fil du temps, j'ai découvert à quel point elle était gentille. L'hiver vient, ça nous arrive de rentrer ensemble après une kholle tardive. Ils me font du bien ces moments, on a beau être au milieu du RER, l'écouter parler, ça me détend. Et puis son sourire, ses yeux, ses fossettes...elle est mignonne. " },
            { titre: "Pourquoi toi", texte: "— À MODIFIER —" }
        ]
    },

    zoo: {
        titre: "Le zoo",
        texte: "— À MODIFIER —",
        detail: "— À MODIFIER (ex: il faisait beau, tu souriais...)"
    },

    rer1: {
        titre: "Le RER",
        texte: "— À MODIFIER —",
        detail: "— À MODIFIER —"
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

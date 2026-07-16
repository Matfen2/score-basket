# 🏀 Score Basket

Une application de score de basketball interactive réalisée en HTML, CSS et JavaScript pur, déployée sur Netlify.

🔗 **Démo live** : [matfen-score-basket.netlify.app](https://matfen-score-basket.netlify.app)

---

## Aperçu

Tableau de score avec deux équipes (Home / Guest), boutons d'ajout de points (+1, +2, +3), animation au clic et remise à zéro.

---

## Stack

- HTML5
- CSS3 (Flexbox, animations `@keyframes`, media queries)
- JavaScript (manipulation du DOM)
- [Netlify](https://netlify.com/) - hébergement statique

---

## Fonctionnalités

- ✅ Ajout de +1, +2 et +3 points par équipe (valeurs réelles du basket)
- ✅ Animation `pop` sur le score à chaque point ajouté
- ✅ Remise à zéro des deux scores
- ✅ Boutons accessibles (`<button>` au lieu de `<li>`)
- ✅ Design sombre avec accent orange basketball
- ✅ Responsive mobile (media query 480px)

---

## Structure

```
score-basket/
├── index.html
├── index.js
└── styles.css
```

---

## Lancer le projet

Aucune dépendance, aucun build. Ouvre simplement `index.html` dans un navigateur.

```bash
git clone https://github.com/Matfen2/score-basket.git
cd score-basket
# Ouvrir index.html dans le navigateur
```

---

## Ce que j'ai appris

- Principe DRY : remplacer 6 fonctions répétitives par une seule fonction générique avec paramètres
- Passer des arguments directement depuis le HTML via `onclick="addPoint(home, 2)"`
- Préférer `<button>` à `<li>` pour les éléments cliquables (accessibilité et sémantique)
- Ne jamais mettre de `.` dans `classList.add()` / `classList.remove()` (contrairement à `querySelector`)
- Utiliser `void element.offsetWidth` pour forcer le reflow et relancer une animation CSS
- Corriger les valeurs métier : au basket les paniers valent 1, 2 ou 3 points

---

## Auteur

**Mathieu FENOUIL** - Développeur Full-Stack  
[GitHub](https://github.com/Matfen2) · [LinkedIn](https://www.linkedin.com/in/mathieu-fenouil-développeur-full-stack/)
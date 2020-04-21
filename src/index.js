const utilisateurs = [
  { prenom: 'Étienne', age: 42, sexe: 'H' },
  { prenom: 'Xan', age: 21, sexe: 'F' },
  { prenom: 'Fred', age: 32, sexe: 'H' },
  { prenom: 'Michel', age: 51, sexe: 'H' },
  { prenom: 'Fred', age: 44, sexe: 'F' },
  { prenom: 'Marie', age: 32, sexe: 'F' },
  { prenom: 'Mehdi', age: 19, sexe: 'H' },
  { prenom: 'Marc', age: 33, sexe: 'H' },
  { prenom: 'Louise', age: 28, sexe: 'F' },
  { prenom: 'Sandrine', age: 28, sexe: 'F' },
  { prenom: 'James', age: 26, sexe: 'H' },
  { prenom: 'Irina', age: 66, sexe: 'F' },
];

const nameUser = prompt("comment t'appelles tu ?");
document.getElementById('liste').innerHTML = `Salut ${nameUser} !`;
const userSexe = prompt('F ou H ?');
const ageUser = parseInt(prompt('quel age as tu ?'));
const ageChoice = prompt("Quel tolérance d'âge ? Choisis entre cinq et dix");

if (ageChoice === 'cinq') {
  ageFive();
} else if (ageChoice === 'dix') {
  ageTen();
} else {
  console.log('five or ten ?');
}
// function five
function ageFive() {
  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].sexe !== userSexe) {
      if (utilisateurs[i].age >= ageUser - 5 && utilisateurs[i].age <= ageUser + 5) {
        const node = document.createElement('li');
        const textnode = document.createTextNode(`${utilisateurs[i].prenom} ${utilisateurs[i].age} ans.`);
        node.appendChild(textnode);
        document.getElementById('myList').appendChild(node);
      }
    }
  }
}
// function ten
function ageTen() {
  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].sexe !== userSexe) {
      if (utilisateurs[i].age >= ageUser - 10 && utilisateurs[i].age <= ageUser + 10) {
        const node = document.createElement('li');
        const textnode = document.createTextNode(`${utilisateurs[i].prenom} ${utilisateurs[i].age} ans.`);
        node.appendChild(textnode);
        document.getElementById('myList').appendChild(node);
      }
    }
  }
}

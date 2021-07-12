/* === Exo4 ===
 *
 * Copier/coller les fonctions des exercices 2 et 3 puis les combiner pour :
 * - demander à l'utilisateur le rayon d'un cercle
 * - calculer l'aire du cercle correspondante
 * - afficher le résultat en console, dans une pop-up et retourner la valeur (!)
 */

function program() {
    const radius = Number(prompt('Quel est le rayon  ?:'));
    const area = diskArea(radius);
    window.alert('Aire du disque : ' + area + ' cm2');
}





function diskArea(radius) {
    if (checkRadius(radius)) {
      const area = roundToTwo(Math.PI * radius * radius);
  
      console.log("Rayon :" + radius + "  area : " + area);
  
      return area;
    }
    console.log(radius);
    return false;
  }
  
  function checkRadius(radius) {
    if (isNaN(radius)) {
      console.log("Rayon =NaN :" + radius);
      return false;
    }
    if (Number(radius) < 1) {
      console.log("Rayon <= à 0 :" + radius);
      return false;
    }
    return true;
  }
program();

/* === Exo3 ===
 *
 * Implémenter la fonction diskArea(radius) qui calcule et retourne l'air
 * d'un cercle, en fonction de son rayon.
 *
 * Si le rayon n'est pas un nombre strictement positif, retourner false.
 *
 * Le résultat est arrondi à deux chiffres après la virgule. Une fonction
 * d'arrondi est déjà disponible, roundToTwo(number) :
 *
 *   roundToTwo(3.141592) // => 3.14
 */

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

// Stop ! Tests, on ne touche pas :P
check.exo3(diskArea);

/**
 * Les tests sont les suivants : */

/* diskArea(-42.42); // => false
diskArea(0); // => false
diskArea("pas un nombre"); // => false
diskArea(43.2673); // => 5881.25
diskArea(68); // => 14526.72 */

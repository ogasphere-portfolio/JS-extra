/* === Exo1 ===
 *
 * Implémenter une fonction qui retourne un nombre aléatoire entre 0 e 10.
 * 
 * Pas la peine d'arrondir le résultat.
 * 
 * Vérifier le bon fonctionnement dans la console JS du navigateur.
 */

function random0to10() {

    const tirageAuSort =  Math.floor(Math.random() * 10);
    console.log('nb :'+tirageAuSort);
    return tirageAuSort;
}


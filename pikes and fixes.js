/* Teacher you must to press f12 for show the riddle game pikes and fixes its done
visual studio take it me wrong sometimes but i´ve solved everything

i have taken and i have used bucle while for if else
and everything its assigned like as you said

frustations time 35 times

complicated ways and give up 20 times

time solved at monday 1 pm */

// Comparamos el número ingresado con el número correcto
// here we compare the entered number with the correct one
// ici nous comparons le nombre saisi avec le bon

function comparenumber(secretnumber, typednumber) {
  let pikes = 0;
  let fixes = 0;

  for (let i = 0; i < typednumber.length; i++) {
    if (typednumber[i] === secretnumber[i]) {
      fixes++;
    } else if (secretnumber.includes(typednumber[i])) {
      pikes++;
    }
  }

  return { pikes, fixes };
}
// este es el juego principal
// this is the principal game lets start
// c'est le jeu principal

function PikesAndFixes() {
  const secretnumber = "729";
  let tryed = 0;

  // Validar el formato del número ingresado
  // Validate the format of the entered number
  // Valider le format du nombre saisi

  while (tryed < 6) {
    const typednumber = prompt("Enter a 3-digit number:");

    if (typednumber.length !== 3 || !/^\d+$/.test(typednumber)) {
      alert("¿can you enter a valid 3-digit number please?.");
      continue;
    }

    const result = comparenumber(secretnumber, typednumber);
    console.log(
      `try ${tryed + 1}: ${typednumber} - Pikes: ${result.pikes}, Fixes: ${
        result.fixes
      }`
    );

    // Mostrar los resultados de picas y fijas
    // Show the results of pikes and fixes
    // Afficher les résultats des piques et des correctifs

    if (result.fixes === 3) {
      console.log("¡Winner I knew you were ✡!");
      return;
    }

    tryed++;
  }

  console.log(`damn bro you lost the correct number was ${secretnumber}`);
}
// Inicia el juego
// Start the game
// Commencer le jeu
PikesAndFixes();

//Steven Venzel ✡

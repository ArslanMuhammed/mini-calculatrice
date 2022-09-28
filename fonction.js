// ---  Functions for calculations ---

function addition(numberA, numberB) {
  return numberA + numberB;
}

function multiplication(numberA, numberB) {
  return numberA * numberB;
}

function substraction(numberA, numberB) {
  return numberA - numberB;
}

function division(numberA, numberB) {
  if (numberB == 0) {
    throw new Error("Impossible de diviser par 0");
  }

  return numberA / numberB;
}

// --- The choice of the type of calculation ---

let restart = false;

do {
  do {
    var choice = Number(
      prompt(
        "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
      )
    );
  } while (choice != 1 && choice != 2 && choice != 3 && choice != 4);

  do {
    var firstNummber = Number(prompt("Entrez un premier nombre :"));
    var secondNumber = Number(prompt("Entrez un deuxieme nombre :"));
  } while (isNaN(firstNummber) || isNaN(secondNumber));

  // --- The choice of calculation ---

  try {
    switch (choice) {
      case 1:
        var result = addition(firstNummber, secondNumber);
        break;

      case 2:
        var result = multiplication(firstNummber, secondNumber);
        break;

      case 3:
        var result = substraction(firstNummber, secondNumber);
        break;

      case 4:
        var result = division(firstNummber, secondNumber);
        break;

      default:
        throw new error("Ooups! Une erreur est survenu");
    }
    alert("Le résultat " + result);
  } catch (error) {
    alert(error);
  }

  restart = confirm("Souhaitez-vous recommencer un calcul ?");
} while (restart);

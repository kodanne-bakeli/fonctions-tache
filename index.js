//Multiplication
function Multiplication() {
  let number1 = document.form1.number1.value;
  let number2 = document.form1.number2.value;
  result = parseFloat(number1) * parseFloat(number2)
  document.form1.result.value = result;
}

//Module
function Module() {
  let number7 = document.form2.number3.value;
  let number8 = document.form2.number4.value;
  result = parseFloat(number7) % parseFloat(number8)
  document.form2.result.value = result;
}
//Factorielle
function Factorielle() {
  let n3 = document.form3.number5.value;
  let f = 1
  let i = 1;
  while (i <= n3) {
    f *= i;
    i++;
  }
  document.form3.result.value = f;
}
//notes et moyenne
function Classe() {
  let nbnoteSup = 0;
  let eleveNote = {
    note1: parseFloat(document.form4.note1.value),
    note2: parseFloat(document.form4.note2.value),
    note3: parseFloat(document.form4.note3.value),
    note4: parseFloat(document.form4.note4.value),
    note5: parseFloat(document.form4.note5.value),
    note6: parseFloat(document.form4.note6.value),
  }
  let number1 = eleveNote.note1 + eleveNote.note2 + eleveNote.note3 + eleveNote.note4 + eleveNote.note5 + eleveNote.note6;
  let notes = Object.getOwnPropertyNames(eleveNote);
  moyenne = number1 / notes.length
  document.form4.result1.value = ` la moyenne de classe est ${moyenne}`;
  for (let i in eleveNote) {

    if (eleveNote[i] >= moyenne) {
      nbnoteSup += 1;
    }
    document.form4.result2.value = ` il ya ${nbnoteSup} note supérieur a la moyenne`
  }
}
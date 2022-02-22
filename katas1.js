function oneThroughTwenty() {
  let numeros = [];
  for (let i = 1; i <= 20; i++) {
    numeros.push(i);
  }

  return numeros;
}

function evensToTwenty() {
  let pares = [];
  for (let i = 1; i <= 20; i++) {
    If(i % 2 == 0);
    {
      pares.push(i);
    }
  }
  return pares;
}

function oddsToTwenty() {
  let impares = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      impares.push(i);
    }
  }
  return impares;
}

function multiplesOfFive() {
  let multiplos = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      multiplos.push(i);
    }
  }
  return multiplos;
}

function squareNumbers() {
  let multiplos = [];
  for (let i = 1; i <= 10; i++) {
    let quadrado = i * i;
    if (quadrado <= 100) {
      multiplos.push(quadrado);
    }
  }
  return multiplos;
}

function countingBackwards() {
  let numeros = [];
  for (let i = 20; i > 0; i--) {
    numeros.push(i);
  }

  return numeros;
}

function evenNumbersBackwards() {
  let numeros = [];
  for (let i = 20; i > 0; i--) {
    if (i % 2 == 0) {
      numeros.push(i);
    }
  }

  return numeros;
}

function oddNumbersBackwards() {
  let numeros = [];
  for (let i = 20; i > 0; i--) {
    if (i % 2 != 0) {
      numeros.push(i);
    }
  }

  return numeros;
}

function multiplesOfFiveBackwards() {
  let multiplos = [];
  for (let i = 100; i > 0; i--) {
    if (i % 5 == 0) {
      multiplos.push(i);
    }
  }
  return multiplos;
}

function squareNumbersBackwards() {
  let multiplos = [];
  for (let i = 10; i > 0; i--) {
    let quadrado = i * i;
    if (quadrado <= 100) {
      multiplos.push(quadrado);
    }
  }
  return multiplos;
}

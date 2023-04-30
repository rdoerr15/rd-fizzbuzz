function getValues() {
  let pitchValue = document.getElementById("pitchValue").value;
  let puttValue = document.getElementById("puttValue").value;
  let stopValue = document.getElementById("stopValue").value;

  let pitchNum = parseInt(pitchValue);
  let puttNum = parseInt(puttValue);
  let stopNum = parseInt(stopValue);

  if (
    Number.isInteger(pitchNum) &&
    Number.isInteger(puttNum) &&
    Number.isInteger(stopNum) &&
    stopNum > 0
  ) {
    let numberArray = generatePitchPutt(pitchNum, puttNum, stopNum);
    displayPitchPutt(numberArray);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter positive integers for the pitch, putt, and stop values",
      backdrop: false,
    });
  }
}

function generatePitchPutt(pitch, putt, stop) {
  let resultArr = [];

  for (let number = 1; number <= stop; number++) {
    if (number % pitch == 0 && number % putt == 0) {
      resultArr.push("Pitch&Putt");
    } else if (number % putt == 0) {
      resultArr.push("Putt");
    } else if (number % pitch == 0) {
      resultArr.push("Pitch");
    } else {
      resultArr.push(number);
    }
  }

  return resultArr;
}

function displayPitchPutt(numbers, pitch, putt) {
  let results = "";

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % pitch === 0 && num % putt === 0) {
      results = results + `<tr><td>${"Pitch&Putt"}</td></tr>`;
    } else if (num % pitch === 0) {
      results = results + `<tr><td>${"Pitch"}</td></tr>`;
    } else if (num % putt === 0) {
      results = results + `<tr><td>${"Putt"}</td></tr>`; //&lt;
    } else {
      results = results + `<tr><td>${num}</td></tr>`;
    }
  }

  let tableBody = document.getElementById("results");
  tableBody.innerHTML = results;
}

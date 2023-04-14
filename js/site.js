function getValues() {
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  let fizzNum = parseInt(fizzValue);
  let buzzNum = parseInt(buzzValue);

  if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)) {
    let numberArray = generateFizzBuzz(fizzNum, buzzNum);
    displayFizzBuzz(numberArray);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter valid numbers for the fizz, buzz, and stop values",
    });
  }
}

function generateFizzBuzz(start, end) {
  let basketOfNumbers = [];

  for (let number = start; number <= end; number++) {
    basketOfNumbers.push(number);
  }
  return basketOfNumbers;
}

function displayFizzBuzz(numbers) {
  let results = "";

  for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i]

      if (num % 3 === 0 && num % 5 === 0) {
        results = results + `<tr><td>${'FizzBuzz'}</td></tr>`;
      } else if (num % 3 === 0) {
        results = results + `<tr><td>${'Fizz'}</td></tr>`;
      }
        else if (num % 5 === 0) {
        results = results + `<tr><td>${'Buzz'}</td></tr>`;
      } else {
        results = results + `<tr><td>${num}</td></tr>`;
      }
    }

  let tableBody = document.getElementById("results");
  tableBody.innerHTML = results;
}

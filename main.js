const arrayNumber = document.querySelectorAll(".numbers");
const arrayOperator = document.querySelectorAll(".operator");
const arrayAns = document.querySelector(".ans");
const arrayClear = document.querySelector(".clear");

var arrayFirstNumbers = ["0"];
var Operators = "";
var arrayLastNumbers = ["0"];

addToNumber = (arrayName, key) => {
  switch (key) {
    case "1":
      arrayName.push("1");
      break;

    case "2":
      arrayName.push("2");
      break;

    case "3":
      arrayName.push("3");
      break;

    case "4":
      arrayName.push("4");
      break;

    case "5":
      arrayName.push("5");
      break;

    case "6":
      arrayName.push("6");
      break;

    case "7":
      arrayName.push("7");
      break;

    case "8":
      arrayName.push("8");
      break;

    case "9":
      arrayName.push("9");
      break;

    case "0":
      arrayName.push("0");
      break;
    case ".":
      arrayName.push(".");
      break;
    case "+":
      Operators = "+";
      removeEvent();
      break;

    case "-":
      Operators = "-";
      removeEvent();
      break;

    case "*":
      Operators = "*";
      removeEvent();
      break;

    case "/":
      Operators = "/";
      removeEvent();
      break;
  }
  console.log(arrayName);
};
responseToClick = (e) => {
  let text = e.target.innerText;
  addToNumber(arrayFirstNumbers, text);
};
responseToClick2 = (e) => {
  let text = e.target.innerText;
  addToNumber(arrayLastNumbers, text);
};
responseToKeyPress = (e) => {
  let key = e.key;
  addToNumber(arrayFirstNumbers, key);
};
responseToKeyPress2 = (e) => {
  let key = e.key;
  addToNumber(arrayLastNumbers, key);
};

removeEvent = () => {
  arrayNumber.forEach((element) => {
    element.removeEventListener("click", responseToClick);
  });

  document.removeEventListener("keypress", responseToKeyPress);
  // And Start a new event

  document.getElementById("dot").disabled = false;

  arrayNumber.forEach((element) => {
    element.addEventListener("click", responseToClick2);
  });

  document.addEventListener("keypress", responseToKeyPress2);
};
// First Event
arrayNumber.forEach((element) => {
  element.addEventListener("click", responseToClick);
});

document.addEventListener("keypress", responseToKeyPress);
// FirstEventEND
finishTheSum = () => {
  let firstPart = arrayFirstNumbers.join("", arrayFirstNumbers);
  let midPart = Operators;
  let lastPart = arrayLastNumbers.join("", arrayLastNumbers);
  let sumAllPart = firstPart + midPart + lastPart;

  var answer = eval(sumAllPart);
  alert(answer);

  arrayFirstNumbers = ["0"];
  Operators = "";
  arrayLastNumbers = ["0"];
};

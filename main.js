const arrayNumber = document.querySelectorAll(".numbers");
const arrayOperator = document.querySelectorAll(".operator");

var arrayFirstNumbers = [""];
var Operators = "";
var arrayLastNumbers = [""];
var answer;
var finalANS;
addToNumber = (arrayName, key) => {
  switch (key) {
    case "1":
      arrayName.push("1");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "2":
      arrayName.push("2");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "3":
      arrayName.push("3");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "4":
      arrayName.push("4");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "5":
      arrayName.push("5");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "6":
      arrayName.push("6");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "7":
      arrayName.push("7");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "8":
      arrayName.push("8");
      document.querySelector("#ansHTML").innerHTML = '';
      break;

    case "9":
      arrayName.push("9");
      document.querySelector("#ansHTML").innerHTML = '';
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
      runSecondEvent();
      break;

    case "-":
      Operators = "-";
      removeEvent();
      runSecondEvent();
      break;

    case "*":
      Operators = "*";
      removeEvent();
      runSecondEvent();
      break;

    case "/":
      Operators = "/";
      removeEvent();
      runSecondEvent();
      break;
    case "=":
      finishTheSum();
      break;
  }

  document.querySelector("#firstNumberHTML").innerHTML = arrayFirstNumbers.join("", arrayFirstNumbers);
  document.querySelector("#secondNumberHTML").innerHTML = arrayLastNumbers.join("", arrayLastNumbers);
  document.querySelector("#OperatorHTML").innerHTML = Operators;

  // END
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
runFirstEvent = () => {
  document.getElementById("dot").disabled = false;

  arrayNumber.forEach((element) => {
    element.addEventListener("click", responseToClick);
  });
  document.addEventListener("keypress", responseToKeyPress);
};
runSecondEvent = () => {
  document.getElementById("dot").disabled = false;

  arrayNumber.forEach((element) => {
    element.addEventListener("click", responseToClick2);
  });

  document.addEventListener("keypress", responseToKeyPress2);
};

removeEvent = () => {
  arrayNumber.forEach((element) => {
    element.removeEventListener("click", responseToClick);
  });

  document.removeEventListener("keypress", responseToKeyPress);
};
removeEvent2 = () => {
  document.getElementById("dot").disabled = false;

  arrayNumber.forEach((element) => {
    element.removeEventListener("click", responseToClick2);
  });

  document.removeEventListener("keypress", responseToKeyPress2);
};

// Hey Bruda Find me ???
runFirstEvent();
finishTheSum = () => {
  let firstPart = arrayFirstNumbers.join("", arrayFirstNumbers);
  let midPart = Operators;
  let lastPart = arrayLastNumbers.join("", arrayLastNumbers);
  let sumAllPart = firstPart + midPart + lastPart;

  console.log(sumAllPart);
  answer = eval(sumAllPart).toString();
  console.warn(answer);
if (answer == "0.30000000000000004"){
finalANS = "0.3"
}else {
finalANS = answer
}
  
  document.querySelector("#ansHTML").innerHTML = finalANS;

  arrayFirstNumbers = [""];
  Operators = "";
  arrayLastNumbers = [""];
  removeEvent2();
  runFirstEvent();
};

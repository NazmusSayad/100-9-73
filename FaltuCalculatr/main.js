var firstChar = "";
var operator = "";
var secondChar = "";
var ans = "";

doTheSome = () => {
  firstChar = document.getElementById("inputbox1").value;
  secondChar = document.getElementById("inputbox2").value;
  ans = eval(firstChar + operator + secondChar);
  document.querySelector("#amih1").innerHTML = ans;
};

document.querySelectorAll("#operatorBtn > button").forEach((element) => {
  element.addEventListener("click", (event) => {
    operator = element.innerHTML;
    doTheSome();
  });
});

document.querySelectorAll("input ").forEach((element) => {
  element.addEventListener("input", doTheSome);
});

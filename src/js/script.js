const output = document.querySelector(".calculator__result--output");
const buttons = document.querySelector(".calculator__buttons");
const button = document.querySelector(".calculator__button");

let inputNumber = "";

buttons.addEventListener("click", function (e) {
  const btn = e.target.closest(".calculator__button");
  if (btn === null) return;

  const type = btn.classList[1].split("--")[1];
  const value = btn.textContent;

  if (type === "number") {
    inputNumber += value;
    output.textContent = inputNumber;
  }

  if (type === "operator") {
    if (value === "+") {
    }

    if (value === "-") {
    }

    if (value === "x") {
    }

    if (value === "/") {
    }

    if (value === "=") {
    }
  }

  if (type === "action") {
    if (value === "AC") {
      output.textContent = "0";
      inputNumber = "";
    }
  }
});

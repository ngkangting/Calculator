// const output = document.querySelector(".calculator__result--output");
// const buttons = document.querySelector(".calculator__buttons");
// const button = document.querySelector(".calculator__button");

// let outputStr = "";
// let outputArr = [];

// buttons.addEventListener("click", function (e) {
//   const event = e.target.closest(".calculator__button");
//   if (event === null) return;

//   const type = event.classList[1].split("--")[1];
//   const value = event.textContent;

//   if (type === "number") {
//     outputStr += value;
//     output.textContent = outputStr;
//   }

//   if (type === "operator") {
//     if (+outputStr > 0) outputArr.push(+outputStr);
//     resetOutput();

//     if (value === "/") outputArr[0] = outputArr[0] / outputStr;

//     console.log(outputArr);
//     console.log(value);
//   }

//   if (type === "action") {
//     if (value === "AC") {
//       resetOutput();
//       outputArr = [];
//       console.log(outputArr);
//       console.log(outputStr);
//     }
//   }
// });

// const resetOutput = function () {
//   output.textContent = "";
//   outputStr = "";
// };

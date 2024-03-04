const buttonsEl = document.querySelectorAll("button");
const inputEl = document.getElementById("result");

for (let index = 0; index < buttonsEl.length; index++) {
  buttonsEl[index].addEventListener("click", () => {
    const buttonValue = buttonsEl[index].textContent;
    if (buttonValue === "C") {
      clear_result();
    } else if (buttonValue === "=") {
      calculate_result();
    } else {
      append_value(buttonValue);
    }
  });
}

function clear_result() {
  inputEl.value = "";
}

function calculate_result() {
  try {
    inputEl.value = eval(inputEl.value);
  } catch (error) {
    inputEl.value = "error";
  }
}
function append_value(input) {
  inputEl.value += input;
}

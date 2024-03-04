const buttonsEl = document.querySelectorAll("button");
const inputEl = document.getElementById("result");

for (let index = 0; index < buttonsEl.length; index++) {
  buttonsEl[index].addEventListener("click", () => {
    const buttonValue = buttonsEl[index].textContent;
    if (buttonValue === "C") {
      clear_result();
    } else if (buttonValue === "=") {
      calculate_result();
    } else if (buttonValue === "⌫") {
      delete_value(buttonValue);
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
    let resEl = eval(inputEl.value);
    if (resEl === undefined) {
      inputEl.value = "";
    } else {
      // inputEl.value = eval(inputEl.value);
      inputEl.value = resEl;
    }
  } catch (error) {
    inputEl.value = "error";
  }
}
function append_value(buttonValue) {
  inputEl.value += buttonValue;
}
function delete_value(buttonValue) {
  inputEl.value = inputEl.value.slice(0, -1);
}

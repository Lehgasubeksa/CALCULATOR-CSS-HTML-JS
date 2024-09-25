// Select display and buttons
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Add click event listeners to buttons
buttons.forEach((button) => {
  button.onclick = () => {
    const buttonId = button.id;
    const displayText = display.innerText;

    if (buttonId === "clear") {
      display.innerText = "";
    } else if (buttonId === "backspace") {
      display.innerText = displayText.slice(0, -1);
    } else if (buttonId === "equal") {
      if (displayText !== "") {
        try {
          display.innerText = eval(displayText);
        } catch (error) {
          display.innerText = "Error!";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      display.innerText += buttonId;
    }
  };
});

// Theme toggle feature
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};

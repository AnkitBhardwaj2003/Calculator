let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let themeBtn = document.getElementById("themeBtn");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {

  try {

    let expression = display.value;
    let result = eval(expression);

    historyList.innerHTML += `
      <li>${expression} = ${result}</li>
    `;

    display.value = result;

  } catch {

    display.value = "Error";

  }
}

function playSound() {

  let sound = document.getElementById("clickSound");

  sound.currentTime = 0;

  sound.play();

}

themeBtn.onclick = () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")) {

    themeBtn.innerHTML = "☀";

  } else {

    themeBtn.innerHTML = "🌙";

  }
};

function clearHistory() {

  historyList.innerHTML = "";

}

/* Keyboard Support */

document.addEventListener("keydown", function(event) {

  const key = event.key;

  playSound();

  if(!isNaN(key) || 
     ['+','-','*','/','.','%','(',')'].includes(key)) {

    appendValue(key);

  }

  if(key === "Enter") {

    calculate();

  }

  if(key === "Backspace") {

    deleteLast();

  }

  if(key === "Escape") {

    clearDisplay();

  }
});
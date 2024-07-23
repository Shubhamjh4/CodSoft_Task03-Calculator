function resetDisplay() {
    document.getElementById("calc-display").value = "";
}

function addToDisplay(value) {
    document.getElementById("calc-display").value += value;
}

function backspace() {
    const display = document.getElementById("calc-display");
    display.value = display.value.slice(0, -1); // Remove the last character
}

function computeResult() {
    const display = document.getElementById("calc-display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

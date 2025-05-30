
function appendToDisplay(value) {
    const display = document.querySelector('input[name="display"]');
    const currentValue = display.value;
    const lastChar = currentValue.slice(-1);


    const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
    if (value === "." && lastNumber.includes(".")) {
        return;
    }


    if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + value; // Replace last operator
    } else {
        display.value += value;
    }
}


function clearDisplay() {
    const display = document.querySelector('input[name="display"]');
    display.value = "";
}

function deleteLastChar() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
}


function calculate() {
    const display = document.querySelector('input[name="display"]');
    try {
        display.value = eval(display.value) || "0"; [5]
    } catch {
        display.value = "Error";
    }
}

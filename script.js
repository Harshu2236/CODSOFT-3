function appendCharacter(character) {
    document.getElementById("display").value += character;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLastCharacter() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}
function calculateSquareRoot() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
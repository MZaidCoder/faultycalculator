function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let faultyResult;

    // Faulty Logic with True Result Chance (10%)
    if (Math.random() < 0.5) {  // Check if a random number is less than 0.1 (10% chance)
        if (operator === "+") {
            faultyResult = num1 + num2;
        } else if (operator === "-") {
            faultyResult = num1 - num2;
        } else if (operator === "*") {
            faultyResult = num1 * num2;
        } else if (operator === "/") {
            faultyResult = num1 / num2;
        }
    } else {
        // Implement faulty logic as before (refer to previous explanation)
        if (operator === "+") {
            faultyResult = num1 * num2;
        } else if (operator === "-") {
            faultyResult = num1 - num2;
        } else if (operator === "*") {
            faultyResult = num1 + num2;
        } else if (operator === "/") {
            faultyResult = Math.pow(num1, num2);
        }
    }

    document.getElementById("result").innerHTML = "Result: " + faultyResult;
}
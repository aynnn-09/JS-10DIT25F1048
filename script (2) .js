console.clear();
console.log("✅ script.js connected");

const marksInput = document.getElementById("marks");
const btnDoWhile = document.getElementById("btnDoWhile");
const btnFor = document.getElementById("btnFor");
const btnClear = document.getElementById("btnClear");
const output = document.getElementById("output");

function getMarksArray() {
    let text = marksInput.value;
    return text.split(",").map(x => Number(x.trim()));
}

function calculateStats() {

    let marks = getMarksArray();

    let i = 0;
    let total = 0;

    do {
        total += marks[i];
        i++;
    } while (i < marks.length);

    let average = total / marks.length;

    output.className = "alert alert-info mb-0";
    output.innerHTML =
        "Total Marks = <b>" + total + "</b><br>" +
        "Average Marks = <b>" + average.toFixed(2) + "</b>";
}

function countPassFail() {

    let marks = getMarksArray();

    let pass = 0;
    let fail = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            pass++;
        } else {
            fail++;
        }
    }

    output.className = "alert alert-success mb-0";
    output.innerHTML =
        "Total PASS = <b>" + pass + "</b><br>" +
        "Total FAIL = <b>" + fail + "</b>";
}

function clearOutput() {
    output.className = "alert alert-secondary mb-0";
    output.innerHTML = "Result cleared";
    marksInput.value = "";
}

btnDoWhile.addEventListener("click", calculateStats);
btnFor.addEventListener("click", countPassFail);
btnClear.addEventListener("click", clearOutput);
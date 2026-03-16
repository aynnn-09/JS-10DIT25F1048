console.clear();
console.log(" ✅ script.js connected");

const nameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById("pw2");
const btn = document.getElementById("btnCalc");
const outputBox = document.getElementById("outputBox");

console.log(nameInput);
console.log(pw1Input);
console.log(pw2Input);
console.log(btn);
console.log(outputBox);

btn.addEventListener("click", function () {
    calculateMarks();
});

function calculateMarks(){
    let name = nameInput.value.trim();
    let pw1 = Number(pw1Input.value);
    let pw2 = Number(pw2Input.value);

    if (!name || isNaN(pw1) || isNaN(pw2) || pw1 < 0 || pw1 > 100 || pw2 < 0 || pw2 > 100) {
        outputBox.className = "alert alert-danger mt-3 mb-0";
        outputBox.innerHTML = " Please enter a name and valid marks (0-100) for PW1 and PW2.";
        return;
    }

    let total = pw1 + pw2;
    let average = total / 2;
    let percentage = (total / 200) * 100;

    let grade;
    if (average >= 80) {
        grade = "Excellent";
    }
    else if (average >= 60) {
        grade = "Good";
    }
    else if (average >= 40) {
        grade = "Satisfactory";
    }
    else {
        grade = "Fail";
    }

    outputBox.className = "alert alert-success mt-3 mb-0";
    outputBox.innerHTML = ` 

✅ Result summary 
    Name: ${name}
    PW1 : ${pw1} / 100
    PW2 : ${pw2} / 100
    
    Total: ${total} / 200
    Average: ${average.toFixed(2)} / 100
    Percentage: ${percentage.toFixed(2)}%
    Grade : ${grade}
    `;
}
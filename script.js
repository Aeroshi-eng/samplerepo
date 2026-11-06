// 1. Display a welcome message
function showMessage() {
    alert("Hello Aeroshi! Welcome to my website.");
}

// 2. Change the background colour
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

// 3. Display current date
function showDate() {
    document.getElementById("date").innerHTML = new Date().toDateString();
}

// 4. Display a greeting
function greetUser() {
    let name = prompt("Enter your name:");

    alert("Welcome " + name + "!");
}
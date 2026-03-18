function startExam() {
let name = document.getElementById("username").value;
localStorage.setItem("user", name);
window.location = "exam.html";
}

let time = 60;
if (document.getElementById("timer")) {
let timer = setInterval(() => {
document.getElementById("timer").innerText = "Time Left: " + time;
time--;
if (time < 0) {
clearInterval(timer);
submitExam();
}
}, 1000);
}

function submitExam() {
let score = 0;

let q1 = document.querySelector('input[name="q1"]:checked');
let q2 = document.querySelector('input[name="q2"]:checked');

if (q1 && q1.value === "a") score++;
if (q2 && q2.value === "a") score++;

localStorage.setItem("score", score);
window.location = "result.html";
}

if (document.getElementById("score")) {
let score = localStorage.getItem("score");
document.getElementById("score").innerText = "Your Score: " + score + "/2";
}

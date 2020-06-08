let questions = [
    ["What is the tallest Volcano?", "Mauna Loa"],
    ["What is the most popular middle name for a boy?", "Michael"],
    ["What is closest to a banana?", "Plantain"],
    ["What is the most popular middle name for a girl?", "Marie"],
    ["What is the Capital of Egypt?", "Cairo"]
];
let options = [
    ["K2", "Mt. Helens", "Mauna Loa"],
    ["Rodger", "William", "Michael"],
    ["Cucumber", "Plantain", "Wheat"],
    ["Bonnie", "Lynn", "Marie"],
    ["Legonia", "Cairo", "Lexogia"]
];

let index = 0;
let score = 0;
let question = document.getElementById('question');
let ans = document.getElementById('ans');

function checkAnswer(answer) {
    if (document.getElementById('ans1').checked) {
        if (options[index][0] === questions[index][1]) {
            score++;
        }
    } else if (document.getElementById('ans2').checked) {
        if (options[index][1] === questions[index][1]) {
            score++;
        }
    } else {
        if (options[index][2] === questions[index][1]) {
            score++;
        }
    }
}

function startGame() {
    document.getElementById("question").style.display = "block";
    document.getElementById("ans").style.display = "block";
    document.getElementById("buttons").style.display = "block";
    document.getElementById("start").style.display = "none";
    setFirstQuestion();
}

function setFirstQuestion() {
    let r = document.getElementsByTagName("label")
    document.getElementById("question").innerHTML = questions[index][0];
    r[0].innerHTML = options[index][0];
    r[1].innerHTML = options[index][1];
    r[2].innerHTML = options[index][2];
}

function nextQuestion() {
    index++;
    if (index == 4) {
        document.getElementById("next").style.display = "none";
    }
    if (index > 5) {
        document.getElementById("next").style.display = "none";
    } else {
        let r = document.getElementsByTagName("label")
        document.getElementById("question").innerHTML = questions[index][0];
        r[0].innerHTML = options[index][0];
        r[1].innerHTML = options[index][1];
        r[2].innerHTML = options[index][2];
    }
}
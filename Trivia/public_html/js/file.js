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
let r = document.getElementsByTagName("label");
let radio = document.getElementsByTagName("input");

function checkAnswer() {
    if (radio[0].checked == false && radio[1].checked == false && radio[2].checked == false) {
        alert("You need to select an answer.")
    } else {
        blockRadio();
        if (index >= 4) {
            document.getElementById("finish").style.display = "block";
        }
        if (document.getElementById('ans1').checked) {
            if (options[index][0] === questions[index][1]) {
                score++;
                blocks(index, true);
            } else {
                blocks(index, false);
            }
        } else if (document.getElementById('ans2').checked) {
            if (options[index][1] === questions[index][1]) {
                score++;
                blocks(index, true);
            } else {
                blocks(index, false);
            }
        } else {
            if (options[index][2] === questions[index][1]) {
                score++;
                blocks(index, true);
            } else {
                blocks(index, false);
            }
        }
    }
}

function startGame() {
    document.getElementById("container").style.display = "block";
    document.getElementById("start").style.display = "none";
    setFirstQuestion();
}

function setFirstQuestion() {
    document.getElementById("question").innerHTML = questions[index][0];
    r[0].innerHTML = options[index][0];
    r[1].innerHTML = options[index][1];
    r[2].innerHTML = options[index][2];
}

function nextQuestion() {
    checkAnswer();
    if (radio[0].checked == false && radio[1].checked == false && radio[2].checked == false) {

    } else {
        index++;
        if (index == 4) {
            document.getElementById("next").style.display = "none";
            //document.getElementById("finish").style.display = "block";
        }
        if (index > 5) {
            document.getElementById("next").style.display = "none";
            //document.getElementById("finish").style.display = "block";
        } else {
            document.getElementById("question").innerHTML = questions[index][0];
            r[0].innerHTML = options[index][0];
            r[1].innerHTML = options[index][1];
            r[2].innerHTML = options[index][2];
            radio[0].checked = false;
            radio[1].checked = false;
            radio[2].checked = false;
            unblockRadio();
        }
    }
}

function blocks(index, correct) {
    if (index == 0) {
        if (correct == true) {
            document.getElementById("check1").style.backgroundColor = "blue";
        } else {
            document.getElementById("check1").style.backgroundColor = "red";
        }
    } else if (index == 1) {
        if (correct == true) {
            document.getElementById("check2").style.backgroundColor = "blue";
        } else {
            document.getElementById("check2").style.backgroundColor = "red";
        }
    } else if (index == 2) {
        if (correct == true) {
            document.getElementById("check3").style.backgroundColor = "blue";
        } else {
            document.getElementById("check3").style.backgroundColor = "red";
        }
    } else if (index == 3) {
        if (correct == true) {
            document.getElementById("check4").style.backgroundColor = "blue";
        } else {
            document.getElementById("check4").style.backgroundColor = "red";
        }
    } else if (index == 4) {
        if (correct == true) {
            document.getElementById("check5").style.backgroundColor = "blue";
        } else {
            document.getElementById("check5").style.backgroundColor = "red";
        }
    }
}

function help() {
    alert("1) Select an answer.\n2) Click check answer button to check answer.\n3) Click next question to go to next question.\n4) Click restart to restart the quiz.");
}

function restart() {
    score = 0;
    index = 0;
    setFirstQuestion();
    radio[0].checked = false;
    radio[1].checked = false;
    radio[2].checked = false;
    document.getElementById("check1").style.backgroundColor = "white";
    document.getElementById("check2").style.backgroundColor = "white";
    document.getElementById("check3").style.backgroundColor = "white";
    document.getElementById("check4").style.backgroundColor = "white";
    document.getElementById("check5").style.backgroundColor = "white";
    document.getElementById("finish").style.display = "none";
    document.getElementById("next").style.display = "block";
}

function blockRadio() {
    radio[0].disabled = true;
    radio[1].disabled = true;
    radio[2].disabled = true;
}

function unblockRadio() {
    radio[0].disabled = false;
    radio[1].disabled = false;
    radio[2].disabled = false;
}

function finish() {
    alert("You got " + score + " correct out of 5.");
}
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

    index++;
}
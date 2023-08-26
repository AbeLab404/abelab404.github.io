function linkedin() {
    window.open("https://www.linkedin.com/in/abraham-labelle/", "_blank");
}

function github() {
    window.open("https://github.com/abelab404", "_blank");
}

function weatherApp() {
    window.open("weather.html", "_blank");
}

var time = 2000;

function game() {
    var squares = [];
    var selected = [];

    var input = time + 3000;
    if (time == 0) {
        time = 2000;
        input = 6000;
    }

    document.getElementById("play").disabled = true;
    for (let i = 1; i < 10; i++) {
        var square = document.getElementById("square" + i);
        square.style.background = "lightgray";
    }

    for (let i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * 9) + 1;
        var square = document.getElementById("square" + random);
        if (squares.includes(square.id)) {
            i = i - 1;
            continue;
        }
        squares[i] = square.id;
        square.style.background = "deepskyblue";
    }

    setTimeout(function () {
        for (let i = 1; i < 10; i++) {
            var square = document.getElementById("square" + i);
            square.style.background = "lightgray";
            square.style.cursor = "pointer";
            square.addEventListener("click", function () {
                this.style.background = "deepskyblue";
                selected.push(this.id);
            });
        }
    }, time);

    setTimeout(function () {
        squares.sort();
        selected.sort();
        var correct = true;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] != selected[i]) {
                correct = false;
            }
        }

        for (let i = 1; i < 10; i++) {
            var square = document.getElementById("square" + i);
            if (correct) {
                square.style.background = "lightgreen";
            }
            else {
                square.style.background = "red";
            }
            square.style.cursor = "default";
        }
        if (correct) {
            time -= 250;
        }
        document.getElementById("play").disabled = false;
    }, input);
}


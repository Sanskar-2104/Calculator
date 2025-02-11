function clearScreen() {
    document.getElementById("result").value = "";
}

function convert() {
    document.getElementById("result").value = -result.value;
}

function del() {
    document.getElementById("result").value = result.value.slice(0,-1);
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval (p);
    document.getElementById("result").value = q;
}
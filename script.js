//Script
let sudoku = ['2','3','4','1','4','1','3','2','1','4','2','3','3','2','1','4'];

function newGame () {
    document.getElementById('11').innerHTML = '2';
    document.getElementById('22').innerHTML = '1';
    document.getElementById('24').innerHTML = '2';
    document.getElementById('32').innerHTML = '4';
    document.getElementById('43').innerHTML = '1';
}

function checkSolution () {
    let solution =[document.getElementById('11').innerHTML,
    document.getElementById('12').innerHTML,
    document.getElementById('13').innerHTML,
    document.getElementById('14').innerHTML,
    document.getElementById('21').innerHTML,
    document.getElementById('22').innerHTML,
    document.getElementById('23').innerHTML,
    document.getElementById('24').innerHTML,
    document.getElementById('31').innerHTML,
    document.getElementById('32').innerHTML,
    document.getElementById('33').innerHTML,
    document.getElementById('34').innerHTML,
    document.getElementById('41').innerHTML,
    document.getElementById('42').innerHTML,
    document.getElementById('43').innerHTML,
    document.getElementById('44').innerHTML]

    if (solution.length === sudoku.length && solution.every((value, index) => value === sudoku[index])) {
        alert ("Soluzione corretta")} 
    else {
        alert ("Soluzione errata, riprova")
    }
}

//Coordinate partendo dalla cella in alto a sinistra che è la x=1 e y=1
function setNumber(x,y) {
    const cell = document.getElementById(x+y);
    number = document.querySelector('input[name="number"]:checked').value;
    cell.innerHTML = number;
}
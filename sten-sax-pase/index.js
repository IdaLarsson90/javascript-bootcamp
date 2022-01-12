
let myChoice = 0;
let myPoints = 0;
let compPoints = 0;


const buttonRockElem = document.querySelector('.rockButton');
buttonRockElem.addEventListener('click', ()=> {
    console.log(`Du valde sten`);
    myChoice = 0;
    compTurn();
});

const buttonScissorElem = document.querySelector('.scissorButton');
buttonScissorElem.addEventListener('click', ()=> {
    console.log(`Du valde sax`);
    myChoice = 1;
    compTurn();
});

const buttonPaperElem = document.querySelector('.paperButton');
buttonPaperElem.addEventListener('click', ()=> {
    console.log(`Du valde påse`);
    myChoice = 2;
    compTurn();
});


function compTurn () {
    let rndNumber = Math.round(Math.random()*2);
    determineCompTurn(rndNumber);
}

function determineCompTurn (rndNumber) {
    if (rndNumber == 0) {
        console.log(`Datorn valde sten`);
    } else if (rndNumber == 1) {
        console.log(`Datorn valde sax`);
    } else {
        console.log(`Datorn valde påse`);
    }
    determinePoints(rndNumber);
}

function determinePoints (compChoice) {
    if (compChoice == myChoice ) {
        console.log(`Oavgjort`);
    } else if (compChoice == 0 && myChoice == 1 || compChoice == 1 && myChoice == 2 || compChoice == 2 && myChoice == 0) {
        console.log(`Datorn fick poäng!`);
        compPoints++;
    } 
    else {
        console.log(`Du fick poäng`);
        myPoints++;
    }
    console.log(`Mina poäng: ${myPoints}`);
    console.log(`Datorns poäng: ${compPoints}`);
    determineWinner(myPoints, compPoints);
}

function determineWinner (myPoints, compPoints) {
    if (myPoints == 3) {
        console.log(`Grattis! Du vann.`);
        resetMyPoints();
        resetCompPoints();
    } else if (compPoints == 3) {
        console.log(`Tyvärr. Datorn vann.`);
        resetMyPoints();
        resetCompPoints();
    }
}

function resetMyPoints () {
    myPoints = 0;
}
function resetCompPoints () {
    compPoints = 0;
}
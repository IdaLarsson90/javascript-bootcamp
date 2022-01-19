const dice = {
    sides: 6,
    throw: function() {
        return Math.ceil(Math.random() * dice.sides);
    } 
}
let goal = 1;
let throws= 0;  
const throwButton = document.querySelector('#throw-button');
const diceElem = document.querySelector('#theDice');

throwButton.addEventListener('click', () => {
    throws++;
    document.getElementById("numberOfThrows").innerHTML = throws;
    const result = dice.throw();
    diceElem.classList = 'dice';
    diceElem.classList.add(`dots-${result}`)
     
    play(result);
   
});

function play(result) {
    console.log(result);
    if (result === goal) {
        console.log("Det var målet");
        goal++;
        document.getElementById("numberGoal").innerHTML = goal;
        if (goal === 7) {
            goal = 1;
            document.getElementById("congrats").innerHTML = `Grattis, du klarade det på ${throws-1} kast`;
            document.getElementById("numberOfThrows").innerHTML = ' ';
            document.getElementById("numberGoal").innerHTML = goal;
            throws= 0;
        } 
    }
}

const dice = {
    sides: 6,
    throw: function() {
        return Math.ceil(Math.random() * dice.sides);
    } 
}

const throwButton = document.querySelector('#throw-button');
const diceElem = document.querySelector('#theDice');

throwButton.addEventListener('click', () => {
    const result = dice.throw();
    console.log(`Nummer slumpat: ${result}`);
    diceElem.classList = 'dice';
    diceElem.classList.add(`dots-${result}`)
});
const buttonElem = document.getElementById('calculateButton');

buttonElem.addEventListener('click', () => {
    //Hämtar det som skrivits i inputfältet med ID tip
    const tip = document.getElementById('tip').value;
    //Hämtar det som skrivits i inputfältet med ID sum
    const sum = document.getElementById('sum').value;
    //Hämtar det som skrivits i inputfältet med ID numberOfFriends
    const numberOfFriends = document.getElementById('numberOfFriends').value;


    const total = calculateTip(sum, tip);
    const friendSum = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
});

function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseFloat(tip);
    const total = parseInt(sum) + calculatedTip;
    //Returnerar värdet i variablen total i en funktion
    return total;
}

function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
    //Returnerar värdet i variablen sumDivided i en funktion
    return sumDivided;
}

function showDividedSum(sum) {
    //Skriver ut summan i HTML-elementet med ID friendSum
    document.getElementById('friendSum').innerHTML = sum + ' kr';
    document.getElementById('inputForm').classList.toggle('hide');
    //Lägger till eller tar bort en CSS-klass hide
    document.getElementById('showSum').classList.toggle('hide');
}



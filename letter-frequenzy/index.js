function letterFrequency (str) {
    let result= {}; //behöver inte vara global

    for (let char of str) {
        if (result[char]===undefined) {
        result[char] = 1; // jag vill att innehållet ska bli en nyckel. Även om jag inte vet vad den är. därav [char]
        }
        else {
            result[char]++;
        }
    } 
    console.log(result);
}

letterFrequency('kalle');
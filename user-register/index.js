function filterByCountry (users, nat) {
    let usersByCountry = [];

    for (let user of users) {
        if (user.nat === nat) {
            usersByCountry.push(user);
        }
    }
    return usersByCountry;
}
const filtered = filterByCountry(users, 'DE');

console.log(filtered);



function filterByGender (users, gender) {
    let usersByGender = [];
  
    if (gender === 'Male' ) {
      for (let user of users) {
        if (user.name.title === 'Mr' || user.name.title === 'Monsieur') {
            usersByGender.push(user);
            }
        }
    }
    else {
        for (let user of users) {
            if (user.name.title != 'Mr' && user.name.title != 'Monsieur') {
                usersByGender.push(user);
            }
        }
    }
    return usersByGender;  
    
    
}
const filteredByGender = filterByGender(users, 'Female');

console.log(filteredByGender);

/**     Ta emot listan på användare
 *      returnera ny lista med bara e-mailadresser
 * 
 */

 function emailAdresses (users) {
    let emailList = [];

    for (let user of users) {
        emailList.push(user.email);
    }
    return emailList;
}


function newEmail(users) {
 
    for (let user of users) {
        const indexOfDot = user.email.indexOf('.');
        const indexOfAt = user.email.indexOf('@');
        const firstName = user.email.slice(0, indexOfDot);
        const lastName = user.email.slice(indexOfDot + 1, indexOfAt);
        const newEmail = lastName.toLowerCase() + '.' + firstName.toLowerCase() + '@evilcorp.' + user.nat.toLowerCase();
        user.email = newEmail;
    }
}


let emailList = emailAdresses(users);


newEmail(users);

console.log(users);

// newEmail(newEmailList);

/**
 *  Slicea upp den befintliga eposten
 *  spara som object i ny array
 *  Byta plats på för och efternamn
 *  Ta bort och lägga till ny addressnamnsgrejs
 *  lägga till domän beroende på nationalitet
 */

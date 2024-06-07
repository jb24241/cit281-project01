/*
    CIT 281 Project 1
    Name: Collin Morrison
*/

// Function to generate a random integer between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to generate a random string of a specified length
function getRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Generate a random string of a length between 5 and 25 characters
console.log(getRandomString(getRandomInteger(5, 26)));

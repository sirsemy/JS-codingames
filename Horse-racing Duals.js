/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const horseAmount = parseInt(readline());

let horseStrenghts = [];

for (let i = 0; i < horseAmount; i++) {
    horseStrenghts[i] = parseInt(readline());
}

let sortedStrenghts = horseStrenghts.toSorted((a, b) => a - b);

let closestDifference = 10000000;

for (let i = 1; i < horseAmount; i++) {
    let difference = sortedStrenghts[i] - sortedStrenghts[i - 1];

    if (difference < closestDifference) {
        closestDifference = difference;
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(closestDifference);

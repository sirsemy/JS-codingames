/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

function decimalToBinary(number)
{
    return number.toString(2);
}

function uploadTilSevenBit(shorterBinary)
{
    while (shorterBinary.length < 7) {
        shorterBinary = '0' + shorterBinary;
    }

    return shorterBinary;
}

function processBinaryNumber(binaryNumber, lastCharEndBit)
{
    let beforeBit = lastCharEndBit;
    let charAnswer = "";

    for (let i = 0; i < binaryNumber.length; i++) {
        let currentBit = binaryNumber[i];

        if (i === 0 && beforeBit === null) {
            if (currentBit == 1) {
                charAnswer += '0 0';
            } else if (currentBit == 0) {
                charAnswer += '00 0';
            }
            beforeBit = currentBit;
            continue;
        }

        if (currentBit === beforeBit) {
            charAnswer += '0';
        } else if (currentBit == 1) {
            charAnswer += ' 0 0';
        } else {
            charAnswer += ' 00 0';
        }

        beforeBit = currentBit;
    }

    return charAnswer;
}

let answer = "";
let lastCharEndBit = null;

for (const element of MESSAGE) {
    let asciiNumber = element.charCodeAt(0);
    
    let binaryCharString = decimalToBinary(asciiNumber);

    if (binaryCharString.length < 7) {
        binaryCharString = uploadTilSevenBit(binaryCharString);
    }

    let codedBinaryString = processBinaryNumber(binaryCharString, lastCharEndBit);
    lastCharEndBit = binaryCharString.charAt(binaryCharString.length - 1);
    
    answer += codedBinaryString;
}

console.log(answer);

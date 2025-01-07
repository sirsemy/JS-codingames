/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const rowToBeProcessed = parseInt(readline()); // Number of elements which make up the association table.
const fileNameAmount = parseInt(readline()); // Number Q of file names to be analyzed.
const filePartNumber = 2;

let extensions = [];
let mimeType = [];

for (let i = 0; i < rowToBeProcessed; i++) {
    var inputs = readline().split(' ');
    extensions[i] = inputs[0].toLowerCase(); // file extension
    mimeType[i] = inputs[1]; // MIME type.
}

function indentifyFileMimeType(originalFileName)
{
    let fileNameParts = originalFileName.split('.');

    if (fileNameParts.length < filePartNumber) {
        return "UNKNOWN";
    }

    let lastFileNamePart = fileNameParts.pop().toLowerCase();
    
    let whichIndex = extensions.findIndex(
        (element) => element === lastFileNamePart
    );

    if (whichIndex == -1) {
        return "UNKNOWN";
    }

    return mimeType[whichIndex];
}

for (let i = 0; i < fileNameAmount; i++) {
    const fileName = readline(); // One file name per line.

    let display = indentifyFileMimeType(fileName);

    console.log(display);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

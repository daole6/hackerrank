'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    var po=0, ne=0, ze=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            po++;
        }
        else if(arr[i]<0){
            ne++;
        }
        else ze++;
    }

    po /=arr.length
    ne /=arr.length
    ze /=arr.length
    console.log(po);
    console.log(ne);
    console.log(ze);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

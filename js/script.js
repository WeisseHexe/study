'use strict';

if (4 == 9) {

    console.log("Ok!");

} else {
    console.log("Error!");

}



// if (num < 49) {

//     console.log("Error!");

// } else if (num > 100) {

//     console.log8("Много");    
// } else {

//     console.log("Ok!");
// }

// (num === 50) ? console.log("Ok!") : console.log("Ok!");

const num = 55;

switch (num) {
    case 49:
        console.log("Wrong!");
        break;
    case 100:
        console.log("Wrong!");
        break;
    case 50:
        console.log("Nice!");
        break;
    default:
        console.log("Better luck next time!");
        break;
}
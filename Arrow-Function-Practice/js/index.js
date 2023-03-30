// **** Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged. 

// function shout(word) {
//     let result = word + word;
//     console.log(result);
//     return result;
//   }

//   shout('Fire');

// ****  Write a function firstChar, which returns the first character that is not a space when a string is passed. 

function firstChar(name) {
    let result = name.trim();
    result = result.charAt(0);
    return result;
}
    
firstChar(' Rosa Parks ');

console.log(result);



// Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive. 

// Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1. 

function indexOfIgnoreCase(a, b){
    let aLower = a.toLowerCase();
    let bLower = b.toLowerCase();
    return aLower.indexOf(bLower);
    }

//     Reading your code successfully.

// indexOfIgnoreCase is a function.

// indexOfIgnoreCase has 2 parameter(s).

// indexOfIgnoreCase('bit', 'it') returns 1.

// indexOfIgnoreCase('bit', 'IT') returns 1.

// indexOfIgnoreCase('BYTE', 'te') returns 2.

// indexOfIgnoreCase('BYTE', 'TE') returns 2.

// indexOfIgnoreCase('BiT', 'bIt') returns 0.

// indexOfIgnoreCase('bit', 'bt') returns -1.

// All tests passed!
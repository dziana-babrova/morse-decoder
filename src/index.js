const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseCode = "";
    let resultString = "";
    
    for (let i = 0; i < expr.length; i++){
        if (i % 2 === 1) continue
        else if (expr[i] === "0" && expr[i + 1] === "0") morseCode += "|"
        else if (expr[i] === "1" && expr[i + 1] === "0") morseCode += "."
        else if (expr[i] === "1" && expr[i + 1] === "1") morseCode += "-"
        else if (expr[i] === "*" && expr[i + 1] === "*") morseCode += " "
    }
   
    for (let i = 0; i < morseCode.length; i++){
        if (i % 5 !== 0) continue;
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "|" && morseCode[i + 3] === "." && morseCode[i + 4] === "-") resultString += "a"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "-" && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "b"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "-" && morseCode[i + 2] === "." && morseCode[i + 3] === "-" && morseCode[i + 4] === ".") resultString += "c"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "-" && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "d"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "|" && morseCode[i + 3] === "|" && morseCode[i + 4] === ".") resultString += "e"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "." && morseCode[i + 2] === "." && morseCode[i + 3] === "-" && morseCode[i + 4] === ".") resultString += "f"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === ".") resultString += "g"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "." && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "h"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "|" && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "i"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "." && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "j"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "-" && morseCode[i + 3] === "." && morseCode[i + 4] === "-") resultString += "k"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "." && morseCode[i + 2] === "-" && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "l"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "|" && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "m"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "|" && morseCode[i + 3] === "-" && morseCode[i + 4] === ".") resultString += "n"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "o"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "." && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === ".") resultString += "p"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "-" && morseCode[i + 2] === "-" && morseCode[i + 3] === "." && morseCode[i + 4] === "-") resultString += "q"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "." && morseCode[i + 3] === "-" && morseCode[i + 4] === ".") resultString += "r"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "s"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "|" && morseCode[i + 3] === "|" && morseCode[i + 4] === "-") resultString += "t"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === "-") resultString += "u"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "." && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === "-") resultString += "v"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "|" && morseCode[i + 2] === "." && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "w"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "-" && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === "-") resultString += "x"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "-" && morseCode[i + 2] === "." && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "y"
        else if (morseCode[i] === "|" && morseCode[i + 1] === "-" && morseCode[i + 2] === "-" && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "z"
        else if (morseCode[i] === "." && morseCode[i + 1] === "-" && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "1"
        else if (morseCode[i] === "." && morseCode[i + 1] === "." && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "2"
        else if (morseCode[i] === "." && morseCode[i + 1] === "." && morseCode[i + 2] === "." && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "3"
        else if (morseCode[i] === "." && morseCode[i + 1] === "." && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === "-") resultString += "4"
        else if (morseCode[i] === "." && morseCode[i + 1] === "." && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "5"
        else if (morseCode[i] === "-" && morseCode[i + 1] === "." && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === ".") { resultString += "6"}
        else if (morseCode[i] === "-" && morseCode[i + 1] === "-" && morseCode[i + 2] === "." && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "7"
        else if (morseCode[i] === "-" && morseCode[i + 1] === "-" && morseCode[i + 2] === "-" && morseCode[i + 3] === "." && morseCode[i + 4] === ".") resultString += "8"
        else if (morseCode[i] === "-" && morseCode[i + 1] === "-" && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === ".") resultString += "9"
        else if (morseCode[i] === "-" && morseCode[i + 1] === "-" && morseCode[i + 2] === "-" && morseCode[i + 3] === "-" && morseCode[i + 4] === "-") resultString += "0"
        else if (morseCode[i] === " " && morseCode[i + 1] === " " && morseCode[i + 2] === " " && morseCode[i + 3] === " " && morseCode[i + 4] === " ") resultString += " "
    }
    return resultString;
}

module.exports = {
    decode
}
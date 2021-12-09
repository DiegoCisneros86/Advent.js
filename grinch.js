const letters = [
    "bici coche (balón) bici coche peluche", // -> ✅
    "(muñeca) consola bici", // ✅
    "bici coche (balón bici coche", // -> ❌
    "peluche (bici [coche) bici coche balón", // -> ❌
    "(peluche {) bici", // -> ❌
    "() bici" // ❌
];

function isValid(letter) {
    // ¡No dejes que el Grinch gane!

    if (letter.includes('{') 
        || letter.includes('}') 
        || letter.includes('[') 
        || letter.includes(']') 
        || (letter.includes('(') && !letter.includes(')')) 
        || (letter.includes(')') && !letter.includes('('))
        || letter.includes("()")) {
        return false;
    }
    return true;
}

console.log(isValid("bici coche (balón) bici coche peluche"))
console.log(isValid("(muñeca) consola bici"))
console.log(isValid("bici coche (balón bici coche"))
console.log(isValid("peluche (bici [coche) bici coche balón"))
console.log(isValid("(peluche {) bici"))
console.log(isValid("() bici"))
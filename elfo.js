const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    // ¡Tú puedes!
    let newLetter = [];
    letter = letter.trim();
    letter = letter.split(' ');
    letter.forEach(i => {
        if (!i.includes('_')) {
            newLetter.push(i);
        }
    });
    let counts = {};
    newLetter.forEach(function(i) { counts[i] = (counts[i] || 0) + 1; });
    console.log(counts);
    return counts
}

listGifts(carta)
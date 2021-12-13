// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    let card = 250;
    let normal = 12;
    let discount = 0.75;
    let ticketCost = times * normal;
    let cost = 0;
    let arr = [card];
    for (let i = 1; i <= times; i++) {
        cost = (normal * (discount ** i));
        arr.push(cost);
    }

    const cardCost = arr.reduce((acc,item) => acc+item,0);
    return cardCost < ticketCost ? true : false
}

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
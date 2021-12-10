const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
const pricesDoge = [18, 15, 12, 11, 9, 7]
const pricesAda = [3, 3, 3, 3, 3]

function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
    let arrBuy = prices.slice(0, 2);
    let buyValue = Math.min(...arrBuy);
    let arrSell = prices.slice(2,prices.length);
    let sellValue = Math.max(...arrSell)
    if(sellValue <= buyValue) return -1
    let profit = sellValue - buyValue
    return profit
    // return [buyValue,sellValue].reduceRight((accumulator,current) => accumulator-current)
}


console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)
console.log(maxProfit(pricesDoge)) // -> -1 (no hay ganancia posible)
console.log(maxProfit(pricesAda)) // -> -1 (no hay ganancia posible)
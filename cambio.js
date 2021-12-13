function getCoins(change) {
    const coins = [];
    coins[0] = 1; // céntimo
    coins[1] = 2; // céntimos
    coins[2] = 5; // céntimos
    coins[3] = 10; // céntimos
    coins[4] = 20; // céntimos
    coins[5] = 50; // céntimos
    // ¡No olvides compartir tu solución en redes!
    console.log("cambio de: "+change);
    console.log(coins);
    let coinsChange = [];
    coins.forEach(coin => {
        coinsChange.push(0)
    });
    let auxChange = 0;

    coins.reverse();
    for (let i = 0; i < coins.length; i++) {
        while (auxChange <= change && (change - auxChange) >= coins[i]) {
            if (auxChange + coins[i] <= change) {
            auxChange += coins[i];
            coinsChange[i]++;
            }
        }
    }
    coins.reverse();
    coinsChange.reverse();
    return coinsChange;
};

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

function mountainHikingGear(input) {
    let budget = parseFloat(input[0]);
    let index = 1;
    let productCount = 0;
    let totalSpent = 0;

    while (index < input.length) {
        let productName = input[index];

        if (productName === "Stop") {
            console.log(`You bought ${productCount} products for ${totalSpent.toFixed(2)} leva.`);
            return;
        }

        let productPrice = parseFloat(input[index + 1]);
        productCount++;

        if (productCount % 3 === 0) {
            productPrice /= 2;
        }

        if (productPrice > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            return;
        }

        budget -= productPrice;
        totalSpent += productPrice;
        index += 2;
    }
}
mountainHikingGear(["153.20",
    "Backpack",

    '25.20',

    'Shoes',

    '54',

    'Sunglasses',

    '30',

    'Stop'])
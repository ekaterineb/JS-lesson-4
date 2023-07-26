// დავალება 1

function squareNum(num) {
    return num * num;
}

console.log(squareNum(5));

// დავალება 2

function discountPrice(productPrice, discountPercentage) {
    let discountAmount = productPrice * (discountPercentage / 100);
    return productPrice - discountAmount;
}

console.log(discountPrice(800, 30))

// დავალება 3

function randomNumber() {
    return Math.round(Math.random() * 99);
}

console.log(randomNumber());

// დავალება 4

function stringLength(input){
    return input.length;
}

console.log(stringLength("Calculate the lenght of the current string"))


var numbers = [1, 2, 3];
var doubledNumbers = [];

numbers.map(number => {
    doubledNumbers.push(number * 2);
})
console.log(numbers);

console.log(doubledNumbers);


var cars = [
    { model: 'Buick', price: 'cheap' },
    { module: 'Camaro', price: 'expensive' }
]

var getPrice = cars.map(carPrice => {
    return carPrice.price;
})

console.log(getPrice);


var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {

    var p = array.map(function(arr) {

        return arr[property];

    });
    console.log(p);
    return p;


}

pluck(paints, 'color');

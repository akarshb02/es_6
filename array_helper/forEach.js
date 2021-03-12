var colors = ['red', 'blue', 'green'];

colors.forEach(color => {

    console.log(color);
})

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

function addre(number) {
    sum += number;
}

numbers.forEach(number => {

    sum += number;

})
console.log(sum);

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach(image => {
    areas.push(image.height * image.width);
})

console.log(areas);

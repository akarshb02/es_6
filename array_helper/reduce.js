var numbers = [10, 20, 30];
var sum = 0;

let res = numbers.reduce((sum, current) => {

    return sum + current;

}, )
console.log(res);

var primaryColors = [
    { color: "red" },
    { color: "yellow" },
    { color: "blue" }

]

let colors = primaryColors.reduce((acc, cur) => {
    acc.push(cur.color);
    return acc;
}, [])
console.log(colors);



var numbers = [1, 1, 2, 3, 4, 4];
var uniq = [];

function unique(array) {
    array.reduce((acc, cur) => {

        if (acc != cur) {
            return uniq.push(acc);
        }

    }, )

}
unique(numbers);
console.log(uniq);

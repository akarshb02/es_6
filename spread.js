const defaultColors = ['red', 'green'];
const userColors = ['orange', 'yellow'];

console.log(defaultColors.concat('blue ' + ',' + userColors));

//can add new elements using spread operator
console.log(["blue", ...userColors, ...defaultColors]);


function validateShoppingList(...items) {

    if (items.indexOf('milk') < 0) {

        return ["milk", ...items]

    }
    return items;




}


validateShoppingList('oranges', 'bread')



const MathLibrary = {
    calculateProduct(...rest) {
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }

}

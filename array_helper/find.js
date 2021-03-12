var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
]

var res = users.find(arr => {
    return arr.name === 'Alex';
})
console.log(res);


function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
]
let carModel = cars.find(mod => {
    return mod.model === 'Focus';
})

console.log(carModel);


var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 },
]

function findWhere(element, obj) {
    var where = element.find(e => {
        return e.height === obj.height;

    })
    console.log(where);
    return where;

}
findWhere(ladders, { height: 25 })

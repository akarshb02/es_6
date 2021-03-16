// function Car(options) {
//     this.title = options.title;
//     this.module = options.module;

// }

// function Toyota(options) {
//     Car.call(this, options);
//     this.color = options.color;
// }

// const toyota = new Toyota({ color: 'red', title: 'daily', module: 'es6' });
// console.log(toyota);


class Car1 {

    constructor(options) {
        this.title = options.title;
    }

    drive() {
        return 'vroom';
    }

}
class Toyota extends Car1 {


    constructor(color) {

        super(color);
        this.color = color;
    }


}

const toyota = new Toyota({ title: 'xyz', color: 'red' });
console.log(toyota);
console.log(toyota.drive());

class Monster {

    constructor(options) {
        this.health = 100;
        this.name = options.name;

    }

}
const monn = new Monster({ name: 'Monster' });
console.log(monn);

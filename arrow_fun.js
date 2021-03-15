const add = (a, b) => {
    return a + b;
}
console.log(add(3, 4));


const double = number => 2 * number;

console.log(double(2));

const numbers = [1, 2, 3];

let res = numbers.map(number => number * 2);
console.log(res);


//when to use 

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;

        })
    }
}

console.log(team.teamSummary());


const profile = {
    name: 'Alex',
    getName: () => {
        return this.name;
    }

};

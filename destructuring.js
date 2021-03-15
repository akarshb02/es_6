var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
}
const { name, ...rest } = savedFiled;

console.log(rest);


function fileSummary({ extension, name, size }) {
    return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiled));


const companies = [
    { name1: 'Google', location: 'Mountain View' },
    { name1: 'Facebook', location: 'Menlo' },
    { name1: 'Uber', location: 'San Francisco' }
];

const [{ location: loc }, { location }, { location: locations }] = companies;
console.log(location);
console.log(loc);
console.log(locations);


const points = [
    [4, 5],
    [10, 1],
    [0, 40]
]
points.forEach(pair => {
    const [x, y] = pair;
    console.log(x * 2);
})

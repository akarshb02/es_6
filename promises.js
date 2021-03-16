const fetch = require('node-fetch');
let promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            reject();

        }, 3000)

    }).then(() => {
        console.log('this is then');
    }).then(() => {
        console.log('nested then');
    })
    .catch((e) => {
        console.log(e + "error");

    })
console.log(promise);
const url = 'http://api.weatherstack1123.com/current?access_key=apif&query=bangalore';
fetch(url).then(data => data.json())
    .then(res => console.log(res))
    .catch(() => console.log('BAD'));

function getMessage() {
    const year = new Date().getFullYear();
    return `The year is ${year}`;
}

console.log(getMessage());


//
function makeReq(url, methods = 'GET') {

    console.log(methods);

}
makeReq('google.com', 'POST');

function addNumber(...numbers) {
    return numbers.reduce((acc, cur) => {

        return acc + cur;

    })
}


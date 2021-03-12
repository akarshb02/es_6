var products = [
    { name: 'cucumber', type: 'vegg', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegg', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
]



var res = products.filter(arr => {
        return arr.type == 'fruit';
    })
    //console.log(res);

var less = products.filter(qut => {
    return qut.quantity > 0 && qut.price < 10;
})
console.log(less);


var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {

    let p = array.filter(iteratorFunction => {
        iteratorFunction > 20
        return iteratorFunction === 10
    })
    let r = array.filter(iteratorFunction => {
        iteratorFunction < 20
        return iteratorFunction === 30
    })
    return p;

}





console.log(reject(numbers));

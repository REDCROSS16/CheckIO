
// перебираем объект
function biggerPrice(limit, data) 
{
    
    let res = [];
    data.sort((prev,next) => next.price - prev.price);
    for (let i = 0; i < limit; i++) {
         res.push(data[i]);  
    }
    
    return res;
}

console.log('Example:')
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))

assert.deepEqual(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]), [
    {"name": "wine", "price": 138},
    {"name": "bread", "price": 100}
])
assert.deepEqual(biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
]), [{"name": "whiteboard", "price": 170}])
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
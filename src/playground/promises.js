const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Andrea',
        //     age: 20
        // })
        // resolve('This is my resolved data');
        // resolve('This is my other resolved data');
        reject('Something went wrong');
    }, 1500)
});

console.log('before');

promise.then((data) => { // callback
    console.log('1', data)
}, (error) => {
    console.log('Error: ', error);
})

promise.then((data) => {
    console.log('2', data)
}).catch((error) => {
    console.log('Error: ', error);
})

console.log('after');
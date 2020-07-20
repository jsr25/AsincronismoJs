const doSometihingAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ?setTimeout(() => resolve('Do Something Async'), 3000)
        : reject(new Erro('Test Error'))
    });
}

const doSometihing = async () => {
    const something = await doSometihingAsync();
    console.log(something);
}

console.log('Before')
doSometihing();
console.log('After')


const anotherFunction = async () => {
    try {
        const something = await doSometihingAsync();
        console.log(something)
    }catch(err){
        console.error(err)
    }
}

console.log('Before 1')
anotherFunction();
console.log('After 1')
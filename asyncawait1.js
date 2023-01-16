console.log('person1:shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },1000)
});


const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log("Husband: shall we go in?");
    console.log("Wife: I am hungry, get something to eat");
    return new Promise((resolve,reject)=>{
        resolve(`${t}-popcorn`)
    });
});
const getButter = getPopcorn.then((t)=>{
    console.log("Husband: you want anything else");
    console.log("Wife: need butter on popcorn");
    return new Promise((resolve,reject)=>{
        resolve(`${t}-butter`)
    })
})
const getColdDrinks = getButter.then((t)=>{
    console.log("Wife: And also cool drink")
    return new Promise((resolve,reject)=>{
        resolve(`${t}-cool drink`)
    })
})
getColdDrinks.then((t)=>{
    console.log(t);
})


console.log('person4: shows ticket');
console.log('person5: shows ticket');


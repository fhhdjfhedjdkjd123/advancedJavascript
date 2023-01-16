console.log('person1: shows ticket');
console.log('person2: shows ticket');

const movie = async ()=>{
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },2000);
    });

    const getPopcorn = new Promise((resolve,reject)=>{
        resolve('popcorn');
    });
    const getButter = new Promise((resolve,reject)=>{
        resolve('butter')
    });
    const getCooldrink = new Promise((resolve,reject)=>{
        resolve('pulpy');
    });

    let tickets = await promiseWifeBringingTicks;

    console.log("Husband: shall we go in?");
    console.log("Wife: I am hungry, get something to eat");

    let popcorn1 = await getPopcorn;
    console.log(`Husband: I got ${popcorn1}`);
    console.log("Husband: you want anything else");
    console.log("Wife: need butter on popcorn");

    let butter1 =await getButter;
    console.log(`Husband: I got ${butter1}`)
    console.log('Husband: Lets go');

    let cooldrink = await getCooldrink;
    console.log("Wife: And also I want cooldrink")
    console.log(`Husaband: I get ${cooldrink} for you.`);

    //Promise.all
    let [p,b,c] = await Promise.all([popcorn1,butter1,cooldrink]);
    console.log(`${p}, ${b},${c}`);


    return tickets;
}
movie().then((m)=>{
    console.log(`person3:show ${m}`);
});
console.log('person4: shows ticket');
console.log('person5: shows ticket');
//1 ----CALL.....
var obj = {a:5};
var add = function(b,c,d){
    return this.a+b+c+d;
}
//console.log(add.call(obj,7));

//2.....APPLY....
var arr = [2,3,4];
//console.log(add.apply(obj,arr));

//3......BIND....
var bounds = add.bind(obj);
//console.log(bounds(1,2,3));

//4....
var Student = {age:20};
var printAge = function(){
    return this.age;
}
var bindAge = printAge.bind(Student);
//console.log(bindAge());

//CURRYING...
// let multiply = function(x,y){
//     console.log(x*y);
// }
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);
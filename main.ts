/*
Q37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/

function make_shirt1(label:string , size:string = "Large") {
    return `${label} ${size}`
}
let f1 = make_shirt1("I love TypeSript")
console.log(f1);

function make_shirt2(label:string , size:string = "Large") {
    return `${label} ${size}`
}
let f2 = make_shirt2("I love TypeSript")
console.log(f2);

function make_shirt3(label:string , size:string = "Large") {
    return `${label} ${size}`
}
let f3 = make_shirt3("I love TypeSript","Any Size")
console.log(f3);
function sayhello() {
    console.log("Hello World")
    console.log("This Is my first Function")
}
console.log("Before")
sayhello()
console.log("After")

//############################################

// Passing Parameter to the function

function sayhello1(fname)
{
    console.log(`Hello ${fname}`)
}
function add(x,y)
{
    let z=x+y
    console.log(`Addition is ${z}`)
}
sayhello1("Vaibhav")
add(10,20)

//############################################

// Default Argument
function sayhello2(fname="abc" , lname="xyz")
{
    console.log(`Hello ${fname} ${lname}`)
}
sayhello2()
sayhello2("Vaibhav")
sayhello2("Vaibhav","kadam")

//############################################

// Returning value from function

function add1(x,y)
{
    let z=x+y
    return z
}
function area(r)
{
    let s=3.14*r*r
    return s
}
let a=add1(100,200)
console.log(`Addition is ${a}`)
let b=area(2.4)
console.log(`Area is ${b}`)
// Global Variable 
let x=100
function show()
{
    //Local Variable
    let y=200
    console.log(x)
    console.log(y)
}
function disp()
{
    // We cannot call variable y in this function as its a local variable
    console.log(x)
}
show()
disp()
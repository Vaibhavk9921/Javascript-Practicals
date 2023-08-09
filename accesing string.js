 let s1="Hello"
 console.log(s1[0])
 console.log(s1.at(0))
 console.log(s1[-1])
 console.log(s1.at(-1))
 console.log(s1.at(-2))
 // By Using For Loop
 for(let i=0;i<s1.length;i++)
 {
    console.log(s1[i])
 }
 //By using for in Loop
 for(let i in s1)
 {
    console.log(i)
 }
 // above code dsiplays index values
 //  By using For of Loop
 for(let x of s1 )
 {
    console.log(x)
 }
 // above code displays characters in strings 
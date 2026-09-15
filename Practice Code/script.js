// function print(a,b){
//     console.log("Hello World");
//     console.log(arguments);
//     return a+b;
// }
// console.log(print(5, 10));;

// let printMessage = (message)=>{
//     console.log(message);
//     // console.log(arguments); // Arguments object is not available in arrow functions
// };

// printMessage("Message printed");




//promises for asynch is an object
//js single threaded

// const promisesOne=new Promises((resolve,reject)=>{
//     console.log("Promise task 1");
//  resolve("PROMISE PASSED BYE USING RESOLVE");
//  let msg=true;
//  if(!msg==true){
//     console.log("message  using promises failed");
    
//  }else{
//     console.log("error............");
//  }
//  setTimeout(()=>{
//     console.log(resolve());
//  },2000)
// */
test().then((res)=>{
    console.log(res);
    })
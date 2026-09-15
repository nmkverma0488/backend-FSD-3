// create async task, function with main name two test callback and Promises inside function,
console.log("synchronous task");
const f1=()=>{
    console.log("f1");
}
const f2=()=>{
    console.log("f2");
}
function main(){
    console.log("this event loop");
    setTimeout(f1,10);
    setTimeout(f2,1000);
    newPromises((resolve,reject)=>{
 resolve("i am promises1")
    }).then((result)=>{
        console.log(result)

    })
    newPromises2((resolve,reject)=>{
        resolve("this is promosis2")
    }).then((res)=>{
        console.log(res);
    })
    f3();
}
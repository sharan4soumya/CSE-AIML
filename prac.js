//function aa(){
    //console.log("first");

//aa();
//(function (){
    //console.log("second")
//();

//() => {
    console.log("Third");


//let a=new Function(`console.log("Fourth")`);
//a()
function rollnumber(num, delay, nextroll){
    setTimeout(()=>{
        console.log("Roll number is ", num);
        if(nextroll) nextroll();
    }, delay);
}
rollnumber(12121, 1000, ()=>{
    rollnumber(12312, 2000, ()=>{
        rollnumber(12412, 3000, ()=>{
            rollnumber(12512, 4000);
        });
    });
})
const promise=new Promise((resolve, reject)=>{
    console.log("first");
    resolve("Promise resolved");
    reject("Promise Rejected");
});
promise.then(()=>{
    console.log("This is my Promise");
}).catch(()=>{
    console.log("This is my error page")
})
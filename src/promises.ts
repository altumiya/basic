function complexlogic(){
   return new Promise((resolved)=>{
        setTimeout(()=>{
           resolved("this is resolved") // this will run first
        }, 2000)
    })
}
complexlogic().then((data)=>{
    console.log(data)
    test2() 
})
function test2(){
    console.log("test2")
}

function complexlogic2():Promise<string>{
   return new Promise((resolved)=>{
        setTimeout(()=>{
           resolved("this is resolved") // this will run first
        }, 2000)
    })
}
complexlogic2().then((data:string)=>{
    console.log(data)
    test2() 
})

// we can also create by type and interface

type AsyncStringFn = () => Promise<string>;

function test4(): void {
  console.log("test2 called");
}

const complexlogic4: AsyncStringFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("this is resolved");
    }, 2000);
  });
};

complexlogic4().then((data: string) => {
  console.log(data);
  test4();
});

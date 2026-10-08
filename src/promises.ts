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


type apikeys={
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}
async function apicalling3():Promise<apikeys>{
    const result = await fetch('https://dummyjson.com/todos');
    const data = await result.json();
    
    return data
}
apicalling3().then((data)=>{
   console.log(data)
})

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message) // error handling in ts 
    }
}

// interface generics example with api promises

interface promise<T>{
    status : number,
    data :T
}

async function getSeat(): Promise<promise<{ seat: string }>> {
  return {
    status: 200,
    data: { seat: "avail" }
  };
}
async function main() {
  const resp = await getSeat();

  console.log("Status:", resp.status);
  console.log("Seat:", resp.data.seat);
}

main();
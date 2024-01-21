
let timer = 1000;
let counter = 1;

function b(val){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(val);
        }, val*1000)
    })

    return promise;
    
}

async function a(val){

    console.log("OK");

    

    for (let i = 0; i < val; i++) {
        
        let other = await b(i);
        console.log(other);

    }

    console.log("End");

}

a(5)
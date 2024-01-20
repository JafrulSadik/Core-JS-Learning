let payment = true;
let marks = 80;

function enroll(){

    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(payment){
                resolve("Payment successfull!");
            } else {
                reject("Payment is not completed.");
            }
        },3000)
    })
    
    return promise;
}


function progress(){
    console.log("Courses are ongoing...")

    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(marks>=80){
                resolve("You successfully completed the course.");
            } else {
                reject("You are failed.");
            }
        },2000)
    })

    return promise;
}

function getCertificate(){
    let promise = new Promise((resolve)=>{
        resolve("This is your certificate.")
    })
    return promise;
}

enroll()
    .then((value)=>{
        console.log(value);
    })
    .then(progress)
    .then((value)=>{
        console.log(value);
    })
    .then(getCertificate)
    .then((value)=>{
        console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })
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

async function dataFatch(){
    try {
        let enroll_data = await enroll()
        console.log(enroll_data);
        let progress_data = await progress()
        console.log(progress_data);
        let cer_data = await getCertificate()
        console.log(cer_data);
    } catch (error) {
        console.log(error);
    }
}

dataFatch()
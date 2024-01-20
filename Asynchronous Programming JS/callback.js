let payment = true;
let marks = 70;

function enroll(callback){
    setTimeout(()=>{
        if(payment){
            console.log("Payment successfull!");
            callback();
        } else {
            console.log("Payment is not completed.");
        }
    },3000)
}


function progress(callback){
    console.log("Courses are ongoing...")

    setTimeout(()=>{
        if(marks>=80){
            console.log("You successfully completed the course.");
            callback();
        } else {
            console.log("You are failed.");
        }
    },2000)
}

function getCertificate(){
    console.log("This is your certificate.");
}

enroll(function (){
    progress(getCertificate);
});

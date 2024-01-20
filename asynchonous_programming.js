let payment = true;
let marks = 80;

function enroll(){
    setTimeout(()=>{
        if(payment){
            console.log("Payment successfull!");
        } else {
            console.log("Payment is not completed.");
        }
    },3000)
}


function progress(){
    console.log("Courses are ongoing...")

    setTimeout(()=>{
        if(marks>=80){
            console.log("You successfully completed the course.");
        } else {
            console.log("You are failed.");
        }
    },2000)
}

function getCertificate(){
    console.log("This is your certificate.");
}

enroll();
progress();
getCertificate();
let a = {};

function process(){
    console.log(a);

    let res = fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        return response.json();
    }).then(function (data) {
        return data;
    }).catch(function (error) {
        console.warn(error);
    });

    console.log(res, "not ok");
    console.log("hello");

}

process()
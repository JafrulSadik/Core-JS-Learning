let list = document.querySelector('.list')
let btn = document.querySelector('.btn')

list.addEventListener("click",(event)=>{
    

    console.log(event.target);

    if(event.target.matches('li')){
        event.target.style.backgroundColor = 'teal'
    }
})


btn.addEventListener('click', ()=>{
    let li = document.createElement('li')
    li.innerText = "PHP"
    list.appendChild(li)
})


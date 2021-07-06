let a = document.querySelector('.card')
let b = document.getElementById('cardB')


function show(){
    a.classList.add('hide')
    b.classList.remove('hide')

}

function closed(){
    a.classList.remove('hide')
    b.classList.add('hide')
}
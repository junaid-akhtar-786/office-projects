let count = 0;
let show =  document.getElementById('cont')

function plus (){
    
    show.innerHTML = count+1
    count ++
}



function minus(){
    
    show.innerHTML = count-1
    count--
}

function reset(){
    count = 0
    show.innerHTML = count
}
let a = ['blue','red','green','black','purple','grey', 'yellow'];
let i = 0;
function change(){
    
    if(i < a.length -1){
        i++;
    }else{
        i = 0
    }
    document.getElementById('body').style.backgroundColor = a[i]
    document.getElementById('color').innerHTML=a[i]
    
}

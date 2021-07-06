
let btns =document.querySelectorAll(".ques-btn");

btns.forEach(function(btn){
    btn.addEventListener("click" ,function(e){
        let questions =e.currentTarget.parentElement.parentElement

        questions.classList.toggle("show")
    });
});
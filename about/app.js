
const btns = document.querySelectorAll('.btn');
const btnMain = document.querySelector('.btn-main');
const text = document.querySelectorAll('.text')

btnMain.addEventListener("click" , function(e){
    const id = e.target.dataset.id;
    if (id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        text.forEach( function(article){
            article.classList.remove("active")
        });
        const element = document.getElementById(id);
        element.classList.add("active")
    }
})
// navbar

const btn = document.querySelector('.btn')
const linkscontainer = document.querySelector('.link-cont')
const links = document.querySelector('.links')

function display () {
    linkscontainer.classList.toggle('showlinks')
    // const containerHeight = linkscontainer.getBoundingClientRect();
    // const linksHeight = links.getBoundingClientRect();
    // console.log (containerHeight);
    // console.log (linksHeight);
};

// set date

const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

//  *********fixed navbar*********
window.addEventListener('scroll' , function () {
    console.log(window.pageYOffset )
})

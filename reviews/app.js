let reviews = [
    {
        img: "images/image-1.jpg",
        name: "Domi Jhon",
        job: " Web Designer",
        coment: "andvbdgygs"

    }, 
    {
        img: "images/image-2.jpg",
        name: "Domi Jhon",
        job: " Web Designer",
        coment: "andvbdgygs"

    },
    {
        img: "images/image-3.jpg",
        name: "Jhon",
        job: " Web Designer",
        coment: "andvbdgygs"

    },
    {
        img: "images/image-4.jpg",
        name: "Mark",
        job: " Web Designer",
        coment: "andvbdgygs"

    },
    {
        img: "images/image-5.jpg",
        name: "gates",
        job: " Web Designer",
        coment: "andvbdgygs"

    }


]

let counter = 0;
let a = document.getElementById('review-prs')
let b = document.getElementById('names')
let c = document.getElementById('prof')
let d = document.getElementById('comments')

function next() {
    ++counter
    if (counter == (reviews.length )) {
        counter = 0;
    }
    a.src = reviews[counter].img
    b.innerHTML = reviews[counter].name
    c.innerHTML = reviews[counter].job
    d.innerHTML = reviews[counter].coment
    console.log("counter: ", counter);
    console.table(reviews[counter]);
}

function previous() {
    if (counter == 0) {
        counter = reviews.length ;
    }--counter
    a.src = reviews[counter].img
    b.innerHTML = reviews[counter].name
    c.innerHTML = reviews[counter].job
    d.innerHTML = reviews[counter].coment
    console.log("counter: ", counter);
    console.table(reviews[counter]);
}
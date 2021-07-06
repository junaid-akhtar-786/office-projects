const text = [
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum laudantium rem. Animi sunt dolores error corporis beatae omnis. Alias dicta, sunt consequuntur sed expedita voluptas nostrum ea. Minus, distinctio!",
"Ea earum laudantium rem. Animi sunt dolores error corporis beatae omnis. Alias dicta, sunt consequuntur sed expedita voluptas nostrum ea. Minus, distinctio!",
"3 sunt consequuntur sed expedita voluptas nostrum ea. Minus, distinctio!",
"3 sunt consequuntur sed expedita voluptas nostrum ea. Minus, distinctio!",
"3 sunt consequuntur sed expedita voluptas nostrum ea. Minus, distinctio!",
"3 sunt consequuntur sed expedita voluptas nostrum ea. Minus, distinctio!"
];


const form = document.querySelector ('.loremForm');
const amount = document.getElementById ("amount");
const result = document.querySelector (".lorem-text")

form.addEventListener ('submit' , function (e) {
    e.preventDefault()
    // console.log(e)
    const value =parseInt( amount.value);
    const random = Math.floor(Math.random() * text.length)
    console.log(random)
    // console.log  ( isNaN(value) );

    if (isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`
    } else{
        let tempText = text.slice(0 , value);
       tempText = tempText.map(function (item) {
        return `<p class="result"> ${item} <p/>`;
       }) 
       .join("");
       result.innerHTML = tempText;
    }


});
let menu = [
    {
        name : "Pari Pari Burger",
        category : "Burger",
        price : "Rs 250/=",
        img : "images/bugger-2.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : "Special Pizza",
        category : "Pizza",
        price : "Rs 550/=",
        img : "images/image-2.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : "Club Sandwich",
        category : "Sandwich",
        price : "Rs 200/=",
        img : "images/sd-2.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : "Zinger Burger",
        category : "Burger",
        price : "Rs 300/=",
        img : "images/bugger-3.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : "Chekan Thandori Pizza",
        category : "Pizza",
        price : "Rs 600/=",
        img : "images/image-3.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : "Beef Sandwich",
        category : "Sandwich",
        price : "Rs 250/=",
        img : "images/sd-3.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : "Beef Burger",
        category : "Burger",
        price : "Rs 190/=",
        img : "images/buger-1.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : " Chekan Fajita",
        category : "Pizza",
        price : "Rs 450/=",
        img : "images/pizza-1.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    },
    {
        name : "Chekan Malai Sandwich ",
        category : "Sandwich",
        price : "Rs 220/=",
        img : "images/sd-1.jpg",
        desc : 'officiis delectus adipisci suscipit expedita! Non ex adipisci sunt laboriosam dolorem deleniti'

    }
];

let all = document.querySelector('.all-main');
let btnDiv = document.querySelector(".btns")



// load items



window.addEventListener('DOMContentLoaded' , function(){
    showItems(menu);
    showbtns ();    
});

// filteritem





function showItems (menuItems) { 
    let show = menuItems.map(function(item){

        return `<div class="card">
        <div class="images">
            <img src=${item.img} alt=${item.name}>
        </div>
        <div class="title">
            <div>
                <h4>${item.name} </h4>
            </div>
            <div>
                <h4>${item.price}</h4>
            </div>
        </div>
        <div>
            <p>${item.desc}</p>
        </div>
    </div>`;
    });
    show = show.join("")
    
    all.innerHTML = show   
};



function showbtns () {
    let categoeies = menu.reduce(function (values , item) {
        if (!values.includes(item.category)){
            values.push(item.category )
        };
        return values
    } ,["All"] );
        let categoryBtn = categoeies.map(function (category) {
            return `   <button data-id="${category}" class="btn">${category}</button>`
        })
        .join("");
        btnDiv.innerHTML = categoryBtn;
        let btns = btnDiv.querySelectorAll(".btn");
        btns.forEach(function(butn){
            butn.addEventListener('click' , function (e){
                let category = e.currentTarget.dataset.id;
                let menuCategory =menu.filter(function (menuItems) {
                    
                    if(menuItems.category == category){
        
                        return menuItems;
                    };
        
                });
            
                if(category == "All"){
                    showItems(menu);
                }else {
                    showItems(menuCategory);
                };
            });
        });  
};
 
 const form = document.querySelector('.form');
 const alert = document.querySelector('.alert');
 const grocery = document.getElementById('grocery');
 const submitBtn =document.querySelector('.submit-btn');
 const cont = document.querySelector('.cont');
 const list = document.querySelector('.list');
 const clearBtn = document.querySelector('.clear-btn');


 let editElement;
 let editFlag = false;
 let editID = "";


//  buttons events
 form.addEventListener ('submit' , addItem);

 clearBtn.addEventListener ('click',clearitems);

// load
window.addEventListener ('DOMContentLoaded' , setupItems)


 function addItem (e) {
        e.preventDefault();
        const value = grocery.value;
        const id = (new Date ().getTime()).toString();

        if ( value &&  !editFlag ) {
            createListItem (id ,value)
            displayAlert(`${value.toUpperCase()} Added To The List` , 'success' );

                // show cont

                cont.classList.add('show');

                //add to local storage
                addToLocalStorage (id , value);


                // set back to default

                setBackToDefault();

        }
        else if ( value && editFlag ) {
            editElement.innerHTML = value ;
            displayAlert ('Value Changed' , 'success');
            //edit local storage
            editLocalStorage(editID , value);
            
            setBackToDefault ();
        }
        else {
                displayAlert ('Please Enter Value' , 'danger');
        };
        
        
        
 };


 // display alert color

 function displayAlert (text , classname) {
    alert.textContent = text;
    alert.classList.add (classname);
    
    // remove alret
    
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(classname);
    },2000);
};





function clearitems (){
    const items = document.querySelectorAll('.items');
    
    if (items.length > 0) {
        items.forEach ( function (item){
            list.removeChild(item);
        });
    };
    cont.classList.remove('show');
    displayAlert ('Empty List' , 'danger');
    setBackToDefault();
    // localStorage.removeItem('list')
};
// edit function

function editItem (e){
    const elements = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = elements.dataset.id;
    submitBtn.textContent = 'Update'


};

// delete function

function deleteItem (e){
    const elements = e.currentTarget.parentElement.parentElement;
    const id = elements.dataset.id;
    list.removeChild(elements);
    if (list.children.length === 0 ) {
        cont.classList.remove('show');
    };
    displayAlert ('Item Removed' , 'danger');
    setBackToDefault();
// remove form local storage
removeFromLocalStorage (id) ;

};

// set back to default

function setBackToDefault () {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = 'submit';
};
//*************local storage**********

function addToLocalStorage (id , value ) {
    const grocery = {id , value};
    let items = getLocalStorage ()
    items.push(grocery)
    localStorage.setItem('list' , JSON.stringify(items));
};



function removeFromLocalStorage ( id ) {
    let items = getLocalStorage ();
    items = items.filter(function (item){
        if ( item.id !== id ) {
            return item;
        };
    });
    localStorage.setItem('list' , JSON.stringify(items));
};


function editLocalStorage ( editID , value ) {
    let items = getLocalStorage ();
    items = items.map(function (item){
        if (item.id == id){
            item.value = value;
        }
        return item;
    });

    localStorage.setItem('list' , JSON.stringify(items));

};

function getLocalStorage () {
    return localStorage.getItem('list')
    ?JSON.parse(localStorage.getItem('list'))
    :[];
}


// localStorage API
//setItems
//getItems
//removeItems
// save as String

// localStorage.setItem('orange', JSON.stringify(['item','item2']
// ));
// const oranges = JSON.parse(localStorage.getItem('orange'))
// // console.log(oranges);

// localStorage.removeItem('orange')


// set up item

function setupItems () {
    let items = getLocalStorage();
    if ( items.length > 0) {
        items.forEach(function (item){
            createListItem (item.id , item.value)
        });
cont.classList.add('show')
    }
}


function createListItem ( id ,value) {
    const element = document.createElement('article');
    element.classList.add('items');

    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;

    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-cont">
        <button class="edit-btn btn">Edited</button>
        <button class="delete-btn btn">Delete</button>
    </div>`;

    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    editBtn.addEventListener ( 'click' , editItem );
    deleteBtn.addEventListener ( 'click' , deleteItem );

    //apend child
        list.appendChild(element);

}


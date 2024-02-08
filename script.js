"use strict";



// ----- Input
const inputElement = document.getElementById('todo');
const addButton = document.querySelector('.btn');
const ulItems = document.querySelector('.list');
const clear = document.getElementById('clear');
const form = document.getElementById('form');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const valueInput = inputElement.value.trim(); 

    if (valueInput !== "") {
        const li = document.createElement('li');

        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fas', 'fa-trash-alt'); 
        deleteBtn.style.color = '#FFD43B';
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });

        li.textContent = valueInput;

        li.appendChild(deleteBtn);
        ulItems.appendChild(li);

        inputElement.value = ""; 
    }
});

clear.addEventListener('click', function () {
    ulItems.innerHTML = "";
});


// ------ Burger Bar


const nav = document.getElementById('navBar');



//  nav

const divBar = document.getElementById('menu')
divBar.style.backgroundImage = "url('img/fashion.jpg')"; 
divBar.style.backgroundSize = "cover";
divBar.style.backgroundPosition = "center";


const burgerIcon = document.getElementById('burgerIcon');

burgerIcon.addEventListener('click',function(){
  this.classList.toggle("close");
  divBar.classList.toggle("overlay");
});





// backgroundImg


const newBackgroundImage = "url(img/block.jpg)"; 

document.body.style.backgroundImage = newBackgroundImage;
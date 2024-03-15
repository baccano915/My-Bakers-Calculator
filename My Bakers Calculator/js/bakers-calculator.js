//Navbar Code

const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    //State
let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    } else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
});

mobileLinks.forEach(Link => {
    Link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
});

//Resizer Code

document.getElementById('multiplyBtn').addEventListener('click', function() {
    resizeRecipe('*');
});

document.getElementById('divideBtn').addEventListener('click', function() {
    resizeRecipe('/');
});

function resizeRecipe(operator) {
    let ingredient = document.getElementById('ingredient').value;
    let quantity = parseFloat(document.getElementById('quantity').value);
    let multiplier = parseFloat(document.getElementById('multiplier').value);

    if (isNaN(quantity) || isNaN(multiplier)) {
        alert('Please enter valid numbers for quantity and multiplier.');
        return;
    }

    let newQuantity;
    if (operator === '*') {
        newQuantity = quantity * multiplier;
    } else if (operator === '/') {
        if (multiplier === 0) {
            alert('Cannot divide by zero.');
            return;
        }
        newQuantity = quantity / multiplier;
    }

    let newRecipe = document.getElementById('new-recipe');
    let newIngredient = document.createElement('p');
    newIngredient.textContent = ingredient + ' : ' + newQuantity;

    // Adding a class to the <p> element
    newIngredient.classList.add('new-recipe__ingredient');

    // Add a delete button next to the <p> element
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('resizer__btn')
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function(){
        newRecipe.removeChild(newIngredient);
    };
    newIngredient.appendChild(deleteBtn);
    newRecipe.appendChild(newIngredient);   
}

//Favorite Recipe Code

   



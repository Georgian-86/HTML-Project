let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listcart = document.querySelector('.listcard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{body.classList.remove('active');
}) 
let products = [
    {
        Id: 1,
        name: 'PRODUCT NAME 1',
        image: 'b14.png',
        price: '$20'
    },
    {
        Id: 2,
        name: 'PRODUCT NAME 2',
        image: 'b16.jpg',
        price: '$20',
    },
    {
        Id: 3,
        name: 'PRODUCT NAME 3',
        image: 'b17.jpg',
        price: '$20'
    },
    {
        Id: 4,
        name: 'PRODUCT NAME 4',
        image: 'b17.jpg',
        price: '$20'
    },
    {
        Id: 5,
        name: 'PRODUCT NAME 5',
        image: 'b17.jpg',
        price: '$20'
    },
    {
        Id: 6,
        name: 'PRODUCT NAME 6',
        image: 'b17.jpg',
        price: '$20'
    },
];
let litCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML= `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocalString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button>
    `;
    list.appendChild(newDiv);

    })
}
initApp();

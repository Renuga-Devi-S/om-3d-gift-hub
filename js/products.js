const grid = document.getElementById("productsGrid");

function displayProducts(items){

grid.innerHTML="";

items.forEach(product=>{

grid.innerHTML+=`

<div class="product">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<a class="whatsapp"

href="https://wa.me/917639702817?text=Hi, I'm interested in ${encodeURIComponent(product.name)}"

target="_blank">

Order Now

</a>

</div>

</div>

`;

});

}

// displayProducts(products);
const params = new URLSearchParams(window.location.search);

const selectedCategory = params.get("category");

if(selectedCategory){

    displayProducts(
        products.filter(product => product.category === selectedCategory)
    );

}else{

    displayProducts(products);

}
if(selectedCategory){

    document.querySelectorAll(".filter").forEach(button=>{

        button.classList.remove("active");

        if(button.dataset.category===selectedCategory){

            button.classList.add("active");

        }

    });

}

// Search

document.getElementById("search").addEventListener("keyup",(e)=>{

const value=e.target.value.toLowerCase();

displayProducts(

products.filter(p=>

p.name.toLowerCase().includes(value))

);

});

// Category Filter

document.querySelectorAll(".filter").forEach(btn=>{

btn.onclick=()=>{

// document.querySelector(".active").classList.remove("active");

const active=document.querySelector(".filter.active");

if(active){

    active.classList.remove("active");

}

////

btn.classList.add("active");

const cat=btn.dataset.category;

if(cat==="all"){

displayProducts(products);

}else{

displayProducts(products.filter(p=>p.category===cat));

}

}

});
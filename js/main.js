
// Open_Cart and Close_Cart

let cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active");
}

function close_cart() {
    cart.classList.remove("active");
}

// Add Items In Cart

var all_proudects_json;

var item_in_cart = document.querySelector(".item_in_cart");
let proudect_cart = [];

function addToCart(id, btn) {
    proudect_cart.push(all_proudects_json[id]);
    btn.classList("active");

    console.log(id)
    getCart();
}

function getCart() {
    let items_c = "";
    for (let i = 0; i < proudect_cart.length; i++) {
        items_c += `
            <div class="item_cart">
                <img src="${proudect_cart[i].img}" alt="">
                <div class="content">
                    <h4>${proudect_cart[i].name}</h4>
                    <p class="price">$${proudect_cart[i].price}</p>
                </div>
                <button onclick = "removeCart(${i})" class="delete_cart"><i  class="fa-solid fa-trash-can"></i></button>
            </div>
        `

    }
    item_in_cart.innerHTML = items_c;
}


function removeCart(index) {
    proudect_cart.splice(index,1);
    getCart();
}
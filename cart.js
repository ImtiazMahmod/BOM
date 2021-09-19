//retrive local storage and display
const retrieveLocalStorage=()=>{
    const cart = getProduct();
    for (const product in cart) {
        productList(product);
    }   
}

const addToCart=()=>{
    const productName = document.getElementById('product-name');
    const product = productName.value;
    //empty product add to cart
    if(!product){
        return;
    }

    //display product on UI
    productList(product);
    //add to local storage
    addProductToCart(product);

    productName.value = '';
}
//add item to cart as list
const productList=(product)=>{
    const list = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText= product;
    list.appendChild(li);
}
//get product as object
const getProduct = ()=>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj={};
    }
    return cartObj;
}

// set to local storage
const addProductToCart = (name)=>{
    const cart = getProduct();
    if(cart[name]){
        cart[name] = cart[name] + 1;
    }
    else{
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
retrieveLocalStorage();

const placeOrder=()=>{
    document.getElementById('product-list').textContent = '';

    localStorage.removeItem('cart')
}
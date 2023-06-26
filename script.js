// Shopping cart functionality
let cart = [];

function addToCart(productId) {
    // Add the selected product to the cart
    cart.push(productId);
    updateCart();
    alert('Product added to cart!');
}

function showCart() {
    // Store the cart data in localStorage and redirect to the cart.html page
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}

function updateCart() {
    // Update the cart count in the header
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

// Check if the current page is the cart.html page
if (window.location.pathname.endsWith('cart.html')) {
    // Retrieve the cart data from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    const cartTotal = document.getElementById('cartTotal');
    const totalPrice = calculateTotalPrice();
    cartTotal.textContent = totalPrice.toFixed(2);

    updateCartItems();
}

function updateCartItems() {
    // Update the cart items on the cart.html page
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Product ' + cart[i];
        cartItems.appendChild(listItem);
    }
}

function calculateTotalPrice() {
    // Calculate the total price of the items in the cart
    let totalPrice = 0;

    // Here, you would need to fetch the actual product prices from a backend or database
    // For simplicity, let's assume all products have a price of $9.99
    const productPrice = 9.99;

    for (let i = 0; i < cart.length; i++) {
        totalPrice += productPrice;
    }

    return totalPrice;
}

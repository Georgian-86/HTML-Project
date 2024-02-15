document.addEventListener("DOMContentLoaded", function () {
    // Sample cart data (you can replace this with actual data from your backend)
    const cartItems = [
        { name: "Product 1", price: 19.99, quantity: 2 },
        { name: "Product 2", price: 24.99, quantity: 1 }
    ];

    // Function to display cart items on the page
    function displayCartItems() {
        const cartItemsContainer = document.getElementById("cart-items");

        cartItems.forEach(item => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");

            cartItemDiv.innerHTML = `
                <img src="product_image.jpg" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            `;

            cartItemsContainer.appendChild(cartItemDiv);
        });
    }

    // Function to calculate and display cart summary
    function displayCartSummary() {
        const cartSummaryContainer = document.getElementById("cart-summary");

        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

        cartSummaryContainer.innerHTML = `
            <h2>Cart Summary</h2>
            <p>Total Items: ${totalItems}</p>
            <p>Total Price: $${totalPrice.toFixed(2)}</p>
        `;
    }

    // Event listener for the "Proceed to Checkout" button
    function checkout() {
        const confirmation = confirm("Are you sure you want to proceed to checkout?");
        
        if (confirmation) {
            alert("Redirecting to checkout page");
            // Add code to redirect to the checkout page
        }
    }

    // Initialize the cart page
    displayCartItems();
    displayCartSummary();

    // Attach event listener to the checkout button
    const checkoutButton = document.querySelector("button");
    checkoutButton.addEventListener("click", checkout);
});

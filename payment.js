// Sample cart data (from previous cart example)
const cart = [
    { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
];

// Function to display the order summary
function displayOrderSummary() {
    const orderItemsContainer = document.getElementById("order-items");
    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <p>${item.name} (${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        orderItemsContainer.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById("order-total-price").textContent = totalPrice.toFixed(2);
}

// Handle the payment form submission
function handlePayment(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    // Validate form fields (basic validation for this example)
    if (!fullName || !email || !address || !cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate a successful payment (no actual payment processing)
    document.getElementById("payment-form").style.display = "none";  // Hide the payment form
    document.getElementById("payment-success").style.display = "block";  // Show the success message

    // Normally, you'd send the data to a backend for processing payment here

    console.log("Payment Successful!");
}

// Call the function to display the order summary on page load
window.onload = function() {
    displayOrderSummary();
};

  // Simulated cart
  const cart = [];

  // Add to Cart
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      const product = this.dataset.product;
      const price = this.dataset.price;
      cart.push({ product, price });
      alert(`${product} added to cart!`);
      console.log(cart);
    });
  });

  // Login Function
  function loginUser(email, password) {
    // Simulated login check
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials.");
    }
  }

  // Register Function
  function registerUser(name, email, password) {
    // Simulated registration
    alert(`Welcome, ${name}! Your account has been created.`);
    console.log({ name, email, password });
  }

  // Example usage:
  // loginUser("user@example.com", "password123");
  // registerUser("John Doe", "john@example.com", "pass456");

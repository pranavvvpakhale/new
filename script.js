const products = [
  {
    id: 1,
    name: "HP Pavilion 15",
    category: "Laptops",
    description:
      "Reliable performance laptop with 12th Gen Intel core and Full HD display for work and study.",
    price: 62999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Dell Inspiron 14",
    category: "Laptops",
    description:
      "Slim and elegant notebook packed with SSD speed, long battery life, and smooth multitasking.",
    price: 58999,
    rating: 4.4,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRwWUU3qA89Wu94HP7HOchHeVW3pHH33X7qLbsDchzISMhDtzLCV0O7ap6X0xdPxL6NsSdTe_HwYe13F1hgMeriilAC5fDLU5nIF_kNSlZkA-osCxuDLlDUfSrOpBGdVoAidUUsCuxRAw&usqp=CAc",
  },
  {
    id: 3,
    name: "Lenovo IdeaPad Slim 5",
    category: "Laptops",
    description:
      "Lightweight laptop with vivid display and AMD Ryzen power, ideal for everyday productivity.",
    price: 54999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    category: "Mobiles",
    description:
      "Premium smartphone with powerful camera, vibrant AMOLED screen, and flagship performance.",
    price: 74999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "iPhone 15",
    category: "Mobiles",
    description:
      "Apple's latest iPhone featuring smooth iOS experience, advanced camera, and all-day battery.",
    price: 79900,
    rating: 4.8,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0tLVg7SXTcK0Pk8kNaeKUiO9sZdHaDG7DjXxwkYSTAooS8Nr3NrDwdtFhRf16AGKutZiTDdH2L3iyOTht5gVtJp6amImr0QFq_nLbRTzoqj3cTx6CFm3RqdVzfqssV2SJ3hgu5Q&usqp=CAc",
  },
  {
    id: 6,
    name: "OnePlus 12R",
    category: "Mobiles",
    description:
      "Speed-focused smartphone with ultra-fast charging, fluid display, and clean user interface.",
    price: 42999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Sony Headphones WH-CH720N",
    category: "Accessories",
    description:
      "Noise-cancelling wireless headphones with deep bass, crisp audio, and lightweight comfort.",
    price: 8999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Logitech Wireless Mouse",
    category: "Accessories",
    description:
      "Ergonomic precision mouse with silent clicks, seamless tracking, and compact design.",
    price: 1299,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Mechanical RGB Keyboard",
    category: "Accessories",
    description:
      "Responsive mechanical keyboard with tactile switches and customizable RGB lighting.",
    price: 3499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "Mi Power Bank 20000mAh",
    category: "Accessories",
    description:
      "High-capacity power bank with dual output ports and fast charging support.",
    price: 2199,
    rating: 4.2,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 11,
    name: "Noise Smartwatch ColorFit",
    category: "Accessories",
    description:
      "Stylish smartwatch with heart-rate tracking, sports modes, and bright touch display.",
    price: 2999,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
];

const cartKey = "sparkCart";

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initLogin();
  initHome();
  initCart();
  initContactForm();
  updateCartBadge();
});

function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 550);
}

function initLogin() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
      localStorage.setItem("sparkUser", email);
      alert("Login successful! Redirecting to home page.");
      window.location.href = "index.html";
      return;
    }

    alert("Please enter a valid email and password.");
  });
}

function initHome() {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return;

  let selectedCategory = "All";
  let query = "";

  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      categoryButtons.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      renderProducts();
    });
  });

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (event) => {
    query = event.target.value.toLowerCase();
    renderProducts();
  });

  renderProducts();

  function renderProducts() {
    const filteredProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const searchMatch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      return categoryMatch && searchMatch;
    });

    productGrid.innerHTML = filteredProducts
      .map(
        (product) => `
          <article class="product-card">
            <div class="product-img-wrap">
              <img src="${product.image}" alt="${product.name}">
              <button class="wishlist-btn" title="Wishlist (UI only)">♡</button>
            </div>
            <div class="product-content">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="rating">${renderStars(product.rating)} (${product.rating})</div>
              <div class="price-row">
                <span class="price">₹${product.price.toLocaleString("en-IN")}</span>
                <button class="btn primary-btn add-cart-btn" data-id="${product.id}">Add to Cart</button>
              </div>
            </div>
          </article>
        `,
      )
      .join("");

    document.querySelectorAll(".add-cart-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(Number(btn.dataset.id));
      });
    });
  }
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return `${"★".repeat(fullStars)}${hasHalf ? "☆" : ""}${"✩".repeat(emptyStars)}`;
}

function getCart() {
  return JSON.parse(localStorage.getItem(cartKey) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const foundItem = cart.find((item) => item.id === productId);

  if (foundItem) {
    foundItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadge();
  alert("Added to cart!");
}

function updateCartBadge() {
  const countElement = document.getElementById("cartCount");
  if (!countElement) return;
  const totalItems = getCart().reduce((sum, item) => sum + item.quantity, 0);
  countElement.textContent = totalItems;
}

function initCart() {
  const cartContainer = document.getElementById("cartItems");
  if (!cartContainer) return;

  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.addEventListener("click", () => {
    const cart = getCart();
    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }
    alert("Order Placed Successfully");
    localStorage.removeItem(cartKey);
    renderCart();
    updateCartBadge();
  });

  renderCart();

  function renderCart() {
    const cart = getCart();
    if (!cart.length) {
      cartContainer.innerHTML = `
        <div class="empty-cart">
          <h3>Your cart is empty.</h3>
          <p>Add products from the home page to continue shopping.</p>
        </div>
      `;
      updateSummary(0, 0);
      return;
    }

    const cartDetails = cart.map((item) => {
      const product = products.find((prod) => prod.id === item.id);
      return { ...product, quantity: item.quantity };
    });

    cartContainer.innerHTML = cartDetails
      .map(
        (item) => `
          <article class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <h3>${item.name}</h3>
              <p>₹${item.price.toLocaleString("en-IN")} each</p>
              <div class="cart-controls">
                <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
                <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
              </div>
            </div>
            <strong>₹${(item.price * item.quantity).toLocaleString("en-IN")}</strong>
          </article>
        `,
      )
      .join("");

    document.querySelectorAll(".qty-btn, .remove-btn").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateCartItem(Number(btn.dataset.id), btn.dataset.action),
      );
    });

    const itemCount = cartDetails.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartDetails.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    updateSummary(itemCount, subtotal);
  }

  function updateCartItem(productId, action) {
    let cart = getCart();
    const item = cart.find((entry) => entry.id === productId);
    if (!item) return;

    if (action === "increase") item.quantity += 1;
    if (action === "decrease") item.quantity = Math.max(1, item.quantity - 1);
    if (action === "remove")
      cart = cart.filter((entry) => entry.id !== productId);

    saveCart(cart);
    renderCart();
    updateCartBadge();
  }
}

function updateSummary(totalItems, subtotal) {
  const subtotalElement = document.getElementById("subtotal");
  const totalItemsElement = document.getElementById("totalItems");
  const totalPriceElement = document.getElementById("totalPrice");
  if (!subtotalElement || !totalItemsElement || !totalPriceElement) return;

  const delivery = subtotal > 0 ? 99 : 0;
  const total = subtotal + delivery;

  totalItemsElement.textContent = totalItems;
  subtotalElement.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  document.getElementById("delivery").textContent =
    `₹${delivery.toLocaleString("en-IN")}`;
  totalPriceElement.textContent = `₹${total.toLocaleString("en-IN")}`;
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(
      "Thanks for contacting Spark Electronics. We will get back to you soon!",
    );
    contactForm.reset();
  });
}

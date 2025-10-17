// Product data
const products = [
    // Electronics
    { id: 1, name: "i-phone XR", price: 34999, category: "electronics", image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80", oldPrice: 42999, rating: 4.5, featured: false, flashSale: true },
    { id: 2, name: "lenovo  Laptop 15.6", price: 112999, category: "electronics", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", oldPrice: 129999, rating: 4, featured: false, flashSale: true },
    { id: 3, name: "Smart Watch Series 5", price: 24999, category: "electronics", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80", oldPrice: 29999, rating: 5, featured: false, flashSale: true },
    { id: 4, name: "Wireless  Headphones", price: 17999, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", oldPrice: 22999, rating: 4.5, featured: false, flashSale: true },
    { id: 5, name: "Bluetooth Speaker", price: 8999, category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80", oldPrice: 11999, rating: 4, featured: false, flashSale: true },
    { id: 6, name: " Sony 4K Smart TV 55 inch", price: 64999, category: "electronics", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", oldPrice: 79999, rating: 4.5, featured: false, flashSale: true },
    
    // Health & Beauty
    { id: 7, name: "Body Lotion", price: 999, category: "health", image: "https://images-na.ssl-images-amazon.com/images/I/31G9bnw7OpL.jpg", oldPrice: null, rating: 4.5, featured: true, flashSale: true },
    { id: 8, name: "Electric Toothbrush", price: 5999, category: "health", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVDkJq4y4u3SipYXiqnbxYJhf23QzIDNKvg&s", oldPrice: 7999, rating: 4.5, featured: false, flashSale: true },
    { id: 9, name: "Hair Dryer ", price: 7999, category: "health", image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80", oldPrice: 9999, rating: 4, featured: false, flashSale: true },
    { id: 10, name: "Sanitary pads Bin", price: 4599, category: "health", image: "https://m.media-amazon.com/images/I/71ak2ETXqIL._UF1000,1000_QL80_.jpg", oldPrice: 5999, rating: 4, featured: false, flashSale: false },
    { id: 11, name: "Makeup Kit", price: 3499, category: "health", image: "https://thetoypalace.co.ke/wp-content/uploads/2024/09/Make-Up-Kit-1.jpg", oldPrice: null, rating: 4.5, featured: true, flashSale: false },
    { id: 12, name: "Essential Oil Diffuser", price: 3999, category: "health", image: "https://i5.walmartimages.com/seo/Durcord-Essential-Oil-Diffuser-Cool-Mist-Humidifier-and-Air-Aroma-Diffuser-with-7-Colors-Flame-Volcano-Light-for-Spa-Yoga-Christmas-Gift-Black_f614acdc-faeb-458a-94c1-620befa3986c.9b2680be7daf3bc71ceeca08d7993373.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", oldPrice: 4999, rating: 4, featured: false, flashSale: false },
    
    // Fashion
    { id: 13, name: "Running Sneakers", price: 7499, category: "fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", oldPrice: null, rating: 5, featured: true, flashSale: false },
    { id: 14, name: "Leather Jacket", price: 12999, category: "fashion", image: "https://images.cdn.inspogroup.net/pCSKZKGU0knVMe5sKjajr1DYLUQAdsXaixSjmFO1YEo/g:ce/trim:10/h:440/w:330/czM6L/y9zdH/lsaWdodC1pbWctcHJvY2Vzc2luZy9waG90b2JveC9mMDE1OTg3ZDFiZjI2NzIwODJkOTA3OTc4Mzk1OWZkMy5qcGc", oldPrice: 15999, rating: 4.5, featured: false, flashSale: true },
    { id: 15, name: "Designer Handbag", price: 18999, category: "fashion", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80", oldPrice: 22999, rating: 4, featured: false, flashSale: true },
    { id: 16, name: "Men's Casual Shirt", price: 3999, category: "fashion", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80", oldPrice: 4999, rating: 4, featured: false, flashSale: false },
    { id: 17, name: "Cargo Pants", price: 5999, category: "fashion", image: "https://hiii-style.com/cdn/shop/files/A90D1ADC-D22A-40C0-8178-C7A4331170BA.jpg?v=1725111460", oldPrice: 7999, rating: 4.5, featured: true, flashSale: false },
    { id: 18, name: "Necklaces", price: 2999, category: "fashion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaovx3UVi5MI-AHlF2N8kOghEZR8oxlUihNw&s", oldPrice: 3999, rating: 4, featured: false, flashSale: false },
    
    // Home & Kitchen
    { id: 20, name: "Air Fryer 5L", price: 8999, category: "home", image: "https://hotpoint.co.ke/media/cache/5f/c1/5fc13dcf08785e63768fba29a12f9acc@2x.webp", oldPrice: 11999, rating: 4.5, featured: false, flashSale: true },
    { id: 19, name: "Smart Home Hub", price: 15999, category: "home", image: "https://hips.hearstapps.com/hmg-prod/images/best-smart-home-hubs-65d7a3803bfdb.jpg", oldPrice: null, rating: 4, featured: true, flashSale: false },
    { id: 21, name: "Coffee Maker", price: 12999, category: "home", image: "https://m.media-amazon.com/images/I/61x2BKrHBKL._UF894,1000_QL80_.jpg", oldPrice: 15999, rating: 4, featured: false, flashSale: true },
    { id: 22, name: "Blender 1000W", price: 6999, category: "home", image: "https://m.media-amazon.com/images/I/719V97VTR-L._AC_SL1500_.jpg", oldPrice: 8999, rating: 4, featured: false, flashSale: false },
    { id: 23, name: "Bedding Set King Size", price: 12999, category: "home", image: "https://images.thdstatic.com/productImages/b1761dda-d310-452f-aacf-c0de65d40c21/svn/shatex-bedding-sets-j22362vk-64_600.jpg", oldPrice: 15999, rating: 4.5, featured: true, flashSale: false },
    { id: 24, name: "Cookware Set 10-Piece", price: 18999, category: "home", image: "https://mobigear.co.ke/wp-content/uploads/2024/01/12-Pieces-Of-Stainless-Steel-Cookware-Set-6-Kinds-Of-Kitchen-Pot-Combination-Frying-Pan-Soup.jpeg_.webp", oldPrice: 22999, rating: 4, featured: false, flashSale: false },
    
    // Phones & Tablets
    { id: 25, name: "Nokia Tablet Pro 10.5 inch", price: 45999, category: "phones", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", oldPrice: 52999, rating: 4.5, featured: false, flashSale: true },
    { id: 26, name: "Samsung M16 5G", price: 18999, category: "phones", image: "https://www.phonegradekenya.com/web/image/product.template/17787/image_1920?unique=38208bb", oldPrice: 22999, rating: 4, featured: false, flashSale: true },
    { id: 27, name: "iPhone  11 Promax Case", price: 1999, category: "phones", image: "https://www.phonegradekenya.com/web/image/product.template/7824/image_1920?unique=25abe5b", oldPrice: 2999, rating: 4, featured: false, flashSale: false },
    { id: 28, name: "Wireless Earbuds", price: 8999, category: "phones", image: "https://cdn-img.oraimo.com/fit-in/360x360/KE/product/2025/03/30/IMG_0973.png", oldPrice: 11999, rating: 4.5, featured: true, flashSale: false },
    { id: 29, name: " XiaomiPower Bank 20000mAh", price: 4999, category: "phones", image: "https://www.phonestablets.co.ke/wp-content/uploads/2023/07/Mi-20000-mAh-Powerbank-50W.webp", oldPrice: 6999, rating: 4, featured: false, flashSale: false },
    { id: 30, name: "Phone Stand Adjustable", price: 1499, category: "phones", image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/0304881/1.jpg?4121", oldPrice: 1999, rating: 4, featured: false, flashSale: false },
    
    // Computing
    { id: 31, name: "Mercedes Gaming Laptop 3060", price: 149999, category: "computing", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80", oldPrice: 169999, rating: 4.5, featured: false, flashSale: true },
    { id: 32, name: "Wireless Keyboard & Mouse", price: 6999, category: "computing", image: "https://cdn-shop.adafruit.com/970x728/1738-03.jpg", oldPrice: 8999, rating: 4, featured: false, flashSale: true },
    { id: 33, name: "External Hard Drive 2TB", price: 8999, category: "computing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYv2sOx-b2tqrguovDkkjnJ6VC6yV2O33CNg&s", oldPrice: 11999, rating: 4, featured: false, flashSale: false },
    { id: 34, name: " Samsung Monitor 27 inch 4K", price: 34999, category: "computing", image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", oldPrice: 42999, rating: 4.5, featured: true, flashSale: false },
    { id: 35, name: "Webcam HD 1080p", price: 5999, category: "computing", image: "https://m.media-amazon.com/images/I/61dAkngibfL._UF1000,1000_QL80_.jpg", oldPrice: 7999, rating: 4, featured: false, flashSale: false },
    { id: 36, name: "Laptop Backpack", price: 4999, category: "computing", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", oldPrice: 6999, rating: 4, featured: false, flashSale: false },
    
    // Groceries
    { id: 37, name: "Fresh Spinach", price: 99, category: "groceries", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", oldPrice: null, rating: 4.5, featured: false, flashSale: false },
    { id: 38, name: "Organic Kales", price: 129, category: "groceries", image: "https://kakilaorganics.co.ke/wp-content/uploads/2021/05/kale-curly_510x.progressive.jpg", oldPrice: null, rating: 4, featured: false, flashSale: false },
    { id: 39, name: "Ripe Mangoes", price: 79, category: "groceries", image: "https://www.simplyrecipes.com/thmb/dK-YBl5B-vSHZcjMI98VEZovdNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-How-Pick-mangos-LEAD-01-e0919f6832e14d248f66431e955fa521.jpg", oldPrice: 99, rating: 4.5, featured: false, flashSale: true },
    { id: 40, name: "Fresh Coriander", price: 49, category: "groceries", image: "https://i.guim.co.uk/img/media/3c877e09cca9e001abe9d867f09cde04c3a8599e/250_214_4646_2788/master/4646.jpg?width=1200&quality=85&auto=format&fit=max&s=27742b78772a56a60bb8cc9d5e68d9b1", oldPrice: null, rating: 4, featured: false, flashSale: false },
    { id: 41, name: "Zucchini", price: 89, category: "groceries", image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/zucchini-benefits-1200x628-facebook-1200x628.jpg", oldPrice: null, rating: 4, featured: false, flashSale: false },
    { id: 42, name: "Fresh Onions", price: 69, category: "groceries", image: "https://d16zmt6hgq1jhj.cloudfront.net/product/9304/Onion%20Prepacked%20Red.jpg", oldPrice: null, rating: 4, featured: false, flashSale: false },
    { id: 43, name: "Ripe Tomatoes", price: 59, category: "groceries", image: "https://www.mashed.com/img/gallery/the-absolute-best-way-to-fix-unripe-tomatoes/intro-1668529017.jpg", oldPrice: null, rating: 4.5, featured: false, flashSale: false },
    { id: 44, name: "Avocados", price: 49, category: "groceries", image: "https://woodstockfarmersmarket.com/wp-content/uploads/2024/04/PXL_20240411_155223163.MP_-scaled-e1712853746865.jpg", oldPrice: 69, rating: 4, featured: true, flashSale: true },
    { id: 45, name: "Bananas", price: 39, category: "groceries", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80", oldPrice: null, rating: 4, featured: false, flashSale: false },
    { id: 46, name: "Oranges", price: 79, category: "groceries", image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", oldPrice: 99, rating: 4.5, featured: false, flashSale: true }
];

// Dummy order data for tracking simulation
const orders = [
    { id: 'BPS-12345', status: 'Shipped', estimatedDelivery: '2 days', customer: 'testuser', items: [{ name: 'i-phone XR', quantity: 1 }] },
    { id: 'BPS-67890', status: 'Processing', estimatedDelivery: '4 days', customer: 'testuser', items: [{ name: 'Leather Jacket', quantity: 1 }] },
    { id: 'BPS-54321', status: 'Delivered', deliveredOn: '2 days ago', customer: 'testuser', items: [{ name: 'Air Fryer 5L', quantity: 1 }] }
];

// User state
let isLoggedIn = false;
let currentUser = null;

// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage or initialize as an empty array
    let cart = JSON.parse(localStorage.getItem('beipoasCart')) || [];
    const cartCount = document.querySelector('.cart-count');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const shopNowBtn = document.getElementById('shop-now-btn');
    const heroSection = document.getElementById('hero-section');
    const accountButton = document.getElementById('account-button');
    const accountModal = document.getElementById('account-modal');
    const offersButton = document.getElementById('offers-button');
    const offersModal = document.getElementById('offers-modal');
    const loginModal = document.getElementById('login-modal');
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const searchInput = document.getElementById('search-input');
    const loginError = document.getElementById('login-error');
    const searchResults = document.getElementById('search-results');
    const searchForm = document.getElementById('search-form');
    const flashSalesProducts = document.getElementById('flash-sales-products');
    const featuredProducts = document.getElementById('featured-products');
    const accountTabs = document.querySelectorAll('.account-tab');
    const accountContents = document.querySelectorAll('.account-content');
    const notificationModal = document.getElementById('notification-modal');
    const notificationTitle = document.getElementById('notification-title');
    const notificationMessage = document.getElementById('notification-message');
    const notificationOkBtn = document.getElementById('notification-ok-btn');
    const notificationCancelBtn = document.getElementById('notification-cancel-btn');
    const toastContainer = document.getElementById('toast-container');
    const mpesaModal = document.getElementById('mpesa-modal');
    const mpesaPayBtn = document.getElementById('mpesa-pay-btn');
    const mpesaError = document.getElementById('mpesa-error');
    const trackOrderModal = document.getElementById('track-order-modal');
    const trackOrderBtn = document.getElementById('track-order-btn');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    let confirmCallback = null;
    
    // Initialize product displays
    displayFlashSalesProducts();
    displayFeaturedProducts();
    updateCart(); // Update cart on initial page load
    
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            if (!isLoggedIn) {
                loginModal.style.display = 'flex';
                return;
            }
            
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.id;
            const product = products.find(p => p.id == productId);
            
            if (product) {
                // Check if product already in cart
                const existingItem = cart.find(item => item.id == productId);
                
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: 1
                    });
                }
                
                updateCart();
                showToast(`${product.name} has been added to cart`);
            }
        }

        // Order Now button
        if (e.target.classList.contains('order-now')) {
            if (!isLoggedIn) {
                loginModal.style.display = 'flex';
                return;
            }

            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.id;
            const product = products.find(p => p.id == productId);

            if (product) {
                const proceedToCheckout = () => {
                    cart.length = 0; // Clear the cart
                    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
                    updateCart();
                    mpesaModal.style.display = 'flex';
                };

                showConfirmation('Order Now', 'This will clear your current cart and proceed to checkout with only this item. Continue?', proceedToCheckout);
            }
        }

        // Remove from cart buttons (using event delegation)
        if (e.target.classList.contains('remove-from-cart')) {
            const productId = e.target.dataset.id;
            const index = cart.findIndex(item => item.id == productId);
            
            if (index !== -1) {
                cart.splice(index, 1);
                updateCart();
            }
        }
    });
    
    // Clear cart button
    clearCartBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            showConfirmation('Clear Cart', 'Are you sure you want to clear your cart?', () => {
                cart.length = 0;
                updateCart();
                showToast('Your cart has been cleared.');
            });
        } 
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (!isLoggedIn) {
            cartModal.style.display = 'none';
            loginModal.style.display = 'flex';
            return;
        }

        if (cart.length === 0) {
            return;
        }
        cartModal.style.display = 'none';
        mpesaModal.style.display = 'flex';
    });

    // Update cart display
    function updateCart() {
        // Save cart to localStorage
        localStorage.setItem('beipoasCart', JSON.stringify(cart));

        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartItems.innerHTML = ''; // Clear the items visually
            if (checkoutBtn) checkoutBtn.disabled = true;
            if (clearCartBtn) clearCartBtn.disabled = true;
        } else {
            emptyCartMessage.style.display = 'none';
            if (checkoutBtn) checkoutBtn.disabled = false;
            if (clearCartBtn) clearCartBtn.disabled = false;
            
            cartItems.innerHTML = ''; // Clear cart items before re-rendering
            
            // Add items to cart
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">Ksh ${item.price.toLocaleString()} x ${item.quantity}</div>
                    </div>
                    <button class="btn remove-from-cart" data-id="${item.id}">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        
        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `Total: Ksh ${total.toLocaleString()}`;
    }
    
    // Cart modal functionality
    cartButton.addEventListener('click', function() {
        cartModal.style.display = 'flex';
    });
    
    // Account modal functionality
    accountButton.addEventListener('click', function() {
        if (!isLoggedIn) {
            loginModal.style.display = 'flex';
        } else {
            accountModal.style.display = 'flex';
        }
    });
    
    // Offers modal functionality
    offersButton.addEventListener('click', function() {
        offersModal.style.display = 'flex';
    });
    
    // Close modals
    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Shop Now button
    shopNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        heroSection.classList.add('burgundy-bg');
        // Scroll to products section
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
    
    // Notification/Confirmation Modal Logic
    function showNotification(title, message) {
        notificationTitle.textContent = title;
        notificationMessage.textContent = message;
        notificationCancelBtn.style.display = 'none';
        notificationOkBtn.textContent = 'OK';
        notificationModal.style.display = 'flex';
        confirmCallback = null;
    }

    function showConfirmation(title, message, callback) {
        notificationTitle.textContent = title;
        notificationMessage.textContent = message;
        notificationCancelBtn.style.display = 'inline-block';
        notificationOkBtn.textContent = 'Confirm';
        notificationModal.style.display = 'flex';
        confirmCallback = callback;
    }

    notificationOkBtn.addEventListener('click', () => {
        if (confirmCallback) {
            confirmCallback();
        }
        notificationModal.style.display = 'none';
    });

    // Toast Notification Logic
    function showToast(message, duration = 3000) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => toast.remove());
        }, duration);
    }

    // Login functionality
    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        loginError.style.display = 'none'; // Hide error on new attempt

        if (username && password) {
            isLoggedIn = true;
            currentUser = { username: username };
            loginModal.style.display = 'none';
            showToast(`Welcome back, ${username}!`);
        } else {
            loginError.textContent = 'Please enter both username and password.';
            loginError.style.display = 'block';
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        if (query.length > 0) {
            const results = products.filter(product => 
                product.name.toLowerCase().startsWith(query)
            );
            
            displaySearchResults(results);
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        
        if (query.length > 0) {
            const results = products.filter(product => 
                product.name.toLowerCase().includes(query)
            );
            
            // Filter products to show only search results
            const allProducts = document.querySelectorAll('.product-card');
            allProducts.forEach(product => {
                product.style.display = 'none';
            });
            
            results.forEach(result => {
                const productElements = document.querySelectorAll(`.product-card[data-id="${result.id}"]`);
                productElements.forEach(element => {
                    element.style.display = 'block';
                });
            });
            
            // Scroll to products section
            document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
            
            searchResults.style.display = 'none';
        }
    });
    
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
            return;
        }
        
        results.slice(0, 5).forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <div>${product.name}</div>
                    <div style="color: #ff6b00; font-weight: 500;">Ksh ${product.price.toLocaleString()}</div>
                </div>
            `;
            resultItem.addEventListener('click', function() {
                searchInput.value = product.name;
                searchResults.style.display = 'none';
                
                // Filter products to show only this product
                const allProducts = document.querySelectorAll('.product-card');
                allProducts.forEach(p => {
                    p.style.display = 'none';
                });
                
                const productElements = document.querySelectorAll(`.product-card[data-id="${product.id}"]`);
                productElements.forEach(element => {
                    element.style.display = 'block';
                });
                
                // Scroll to products section
                document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
            });
            searchResults.appendChild(resultItem);
        });
    }
    
    // Display flash sales products
    function displayFlashSalesProducts() {
        const flashSaleProducts = products.filter(product => product.flashSale);
        
        flashSalesProducts.innerHTML = '';
        flashSaleProducts.forEach(product => {
            const productCard = createProductCard(product);
            flashSalesProducts.appendChild(productCard);
        });
    }
    
    // Display featured products
    function displayFeaturedProducts() {
        const featured = products.filter(product => product.featured);
        
        featuredProducts.innerHTML = '';
        featured.forEach(product => {
            const productCard = createProductCard(product);
            featuredProducts.appendChild(productCard);
        });
    }
    
    

    // Create product card element
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-id', product.id);
        productCard.setAttribute('data-name', product.name);
        productCard.setAttribute('data-price', product.price);
        productCard.setAttribute('data-category', product.category);
        
        let oldPriceHtml = '';
        if (product.oldPrice) {
            oldPriceHtml = `<span class="old-price">Ksh ${product.oldPrice.toLocaleString()}</span>`;
        }
        
        let ratingHtml = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            ratingHtml += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            ratingHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(product.rating);
        for (let i = 0; i < emptyStars; i++) {
            ratingHtml += '<i class="far fa-star"></i>';
        }
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">Ksh ${product.price.toLocaleString()} ${oldPriceHtml}</div>
                <div class="product-rating">
                    ${ratingHtml}
                </div>
                <div class="product-actions">
                    <button class="btn btn-secondary order-now">Order Now</button>
                    <button class="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        
        return productCard;
    }
    
    // Category filtering
    const categoryLinks = document.querySelectorAll('[data-category]');
    const categoryCards = document.querySelectorAll('.category-card');
    
    function filterProductsByCategory(category) {
        const flashSalesSection = document.querySelector('.flash-sales');
        const featuredProductsSection = document.getElementById('featured-products').closest('section');
        const featuredProductsContainer = document.getElementById('featured-products');
        const featuredProductsTitle = featuredProductsSection.querySelector('.section-title');
        
        if (category === 'all') {
            // Restore original view
            flashSalesSection.style.display = 'block';
            featuredProductsSection.style.display = 'block';
            featuredProductsTitle.textContent = 'Featured Products';
            displayFeaturedProducts(); // Re-populate with original featured products
            featuredProductsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Hide flash sales and show the featured section for results
            flashSalesSection.style.display = 'none';
            featuredProductsSection.style.display = 'block';
            
            // Capitalize category for the title
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            featuredProductsTitle.textContent = `Showing results for ${categoryName}`;
            
            const filteredProducts = products.filter(product => product.category === category);
            
            featuredProductsContainer.innerHTML = ''; // Clear current products
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const productCard = createProductCard(product);
                    featuredProductsContainer.appendChild(productCard);
                });
            } else {
                featuredProductsContainer.innerHTML = '<p>No products found in this category.</p>';
            }
            featuredProductsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            filterProductsByCategory(category);
        });
    });
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProductsByCategory(category);
        });
    });
    
    // Account tabs
    accountTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Remove active class from all tabs and contents
            accountTabs.forEach(t => t.classList.remove('active'));
            accountContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // Footer links functionality
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.id;
            
            switch(id) {
                case 'contact-link':
                    showNotification('Contact Us', 'Email: support@beipoas.com\nPhone: +254 700 123 456');
                    break;
                case 'faq-link':
                    showNotification('FAQs', '1. How do I track my order?\nA: You can track your order from the "Track Order" link in the customer service section.\n\n2. What is your return policy?\nA: We offer a 30-day return policy on most items. Please see our full Returns & Refunds page for details.');
                    break;
                case 'returns-link':
                    showNotification('Returns & Refunds', 'Our policy is a 30-day return period for most items. Please visit our full policy page for details.');
                    break;
                case 'delivery-link':
                    showNotification('Delivery Information', 'We deliver nationwide within 2-5 business days. Delivery charges may apply.');
                    break;
                case 'track-link':
                    // Show the dedicated track order modal
                    trackOrderModal.style.display = 'flex';
                    break;
                case 'about-link':
                    showNotification('About Beipoas', 'Founded in 2023, Beipoas is Kenya\'s premier online marketplace. Our mission is to provide an unparalleled shopping experience by offering a wide selection of quality products, competitive prices, and exceptional customer service. We believe in the power of technology to make life simpler and more enjoyable.');
                    break;
                case 'careers-link':
                    showNotification('Careers', 'Join our dynamic team! We are currently hiring for the following roles:\n\n- Frontend Developer\n- Digital Marketing Specialist\n- Customer Support Representative\n\nTo apply, please send your resume to careers@beipoas.com.');
                    break;
                case 'terms-link':
                    showNotification('Terms & Conditions', '1. Introduction: Welcome to Beipoas. By using our website, you agree to these terms.\n2. User Accounts: You are responsible for maintaining the confidentiality of your account.\n3. Prohibited Activities: You may not use this site for any illegal or unauthorized purpose.\n\nThis is a summary. Please read the full terms for details.');
                    break;
                case 'privacy-link':
                    showNotification('Privacy Policy', '1. Data Collection: We collect personal information when you register, place an order, or subscribe to our newsletter.\n2. Data Usage: Your data is used to process transactions and improve our services.\n3. Data Protection: We implement security measures to protect your information.\n\nThis is a summary. Please read our full policy for details.');
                    break;
                case 'blog-link':
                    showNotification('Blog', 'Welcome to the Beipoas Blog!\n\nLatest Posts:\n- Top 10 Tech Gadgets for 2025\n- A Guide to Seasonal Fashion Trends\n- Healthy Recipes You Can Make with Our Groceries\n\nStay tuned for more exciting articles!');
                    break;
                default:
                    // For category links in footer
                    if (this.dataset.category) {
                        filterProductsByCategory(this.dataset.category);
                    }
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            showToast(`Thank you for subscribing with ${email}!`);
            this.reset();
        }
    });
    
    // Timer countdown simulation
    const timerItems = document.querySelectorAll('.timer-item');
    let hours = 5, minutes = 30, seconds = 0;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
        
        timerItems[0].textContent = `${hours.toString().padStart(2, '0')}H`;
        timerItems[1].textContent = `${minutes.toString().padStart(2, '0')}M`;
        timerItems[2].textContent = `${seconds.toString().padStart(2, '0')}S`;
    }, 1000);

    // M-Pesa Modal Logic
    mpesaPayBtn.addEventListener('click', function() {
        const phoneInput = document.getElementById('mpesa-phone');
        const phoneNumber = phoneInput.value.trim();
        const phoneRegex = /^(07|01)\d{8}$/; // Basic validation for Kenyan numbers

        mpesaError.style.display = 'none';

        if (phoneRegex.test(phoneNumber)) {
            mpesaModal.style.display = 'none';
            showToast(`Payment prompt sent to ${phoneNumber}. Please complete the transaction.`);
            // Here you would typically call a backend API to initiate the STK push
            console.log(`Initiating M-Pesa payment for ${phoneNumber}`);
            cart.length = 0; // Clear cart after successful payment initiation
            updateCart();
        } else {
            mpesaError.textContent = 'Please enter a valid phone number (e.g., 0712345678).';
            mpesaError.style.display = 'block';
        }
    });

    // Track Order Modal Logic
    trackOrderBtn.addEventListener('click', function() {
        const orderIdInput = document.getElementById('order-id-input');
        const orderId = orderIdInput.value.trim().toUpperCase();
        const statusContainer = document.getElementById('order-status-container');

        if (!orderId) {
            statusContainer.innerHTML = `<p style="color: red;">Please enter an Order ID.</p>`;
            statusContainer.style.display = 'block';
            return;
        }

        const order = orders.find(o => o.id === orderId);

        if (order) {
            let deliveryInfo = order.status === 'Delivered' 
                ? `<strong>Delivered On:</strong> ${order.deliveredOn}`
                : `<strong>Estimated Delivery:</strong> In ${order.estimatedDelivery}`;

            statusContainer.innerHTML = `
                <p><strong>Order ID:</strong> ${order.id}</p>
                <p><strong>Status:</strong> <span style="color: #e8402a; font-weight: bold;">${order.status}</span></p>
                <p>${deliveryInfo}</p>
            `;
        } else {
            statusContainer.innerHTML = `<p style="color: red;">No order found with ID: ${orderId}</p>`;
        }
        statusContainer.style.display = 'block';
    });

    // Back to Top Button Logic
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
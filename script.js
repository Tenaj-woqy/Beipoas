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
    { id: 7, name: "Body Lotion", price: 999, category: "health", image: "https://media.allure.com/photos/659c52c2e7fa0aa260fe094a/4:3/w_2664,h_1998,c_limit/best_body_lotions_002.jpg", oldPrice: null, rating: 4.5, featured: true, flashSale: true },
    { id: 8, name: "Electric Toothbrush", price: 5999, category: "health", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVDkJq4y4u3SipYXiqnbxYJhf23QzIDNKvg&s", oldPrice: 7999, rating: 4.5, featured: false, flashSale: true },
    { id: 9, name: "Bathing Towels ", price: 7999, category: "health", image: "https://i0.wp.com/kingscollection.co.ke/wp-content/uploads/2023/02/alem-maroon-DSC_1043.jpg?fit=600%2C600&ssl=1", oldPrice: 9999, rating: 4, featured: false, flashSale: true },
    { id: 10, name: "Sanitary pads Bin", price: 4599, category: "health", image: "https://m.media-amazon.com/images/I/71ak2ETXqIL._UF1000,1000_QL80_.jpg", oldPrice: 5999, rating: 4, featured: false, flashSale: false },
    { id: 11, name: "Makeup Kit", price: 3499, category: "health", image: "https://thetoypalace.co.ke/wp-content/uploads/2024/09/Make-Up-Kit-1.jpg", oldPrice: null, rating: 4.5, featured: true, flashSale: false },
    { id: 12, name: "Essential Oil Diffuser", price: 3999, category: "health", image: "https://i5.walmartimages.com/seo/Durcord-Essential-Oil-Diffuser-Cool-Mist-Humidifier-and-Air-Aroma-Diffuser-with-7-Colors-Flame-Volcano-Light-for-Spa-Yoga-Christmas-Gift-Black_f614acdc-faeb-458a-94c1-620befa3986c.9b2680be7daf3bc71ceeca08d7993373.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", oldPrice: 4999, rating: 4, featured: false, flashSale: false },
    
    // Fashion
    { id: 13, name: "Nike Airmax Sneakers", price: 7499, category: "fashion", image: "https://www.elverys.ie/cdn/shop/files/C1-1145605-636Wx636H.jpg?v=1719909364&width=1600", oldPrice: null, rating: 5, featured: true, flashSale: false },
    { id: 14, name: "Rain Coat", price: 12999, category: "fashion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMMZk1ypawnUgFwqI3iVPzsAGGBPw2acA0w&s", oldPrice: 15999, rating: 4.5, featured: false, flashSale: true },
    { id: 15, name: "Chanel Handbag", price: 18999, category: "fashion", image: "https://mygemma.com/cdn/shop/articles/WPD-Top-Blog-Image-2022-02-07T104346.218.png?v=1695913150", oldPrice: 22999, rating: 4, featured: false, flashSale: true },
    { id: 16, name: "Men's Suits", price: 3999, category: "fashion", image: "https://img.freepik.com/free-vector/mans-suit-realistic-composition-with-smart-costume-with-white-shirt-tie-jacket_1284-54345.jpg?semt=ais_hybrid&w=740&q=80", oldPrice: 4999, rating: 4, featured: false, flashSale: false },
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
    { id: 45, name: "Bananas", price: 39, category: "groceries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2a3_39qnAr2DTOc6IPansdxVIPH-FdSuxQ&s", oldPrice: null, rating: 4, featured: false, flashSale: false },
    { id: 46, name: "Oranges", price: 79, category: "groceries", image: "https://drearth.com/wp-content/uploads/Oranges-iStock-1493917402.jpg", oldPrice: 99, rating: 4.5, featured: false, flashSale: true }
];

// Dummy order data for tracking simulation
const orders = [
    { id: 'BPS-12345', status: 'Shipped', estimatedDelivery: '2 days', customer: 'testuser', items: [{ name: 'i-phone XR', quantity: 1 }] },
    { id: 'BPS-67890', status: 'Processing', estimatedDelivery: '4 days', customer: 'testuser', items: [{ name: 'Leather Jacket', quantity: 1 }] },
    { id: 'BPS-54321', status: 'Delivered', deliveredOn: '2 days ago', customer: 'testuser', items: [{ name: 'Air Fryer 5L', quantity: 1 }] }
];

// User state
let isLoggedIn = false;
let currentUser = null; // Will be loaded from localStorage

// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
    let wishlist = [];
    const cartCount = document.querySelector('.cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const shopNowBtn = document.getElementById('shop-now-btn');
    const accountButton = document.getElementById('account-button');
    const accountModal = document.getElementById('account-modal');
    const signupModal = document.getElementById('signup-modal');
    const signupBtn = document.getElementById('signup-btn');
    const signupError = document.getElementById('signup-error');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const resetPasswordBtn = document.getElementById('reset-password-btn');
    const forgotError = document.getElementById('forgot-error');

    // Login Modal
    const loginModal = document.getElementById('login-modal');
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const searchInput = document.getElementById('search-input');
    const loginError = document.getElementById('login-error');
    const googleLoginBtn = document.getElementById('google-login-btn');
    const emailLoginBtn = document.getElementById('email-login-btn');
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
    const mpesaModal = document.getElementById('mpesa-modal');
    const mpesaPayBtn = document.getElementById('mpesa-pay-btn');
    const mpesaError = document.getElementById('mpesa-error');
    const trackOrderModal = document.getElementById('track-order-modal');
    const trackOrderBtn = document.getElementById('track-order-btn');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const promptModal = document.getElementById('prompt-modal');
    const promptTitle = document.getElementById('prompt-title');
    const promptMessage = document.getElementById('prompt-message');
    const promptInput = document.getElementById('prompt-input');
    const promptOkBtn = document.getElementById('prompt-ok-btn');
    let confirmCallback = null;
    let promptCallback = null;
    const mainContent = document.getElementById('main-content');
    const productPageView = document.getElementById('product-page-view');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const saveProfileBtn = document.getElementById('save-profile-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // --- State Initialization from LocalStorage ---
    function loadStateFromLocalStorage() {
        // Load cart
        const storedCart = localStorage.getItem('beipoasCart');
        if (storedCart) cart = JSON.parse(storedCart);

        // Load wishlist
        const storedWishlist = localStorage.getItem('beipoasWishlist');
        if (storedWishlist) wishlist = JSON.parse(storedWishlist);

        // Load user session
        const storedUser = localStorage.getItem('beipoasCurrentUser');
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
            isLoggedIn = true;
            accountButton.innerHTML = `<i class="fas fa-user"></i> ${currentUser.username}`;
        }
    }
    
    // Initialize product displays
    loadStateFromLocalStorage();
    displayFlashSalesProducts();
    displayFeaturedProducts();
    updateCart(); // Update cart on initial page load
    updateWishlistDisplay();
    initializeModalHandlers();

    // Back to home button
    backToHomeBtn.addEventListener('click', () => {
        mainContent.style.display = 'block';
        productPageView.style.display = 'none';
        window.scrollTo(0, 0);
    });

    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            if (!isLoggedIn) {
                loginModal.style.display = 'flex';
                return;
            }
            
            const productCard = e.target.closest('[data-id]');
            const productId = productCard.dataset.id;
            const productImage = productCard.querySelector('.product-image');
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
                flyToCart(productImage);
                showToast(`${product.name} has been added to cart`);
            }
        }

        // Order Now button
        if (e.target.classList.contains('order-now')) {
            if (!isLoggedIn) {
                loginModal.style.display = 'flex';
                return;
            }

            const productCard = e.target.closest('[data-id]');
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

        // Wishlist icon click
        if (e.target.classList.contains('wishlist-icon')) {
            if (!isLoggedIn) {
                openModal('login-modal');
                return;
            }
            const productId = e.target.dataset.id;
            const productIndex = wishlist.indexOf(productId);

            if (productIndex > -1) {
                wishlist.splice(productIndex, 1); // Remove from wishlist
                e.target.classList.remove('active');
                showToast('Removed from wishlist');
            } else {
                wishlist.push(productId); // Add to wishlist
                e.target.classList.add('active');
                // Add bounce animation and remove it after it finishes
                e.target.classList.add('bounce');
                e.target.addEventListener('animationend', () => {
                    e.target.classList.remove('bounce');
                }, { once: true });
                showToast('Added to wishlist');
            }
            localStorage.setItem('beipoasWishlist', JSON.stringify(wishlist));
            updateWishlistDisplay();
        }

        // Quantity controls in cart
        if (e.target.classList.contains('increase-quantity')) {
            const productId = e.target.dataset.id;
            const item = cart.find(i => i.id == productId);
            if (item) {
                item.quantity++;
                updateCart();
            }
        }

        if (e.target.classList.contains('decrease-quantity')) {
            const productId = e.target.dataset.id;
            const item = cart.find(i => i.id == productId);
            if (item) {
                item.quantity--;
                if (item.quantity <= 0) {
                    // Remove item if quantity is 0 or less
                    const index = cart.findIndex(i => i.id == productId);
                    cart.splice(index, 1);
                }
                updateCart();
            }
        }

        // Show product page view from product card image/title
        if (e.target.matches('.product-image, .product-title')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.id;
            const product = products.find(p => p.id == productId);
            if (product) displayProductPage(product);
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
            showNotification('Empty Cart', 'Your cart is empty. Please add items before proceeding to checkout.');
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
            if (clearCartBtn) clearCartBtn.disabled = true;
        } else {
            emptyCartMessage.style.display = 'none';
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
                        <div class="cart-item-price">Ksh ${item.price.toLocaleString()}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
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
    
    // Update wishlist display in account modal
    function updateWishlistDisplay() {
        const wishlistContent = document.getElementById('wishlist-content');
        const wishlistProducts = products.filter(p => wishlist.includes(String(p.id)));

        if (wishlistProducts.length === 0) {
            wishlistContent.innerHTML = '<h3>My Wishlist</h3><p>Your wishlist is empty.</p>';
        } else {
            wishlistContent.innerHTML = '<h3>My Wishlist</h3>';
            wishlistProducts.forEach(product => {
                const productCard = createProductCard(product);
                // Remove the wishlist icon from the card inside the wishlist view
                const icon = productCard.querySelector('.wishlist-icon');
                if (icon) icon.remove();
                wishlistContent.appendChild(productCard);
            });
        }
    }

    // Account modal functionality
    accountButton.addEventListener('click', function() {
        if (!isLoggedIn) {
            openModal('login-modal');
        } else {
            // Refresh wishlist display every time account is opened
            updateWishlistDisplay();
            // Populate profile fields
            if (currentUser) {
                document.getElementById('full-name').value = currentUser.fullName || '';
                document.getElementById('email').value = currentUser.email || '';
                document.getElementById('phone').value = currentUser.phone || '';
            }
            openModal('account-modal');
        }
    });

    // Generic Modal Handling
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.style.display = 'none';
        }
    }

    function initializeModalHandlers() {
        document.addEventListener('click', function(e) {
            // Open modal
            const openTrigger = e.target.closest('[data-modal-open]');
            if (openTrigger) {
                e.preventDefault();
                if (openTrigger.hasAttribute('data-modal-close-current')) {
                    closeModal(e.target.closest('.modal'));
                }
                openModal(openTrigger.dataset.modalOpen);
            }

            // Close modal
            const closeTrigger = e.target.closest('[data-modal-close]') || (e.target.classList.contains('modal') ? e.target : null);
            if (closeTrigger) {
                closeModal(closeTrigger.closest('.modal'));
            }
        });
    }

    // Shop Now button
    shopNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Scroll to the featured products section
        document.getElementById('featured-products').scrollIntoView({ behavior: 'smooth' });
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
        notificationMessage.innerHTML = message; // Use innerHTML to render bold tags
        notificationCancelBtn.style.display = 'none';
        notificationOkBtn.textContent = 'OK'; // Set text for OK button
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

    notificationCancelBtn.addEventListener('click', () => {
        notificationModal.style.display = 'none';
    });

    // Custom Prompt Modal Logic
    function showPrompt(title, message, placeholder, callback) {
        promptTitle.textContent = title;
        promptMessage.textContent = message;
        promptInput.value = '';
        promptInput.placeholder = placeholder || '';
        promptModal.style.display = 'flex';
        promptInput.focus();
        promptCallback = callback;
    }

    promptOkBtn.addEventListener('click', () => {
        if (promptCallback) {
            promptCallback(promptInput.value);
        }
        promptModal.style.display = 'none';
    });

    document.getElementById('prompt-cancel-btn').addEventListener('click', () => {
        promptModal.style.display = 'none';
    });

    // Fly to cart animation
    function flyToCart(productImage) {
        const cartIcon = document.getElementById('cart-icon');
        if (!productImage || !cartIcon) return;

        // Get positions
        const imgRect = productImage.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();

        // Create a clone of the image
        const flyingImg = productImage.cloneNode(true);
        flyingImg.classList.add('fly-to-cart-img');
        document.body.appendChild(flyingImg);

        // Set initial position
        flyingImg.style.left = `${imgRect.left}px`;
        flyingImg.style.top = `${imgRect.top}px`;
        flyingImg.style.width = `${imgRect.width}px`;
        flyingImg.style.height = `${imgRect.height}px`;

        // Animate to cart
        requestAnimationFrame(() => {
            flyingImg.style.left = `${cartRect.left + (cartRect.width / 2)}px`;
            flyingImg.style.top = `${cartRect.top + (cartRect.height / 2)}px`;
            flyingImg.style.width = '0px';
            flyingImg.style.height = '0px';
            flyingImg.style.opacity = '0.5';
        });

        // Remove the element after animation
        setTimeout(() => {
            flyingImg.remove();
        }, 1000); // Match the transition duration in CSS
    }

    // Toast Notification Logic
    function showToast(message, duration = 3000) {
        const toastContainer = document.getElementById('toast-container');
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
            currentUser = { 
                username: username,
                fullName: '',
                email: '',
                phone: ''
            };
            localStorage.setItem('beipoasCurrentUser', JSON.stringify(currentUser));
            accountButton.innerHTML = `<i class="fas fa-user"></i> ${currentUser.username}`;
            loginModal.style.display = 'none';
            showToast(`Welcome back, ${username}!`);
        } else {
            loginError.textContent = 'Please enter both username and password.';
            loginError.style.display = 'block';
        }
    });

    // Google Login button
    googleLoginBtn.addEventListener('click', function() {
        // Simulate asking for account
        showPrompt('Login with Google', 'Please enter your Google account name (e.g., user@gmail.com) or another account to proceed.', 'Account Name', (accountName) => {
            if (accountName) {
                isLoggedIn = true;
                currentUser = { 
                    username: accountName,
                    fullName: '',
                    email: accountName.includes('@') ? accountName : '',
                    phone: ''
                };
                localStorage.setItem('beipoasCurrentUser', JSON.stringify(currentUser));
                accountButton.innerHTML = `<i class="fas fa-user"></i> ${currentUser.username}`;
                loginModal.style.display = 'none';
                showToast(`Successfully logged in as ${accountName}!`);
            }
        });
    });

    // Email Login button
    emailLoginBtn.addEventListener('click', function() {
        showPrompt('Login with Email', 'Please enter your email address to receive a login link.', 'your@email.com', (email) => {
            if (email) {
                loginModal.style.display = 'none';
                isLoggedIn = true; // Assuming login link works instantly for simulation
                currentUser = { 
                    username: email.split('@')[0],
                    fullName: '',
                    email: email,
                    phone: ''
                }; // Use part of email as name
                localStorage.setItem('beipoasCurrentUser', JSON.stringify(currentUser));
                accountButton.innerHTML = `<i class="fas fa-user"></i> ${currentUser.username}`;
                showNotification(
                    'Check Your Email',
                    `A login link has been sent to ${email}. Please check your inbox to continue.`
                );
            }
        });
    });


    // Signup functionality
    signupBtn.addEventListener('click', function() {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        signupError.style.display = 'none';

        if (!username || !password || !confirmPassword) {
            signupError.textContent = 'Please fill in all fields.';
            signupError.style.display = 'block';
            return;
        }

        if (password !== confirmPassword) {
            signupError.textContent = 'Passwords do not match.';
            signupError.style.display = 'block';
            return;
        }

        // Simulate successful signup
        isLoggedIn = true;
        currentUser = { 
            username: username,
            fullName: '',
            email: '',
            phone: ''
        };
        localStorage.setItem('beipoasCurrentUser', JSON.stringify(currentUser));
        accountButton.innerHTML = `<i class="fas fa-user"></i> ${currentUser.username}`;
        signupModal.style.display = 'none';
        showToast(`Welcome, ${username}! Your account has been created.`);
    });

    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        showConfirmation('Logout', 'Are you sure you want to log out?', () => {
            isLoggedIn = false;
            currentUser = null;
            // Clear user session from localStorage
            localStorage.removeItem('beipoasCurrentUser');
            // Clear cart and wishlist
            cart.length = 0;
            wishlist.length = 0;
            updateCart(); // This also updates localStorage for the cart
            updateWishlistDisplay(); // Visually clear the wishlist in the account modal
            localStorage.removeItem('beipoasWishlist'); // Explicitly remove wishlist
            // Reset UI
            accountButton.innerHTML = '<i class="fas fa-user"></i> Account';
            closeModal(accountModal);
            showToast('You have been logged out.');
        });
    });

    // Reset Password functionality
    resetPasswordBtn.addEventListener('click', function() {
        const email = document.getElementById('forgot-email').value;
        forgotError.style.display = 'none';

        if (!email) {
            forgotError.textContent = 'Please enter your email address.';
            forgotError.style.display = 'block';
            return;
        }

        // Simulate sending a reset link
        forgotPasswordModal.style.display = 'none';
        showNotification(
            'Password Reset',
            `If an account exists for ${email}, a password reset link has been sent.`
        );
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchResults = document.getElementById('search-results');
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
        const searchResults = document.getElementById('search-results');
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
        const searchResults = document.getElementById('search-results');
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
                searchResults.style.display = 'none';
                displayProductPage(product);
            });
            searchResults.appendChild(resultItem);
        });
    }

    // Display product details on its own page
    function displayProductPage(product) {
        const productPageContent = document.getElementById('product-page-content');
        
        let oldPriceHtml = '';
        if (product.oldPrice) {
            oldPriceHtml = `<span class="old-price">Ksh ${product.oldPrice.toLocaleString()}</span>`;
        }

        let ratingHtml = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) { ratingHtml += '<i class="fas fa-star"></i>'; }
        if (hasHalfStar) { ratingHtml += '<i class="fas fa-star-half-alt"></i>'; }
        const emptyStars = 5 - Math.ceil(product.rating);
        for (let i = 0; i < emptyStars; i++) { ratingHtml += '<i class="far fa-star"></i>'; }

        // Generate a simple description
        const description = `Discover the amazing ${product.name}. Perfect for your needs in the ${product.category} category. Enjoy top quality and the best price only at Beipoas.`;

        productPageContent.innerHTML = `
            <div id="product-page-image-container">
                <img src="${product.image}" alt="${product.name}" id="product-page-image" class="product-image">
            </div>
            <div id="product-page-details" data-id="${product.id}">
                <h2>${product.name}</h2>
                <div class="product-price">Ksh ${product.price.toLocaleString()} ${oldPriceHtml}</div>
                <div class="product-rating">${ratingHtml} (${product.rating})</div>
                <p class="product-description">${description}</p>
                <div class="product-actions">
                    <button class="btn btn-secondary order-now">Order Now</button>
                    <button class="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;

        // Switch views
        mainContent.style.display = 'none';
        productPageView.style.display = 'block';
        window.scrollTo(0, 0); // Scroll to top of the page
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
        
        const isWishlisted = wishlist.includes(String(product.id));
        const wishlistIconClass = isWishlisted ? 'fas fa-heart wishlist-icon active' : 'far fa-heart wishlist-icon';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" style="cursor: pointer;">
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
            <i class="${wishlistIconClass}" data-id="${product.id}"></i>
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
                    showNotification('Contact Us', '<strong>Email:</strong> support@beipoas.com\n<strong>Phone:</strong> +254 700 123 456');
                    break;
                case 'faq-link':
                    showNotification('FAQs', '<strong>1. How do I track my order?</strong>\nA: You can track your order from the "Track Order" link in the customer service section.\n\n<strong>2. What is your return policy?</strong>\nA: We offer a 30-day return policy on most items. Please see our full Returns & Refunds page for details.');
                    break;
                case 'returns-link':
                    showNotification('Returns & Refunds', 'Our policy is a 30-day return period for most items. Please visit our full policy page for details.');
                    break;
                case 'delivery-link':
                    showNotification('Delivery Information', 'We deliver nationwide within <strong>2-5 business days</strong>. Delivery charges may apply.');
                    break;
                case 'track-link':
                    // Show the dedicated track order modal
                    trackOrderModal.style.display = 'flex';
                    break;
                case 'about-link':
                    showNotification('About Beipoas', 'Founded in 2023, Beipoas is <strong>Kenya\'s premier online marketplace</strong>. Our mission is to provide an unparalleled shopping experience by offering a wide selection of quality products, competitive prices, and exceptional customer service. We believe in the power of technology to make life simpler and more enjoyable.');
                    break;
                case 'careers-link':
                    showNotification('Careers', 'Join our dynamic team! We are currently hiring for the following roles:\n\n- Frontend Developer\n- Digital Marketing Specialist\n- Customer Support Representative\n\n<strong>To apply:</strong> Please send your resume to careers@beipoas.com.');
                    break;
                case 'terms-link':
                    showNotification('Terms & Conditions', '<strong>1. Introduction:</strong> Welcome to Beipoas. By using our website, you agree to these terms.\n<strong>2. User Accounts:</strong> You are responsible for maintaining the confidentiality of your account.\n<strong>3. Prohibited Activities:</strong> You may not use this site for any illegal or unauthorized purpose.\n\nThis is a summary. Please read the full terms for details.');
                    break;
                case 'privacy-link':
                    showNotification('Privacy Policy', '<strong>1. Data Collection:</strong> We collect personal information when you register, place an order, or subscribe to our newsletter.\n<strong>2. Data Usage:</strong> Your data is used to process transactions and improve our services.\n<strong>3. Data Protection:</strong> We implement security measures to protect your information.\n\nThis is a summary. Please read our full policy for details.');
                    break;
                case 'blog-link':
                    showNotification('Blog', 'Welcome to the Beipoas Blog!\n\n<strong>Latest Posts:</strong>\n- Top 10 Tech Gadgets for 2025\n- A Guide to Seasonal Fashion Trends\n- Healthy Recipes You Can Make with Our Groceries\n\nStay tuned for more exciting articles!');
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

    // Save Profile Changes
    saveProfileBtn.addEventListener('click', function() {
        if (currentUser) {
            currentUser.fullName = document.getElementById('full-name').value;
            currentUser.email = document.getElementById('email').value;
            currentUser.phone = document.getElementById('phone').value;

            localStorage.setItem('beipoasCurrentUser', JSON.stringify(currentUser));
            showToast('Profile updated successfully!');
            closeModal(accountModal);
        }
    });
});
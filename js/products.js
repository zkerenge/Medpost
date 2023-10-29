
    // Function to filter products by category
    function filterProducts(category) {
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            if (category === 'all' || product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Function to search products by keyword
    function searchProducts() {
        const searchInput = document.getElementById('search-input');
        const keyword = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product');

        products.forEach(product => {
            const title = product.querySelector('h3').innerText.toLowerCase();
            const description = product.querySelector('p').innerText.toLowerCase();

            if (title.includes(keyword) || description.includes(keyword)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }


// 1. Data Store (Simulating products.json to avoid Fetch/CORS errors)
const products = [
    { name: "Indigo Denim Jacket", price: "$89.00", category: "Apparel" },
    { name: "Slate Grey Backpack", price: "$55.00", category: "Accessories" },
    { name: "Minimalist Desk Lamp", price: "$42.00", category: "Home Office" },
    { name: "Wireless Bluetooth Speaker", price: "$120.00", category: "Electronics" },
    { name: "Organic Cotton T-Shirt", price: "$28.00", category: "Apparel" },
    { name: "Leather Tech Pouch", price: "$35.00", category: "Accessories" }
];

const searchInput = document.getElementById('searchInput');
const resultsGrid = document.getElementById('resultsGrid');
const statusMsg = document.getElementById('statusIndicator');

// 2. Debounce Implementation (Condition: Implement Debouncing)
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// 3. Search Logic
const performSearch = (query) => {
    statusMsg.innerText = ""; // Clear status
    
    // Requirement: Show "No results found" if response is empty
    if (!query) {
        resultsGrid.innerHTML = "";
        return;
    }

    statusMsg.innerText = "Searching products...";
    
    // Simulate server delay for loading effect
    setTimeout(() => {
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) || 
            p.category.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(filtered);
    }, 300);
};

// 4. Display Logic (Condition: Parse response and dynamically display)
function displayResults(results) {
    resultsGrid.innerHTML = "";
    statusMsg.innerText = `Showing ${results.length} result(s)`;

    if (results.length === 0) {
        resultsGrid.innerHTML = `
            <div class="no-results">
                <p>No results found for your search.</p>
            </div>`;
        return;
    }

    results.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-cat">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}</div>
        `;
        resultsGrid.appendChild(card);
    });
}

// Attach debounced event listener (500ms delay)
const debouncedSearch = debounce((e) => performSearch(e.target.value.trim()), 500);
searchInput.addEventListener('input', debouncedSearch);

// Initialize with empty state
resultsGrid.innerHTML = '<div class="no-results">Start typing to discover products.</div>';

let products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null;

//Local Storage
function saveToLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}


// Add Product
function addProduct() {
    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const category = document.getElementById("category").value.trim();

    if (title === "" || price === "") {
        alert("Title and Price are required");
        return;
    }

    if (editId) {
        const product = products.find(p => p.id === editId);
        product.title = title;
        product.price = price;
        product.image = image;
        product.category = category;
        editId = null;
    } else {
        const product = {
            id: Date.now(),
            title,
            price,
            image,
            category
        };
        products.push(product);
    }

    saveToLocalStorage();
    clearInputs();
    addProductToList(products);
    loadCategories();
}

// Display Products

function addProductToList(list) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    list.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        const img = document.createElement("img");
        img.src = product.image || "https://via.placeholder.com/150";

        const title = document.createElement("h3");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category || "N/A"}`;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editProduct(product.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteProduct(product.id);

        div.append(img, title, price, category, editBtn, deleteBtn);
        productList.appendChild(div);
    });
}



function editProduct(id) {
    const product = products.find(p => p.id === id);
    document.getElementById("title").value = product.title;
    document.getElementById("price").value = product.price;
    document.getElementById("image").value = product.image;
    document.getElementById("category").value = product.category;
    editId = id;
}

// Delete
function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    saveToLocalStorage();
    addProductToList(products);
    loadCategories();
}


function clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("category").value = "";
}


function loadCategories() {
    const select = document.getElementById("filterCategory");
    const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
    select.innerHTML = `<option value="">All Categories</option>`;
    
}

// Search
function applyFilters() {
    let filtered = [...products];

    const search = document.getElementById("search").value.toLowerCase();
    const sort = document.getElementById("sort").value;
    const category = document.getElementById("filterCategory").value;

    if (search) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(search));
    }

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    addProductToList(filtered);
}


addProductToList(products);
loadCategories();

const url = "http://localhost:3000";
const productsList = document.querySelector('#productsList');
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const btnAdd = document.querySelector('.btn-add');
const titleModal = document.querySelector('#titleModal');
const btnOpenModal = document.querySelector('.openModal');

let editingProduct = null;

btnOpenModal.addEventListener('click', () => {
    titleModal.textContent = "Add product";
    btnAdd.textContent = "Add";
    editingProduct = null;
});

const fetchProducts = async function () {
    try {
        const response = await fetch(`${url}/products`);
        const data = await response.json();
        productsList.innerHTML = data.map(product => /*html*/ `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td><button data-id="${product.id}" data-bs-toggle="modal" data-bs-target="#addProduct" class="btn btn-success btn-update me-2">Edit</button><button data-id="${product.id}" class="btn btn-danger btn-delete">Delete</button></td>
            </tr>
        `).join('');
    } catch (error) {
        console.log(error);
    }

    const btnsDelete = document.querySelectorAll('.btn-delete');
    for (let btn of btnsDelete) {
        const id = btn.getAttribute('data-id');
        btn.addEventListener('click', () => deleteProduct(id));
    }

    const btnsUpdate = document.querySelectorAll('.btn-update');
    for (let btn of btnsUpdate) {
        const id = btn.getAttribute('data-id');
        btn.addEventListener('click', () => setValueUpdate(id));
    }
}

const deleteProduct = async function (id) {
    try {
        await fetch(`${url}/products/${id}`, {
            method: 'DELETE',
        });
        alert("Delete Product Successfully!");
    } catch (error) {
        console.log(error);
    }
}

const validate = function (new_pro) {
    if (new_pro.title === "") {
        alert("Please enter a title");
        return false;
    } else if (new_pro.price === "") {
        alert("Please enter a price");
        return false;
    } else if (isNaN(Number(new_pro.price))) {
        alert("Please enter a number");
        return false;
    } else if (Number(new_pro.price) <= 0) {
        alert("Price must be greater than zero");
        return false;
    }

    return true;
}

const performAction = async function (data) {
    if (!editingProduct) {
        try {
            await fetch(`${url}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            alert("Add Product successfully");
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            await fetch(`${url}/products/${editingProduct}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            alert("Update Product successfully");
        } catch (error) {
            console.log(error);
        }
    }
}

const addProduct = async function () {
    const new_product = {
        title: title.value.trim(),
        price: price.value.trim()
    }
    if (validate(new_product)) {
        await performAction(new_product);
    }
}

const setValueUpdate = async function (id) {
    const response = await fetch(`${url}/products/${id}`);
    const data = await response.json();
    title.value = data.title;
    price.value = data.price;
    titleModal.textContent = "Add product";
    btnAdd.textContent = "Update";
    editingProduct = id;
}

fetchProducts();
btnAdd.addEventListener('click', addProduct);
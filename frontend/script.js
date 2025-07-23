// frontend/script.js
const API_URL = 'http://localhost:5000/api';

function searchPasien() {
    const searchValue = document.getElementById('search').value;
    fetch(`${API_URL}/pasien?search=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';
            data.forEach(pasien => {
                const pasienDiv = document.createElement('div');
                pasienDiv.innerHTML = `<a href="detail.html?id=${pasien.id}">${pasien.nama}</a>`;
                resultDiv.appendChild(pasienDiv);
            });
        });
}

function loginAdmin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(`${API_URL}/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        const loginResult = document.getElementById('loginResult');
        if (data.message === 'Login successful') {
            window.location.href = 'dashboard.html';
        } else {
            loginResult.innerText = data.message;
        }
    });
}

function goBack() {
    window.history.back();
}

function addPasien() {
    // Implementasi untuk menambah pasien
}
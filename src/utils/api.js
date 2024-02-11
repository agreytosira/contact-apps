const BASE_URL = 'https://contact-api.dicoding.dev/v1';

// mendapatkan nilai access token yang disimpan pada local storage.
function getAccessToken() {
    return localStorage.getItem('accessToken');
}

// menyimpan access token ke local storage. Fungsi ini menerima satu parameter yaitu access token dalam bentuk string.
function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`
        }
    });
}

// digunakan untuk proses login. Fungsi ini menerima parameter objek berisi properti email dan password. Jika proses login berhasil, fungsi ini akan mengembalikan access token melalui objek properti data.
async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

// digunakan untuk mendaftar akun Contact API. Fungsi ini menerima parameter objek berisi properti name, email, dan password yang digunakan untuk registrasi.
async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

// mendapatkan informasi pengguna yang telah login. Fungsi ini akan mengembalikan id, name, dan email yang dapat diakses melalui objek properti data. Namun, bila permintaan gagal, data yang akan dikembalikan adalah null.
async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

// memasukkan data kontak baru ke Contact API. Fungsi ini menerima objek berisi properti name dan tag.
async function addContact({ name, tag }) {
    const response = await fetchWithToken(`${BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, tag })
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

// Mendapatkan seluruh kontak yang dimiliki pengguna pada Contact API. Fungsi ini akan mengembalikan array of contact yang dapat diakses melalui objek properti data.
async function getContacts() {
    const response = await fetchWithToken(`${BASE_URL}/contacts`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
}

// Menghapus kontak pada Contact API. Fungsi ini menerima satu parameter yaitu id sebagai patokan kontak yang akan dihapus.
async function deleteContact(id) {
    const response = await fetchWithToken(`${BASE_URL}/contacts/${id}`, {
        method: 'DELETE'
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

export { getAccessToken, putAccessToken, login, register, getUserLogged, addContact, getContacts, deleteContact };

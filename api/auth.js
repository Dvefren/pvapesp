// AUTH FOR THE USERS

//REGISTER

// We get the Form
const form = document.getElementById('regis');

const API = 'https://localhost:44363/api';

// Then we set a listener on the submit event to catch the form data and send it to the server
form.addEventListener('submit', (e) => {
    e.preventDefault();

const FormData = {
    name: document.getElementById('name').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    state: document.getElementById('state').value
}

axios.post(`${API}/user`, FormData, {
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

});

//LOGIN

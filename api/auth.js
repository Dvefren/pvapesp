// AUTH FOR THE USERS

//REGISTER

// We get the Form
const formR = document.getElementById("regis");

const API = "https://localhost:44363/api";

if (formR) {
// Then we set a listener on the submit event to catch the form data and send it to the server
formR.addEventListener("submit", (e) => {
  e.preventDefault();

  const FormData = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    state: document.getElementById("state").value,
  };

  axios
    .post(`${API}/user`, FormData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
}
//LOGIN

const formL = document.getElementById("login");

if (formL) {
formL.addEventListener("submit", (e) => {
  e.preventDefault();

   const FormData = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  
  axios.post(`${API}/login`, FormData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })
  .then(function (response) {
    console.log(response);
    if (response.status == 200) {
      window.location.href = "../index.html";
    }
  })
  .catch(function (error) {
    console.log(error);
  });
});
}
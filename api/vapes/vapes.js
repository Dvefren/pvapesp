// Imported functions
// import { uploadImage } from "../../utils/cloudinary.js";

// VAPES API CALLS
const API = "https://localhost:44315/api";

// GET ALL VAPES
axios.get(`${API}/vapes`, {
    headers: {
      "Content-Type": "application/json",
    }
}).then(function (response) {
  if (response.status == 200) {
    const tbody = document.getElementById("t-body");
    tbody.innerHTML = "";
    let responseData = response.data;
    responseData.forEach(function (vape) {
        const row = document.createElement("tr");
        row.innerHTML =`
            <td>${vape.vapeId}</td>
            <td>${vape.name}</td>
            <td>${vape.price}</td>
            <td>${vape.status}</td>
            <td>${vape.brand}</td>
            <td>${vape.flavor}</td>
            <td>
                <button class="edit-btn" data-id="${vape.vapeId}">Editar</button>
                <button class="delete-btn" data-id="${vape.vapeId}">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
 }
})
.catch(function (error) {
  console.log(error);
});

// CREATE VAPE
const Form = document.getElementById('form-v');

Form.addEventListener('submit', (e) => {
e.preventDefault();

const formData = new FormData();

  // Append form fields
  formData.append("name", document.getElementById("name").value);
  formData.append("description", document.getElementById("description").value);
  formData.append("price", document.getElementById("price").value);
  formData.append("status", document.getElementById("status").checked);
  formData.append("brand", document.getElementById("brand").value);
  formData.append("flavor", document.getElementById("flavor").value);

  // Append the file field
  formData.append("image", document.getElementById("image").files[0]);

  // Append other fields
  formData.append("nicotine", document.getElementById("nicotine").value);
  formData.append("e_liquid", document.getElementById("liquid").value);
  formData.append("mAh", document.getElementById("mah").value);
  formData.append("uses", document.getElementById("uses").value);
  formData.append("rechargable", document.getElementById("rechargable").checked);

  axios.post(`${API}/vape`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  .then(function (response) {
    if (response.status == 200) {
      alert("Vape created successfully!");
      window.location.href = "/";
    }
})
.catch(function (error) {
    alert("Error creating vape" + error);
})
})
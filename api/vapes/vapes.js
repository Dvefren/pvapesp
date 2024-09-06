

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
                <button class="delete-btn" id="delete" data-id="${vape.vapeId}">Eliminar</button>
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
    if (response.status == 201) {
      alert("Vape created successfully!");
      window.location.href = "/Views/admin/index.html"; 
    }
})
.catch(function (error) {
    alert("Error creating vape" + error);
})
})

// DELETE A VAPE

// Attach the event listener to a parent element that exists when the page loads
document.addEventListener('click', function(e) {
  // Check if the clicked element or its parent is a delete button
  const deleteBtn = e.target.closest('.delete-btn');
  
  if (deleteBtn) {
    const id = deleteBtn.dataset.id;
    
    axios.delete(`${API}/delete/vape?id=${id}`)
      .then(function (response) {
        if (response.status == 200 || response.status == 204) {
          window.location.href = "/Views/admin/index.html";
          console.log(response);
        }
      })
      .catch(function (error) {
        alert("Error deleting vape" + error);
        console.log(error);
      });
  }
});

// const deleteBtn = document.querySelectorAll(".delete-btn");
// deleteBtn.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {

//     const id = btn.dataset.id;

//   axios.delete(`${API}/delete/vape?id=${id}`)
//     .then(function (response) {
//       if (response.status == 200) {
//         alert("Vape deleted successfully!");
//         window.location.href = "/Views/admin/index.html";
//       }
//     })
//     .catch(function (error) {
//       alert("Error deleting vape" + error);
//       console.log(error);
//     });
//   })
// });

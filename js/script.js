const submit_btn = document.querySelector(`button[type = "button"]`);

submit_btn.addEventListener("click", async () => {
  let mail = document.getElementById("mail").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let comment = document.querySelector(".input-group .form-control").value;
  if (mail == "" || password == "") {
    alert("mail and password must be fill");
    return;
  }
  const data = {
    name: name,
    mail: mail,
    password: password,
    comment: comment,
   
  };
  mail = "", password = "", comment = "", name ="";
  const response = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  const response_data = await response.json();
  console.log(response_data)
  usr_card(response_data);
});

const usr_card = (response_data) => {
  const urs = document.querySelector(".usr-container .usr-lst");
  response_data.forEach(item => {
    urs.innerHTML += `
  <li>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.mail}</h6>
        <p class="card-text">${item.comment}</p>
      </div>
    </div>
  </li>`
  });
  
}
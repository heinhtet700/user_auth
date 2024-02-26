const submit_btn = document.querySelector(`button[type = "button"]`);

submit_btn.addEventListener("click", async () => {
  const mail = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  if (mail == "" || password == "") {
    alert("mail and password must be fill");
    return;
  }
  const data = {
    mail: mail,
    password: password,
  };
  const response = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  const response_data = await response.json();
  console.log(response_data);
});

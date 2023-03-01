let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value;

  let phonenumber = document.getElementById("userphonenumber").value;
  let useremail = document.getElementById("useremail").value;

  if (username == "" || phonenumber == "" || useremail == "") {
    alert("Please enter all the fields");
  } else {

    document.getElementById('name').innerHTML = username
    document.getElementById('phone_number').innerHTML = phonenumber
    document.getElementById('email').innerHTML = useremail

    document.getElementById("username").value = ''

  document.getElementById("userphonenumber").value =''
  document.getElementById("useremail").value =''


  }
});

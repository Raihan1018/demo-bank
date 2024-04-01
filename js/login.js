//
document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email").value;
  const passwordField = document.getElementById("user-password").value;

  //   verifing email and password
  if (emailField === "aa" && passwordField === "bb") {
    window.location.href = "bank.html";
  } else if (emailField == "" || passwordField == "") {
    alert("Please Enter Email and Password");
  } else {
    window.location.href = "404.html";
  }
});

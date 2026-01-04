function checkPassword() {
  const password = document.getElementById("password").value;

  updateRule("length", password.length >= 8);
  updateRule("letter", /[A-Za-z]/.test(password));
  updateRule("number", /\d/.test(password));
  updateRule("special", /[@$!%*#?&]/.test(password));
}

function updateRule(id, isValid) {
  const rule = document.getElementById(id);
  
  if (isValid) {
    rule.textContent = "✔ " + rule.textContent.slice(2);
    rule.style.color = "green";
  } 
}



function validateUser() {
  const password = document.getElementById("password").value;

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

  if (!passwordPattern.test(password)) {
    alert("Password does not meet the requirements");
    return false;
  }
  return true;
}
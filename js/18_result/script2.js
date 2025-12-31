document.getElementById("nameForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let first = document.getElementById("fn").value;
  let last  = document.getElementById("ln").value;


  document.getElementById("result").innerText = first + " " + last;
});




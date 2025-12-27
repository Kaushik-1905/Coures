


document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  let a = Number(document.getElementById("fn").value);
  let b = Number(document.getElementById("sn").value);

  let sum = a + b;

  document.getElementById("result").value =  sum;
});
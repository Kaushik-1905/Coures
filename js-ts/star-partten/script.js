// trangelle star pattern

for(let i=1; i<=5; i++){
    let str = "";   
    for(let j=1; j<=i; j++){
        str = str + "* ";
    }   
    document.write(str + "<br>");
}


// inverted star pattern
document.write("<br>");


for(let i = 5 ; i >= 1; i--){
    let str = "";
    for(let j = 1; j <= i; j++){
        str = str + "* ";
    }   
    document.write(str + "<br>");
}

// pyramid star pattern
document.write("<br>");


const rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";

  // spaces
  for (let j = 1; j <= rows - i; j++) {
    line += " ";
  }

  // stars
  for (let k = 1; k <= i; k++) {
    line += " * ";
  }

 document.write(line + "<br>")
}




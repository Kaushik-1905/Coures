// const container = document.querySelector(".container")

// for (let i = 0; i < 10; i++) {
//     const box = document.createElement("div");
//     box.classList.add("box");

//     box.innerText = i + 1;

//     box.style.display = "flex";
//     box.style.justifyContent = "center";
//     box.style.alignItems = "center";
//     box.style.color = "red";


//     container.appendChild(box);
// }



// const container = document.querySelector(".container")

// for (let i = 0 + 1; i <= 10 ; i++) {


    

// }


let a = Number(prompt("Enter a number")); 

if(a<= 10000){
    hr = a * 0.20;
    da = a * 0.80;
}
else if(a<= 20000){
    hr = a * 0.25;
    da = a * 0.90;
}
else{
    hr = a * 0.30;
    da = a * 0.95;
}

document.write("gross salary is " + (a + hr + da));
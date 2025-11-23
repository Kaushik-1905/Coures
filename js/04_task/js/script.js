// task 01

a = 0;
b = 1;
if(a++ || ++b){
   console.log(`(a++ || ++b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ || ++b) a : ${a} b :${b} is false`);   
}


// task 02
a = 0;
b = 1;

if(++a || b){
    console.log(`(++a || b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(++a || b) a : ${a} b :${b} is false`);
}

// task 03
a = 0;
b = 1;

if(++a || --b){
    console.log(`(++a || --b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(++a || --b) a : ${a} b :${b} is false`);
}

// task 04
a = 0;
b = 1;

if(++a || b--){
 console.log(`(++a || b--) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(++a || b--) a : ${a} b :${b} is false`);
}

// task 05
a = 0;
b = 1;

if(a++ || --b){
    console.log(`(a++ || --b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ || --b) a : ${a} b :${b} is false`);
}


// task 06
a = 0;
b = 1;

if(a++ || b--){
    console.log(`(a++ || b--) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ || b--) a : ${a} b :${b} is false`);
}


// && task

// task 11

a = 0;
b = 1;
if(a++ && ++b){
   console.log(`(a++ && ++b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ && ++b) a : ${a} b :${b} is false`);   
}

// task 12

a = 0;
b = 1;
if(++a && b){
   console.log(`(a++ && ++b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ && ++b) a : ${a} b :${b} is false`);   
}

// task 13

a = 0;
b = 1;
if(++a && --b){
   console.log(`(a++ && ++b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ && ++b) a : ${a} b :${b} is false`);   
}

// task 14

a = 0;
b = 1;
if(++a && b--){
   console.log(`(a++ && ++b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ && ++b) a : ${a} b :${b} is false`);   
}


// task 15

a = 0;
b = 1;
if(a++ || --b){
   console.log(`(a++ && ++b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ && ++b) a : ${a} b :${b} is false`);   
}

// task 16

a = 0;
b = 1;
if(a++ || b--){
   console.log(`(a++ && ++b) a : ${a}  b : ${b} is true`);
}else{
    console.log(`(a++ && ++b) a : ${a} b :${b} is false`);   
}





// Learning Outcome 
// Functions
Print - console.log("msg");    
PopUp - window.alert("msg");
Prompt - x = window.prompt("msg");   // PopUp+Input
DOM - document.getElementById("id_name").onclick = funxtion(){}
      document.getElementById("id_name").innerHTML = x;


// Mini Projects
// Hypotenuse calc practice program 📐
let a;  let b;  let c;
a = window.prompt("Enter Side A: ");    a = Number(a);
b = window.prompt("Enter Side B: ");    b = Number(b);
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    console.log("√(",a,"² +",b,"²)=",c);

// Counter program #️⃣
let counter = 0;
document.getElementById("dec").onclick = function(){counter=counter-1;  document.getElementById("counter").innerHTML = counter;}
document.getElementById("rst").onclick = function(){counter=0; document.getElementById("counter").innerHTML = counter;} 
document.getElementById("inc").onclick = function(){counter=counter+1; document.getElementById("counter").innerHTML = counter;}

// Random number generator 🎲
let x = Math.floor(Math.random()*6)+1;  console.log("X: ",x);
document.getElementById("button").onclick = function(){
    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = Math.floor(Math.random()*6)+1;
    document.getElementById("x").innerHTML = Math.floor(Math.random()*6)+1;
}

// Number guessing game 🔢
let x = Math.floor(Math.random()*10)+1;     let c=0;
document.getElementById("button").onclick = function(){ 
    c = c+1;    let y = document.getElementById("input").value;
    if (x==y){ window.alert(`${y} is correct! & it took ${counter} times!`);}
    else if (x>y) {window.alert(`${y} is too small!`);}
    else {window.alert(`${y} is too large!`);}
}

// Calculator

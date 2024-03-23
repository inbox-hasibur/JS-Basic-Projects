// Mini Projects
// 01.Hypotenuse calc practice program 📐
let h1;  let b1;  let r1;
/* h1 = window.prompt("Enter Height: ");    h1 = Number(a1);
b1 = window.prompt("Enter Base: ");         b1 = Number(b1);
r1 = Math.sqrt(Math.pow(h1,2) + Math.pow(b1,2));
console.log("√(",a1,"² +",b1,"²)=",c1); */
document.getElementById("submit1").onclick = function(){
    h1 = document.getElementById("inputH").value;
    b1 = document.getElementById("inputB").value;
    r1 = Math.sqrt(Math.pow(h1,2) + Math.pow(b1,2));
    document.getElementById("h1").innerHTML = h1;
    document.getElementById("b1").innerHTML = b1;
    document.getElementById("r1").innerHTML = r1;
}
// 02.Counter program #️⃣
let counter = 0;
document.getElementById("dec2").onclick = function(){counter=counter-1;  document.getElementById("counter2").innerHTML = counter;}
document.getElementById("rst2").onclick = function(){counter=0; document.getElementById("counter2").innerHTML = counter;} 
document.getElementById("inc2").onclick = function(){counter=counter+1; document.getElementById("counter2").innerHTML = counter;}
// 03.Random number generator 🎲
document.getElementById("button3").onclick = function(){
    document.getElementById("x3").innerHTML = Math.floor(Math.random()*6)+1;;
    document.getElementById("y3").innerHTML = Math.floor(Math.random()*6)+1;
    document.getElementById("z3").innerHTML = Math.floor(Math.random()*6)+1;
}
// 04.Number guessing game 🔢
let cpu = Math.floor(Math.random()*10)+1;     let c4=0;
document.getElementById("button4").onclick = function(){ 
    c4 = c4+1;    let guess = document.getElementById("input4").value;
    if (cpu==guess){ window.alert(`${guess} is correct! & it took ${c4} times!`);}
    else if (cpu>guess) {window.alert(`${guess} is too small!`);}
    else {window.alert(`${guess} is too large!`);}
}
// 05.Temperature conversion program 🌡️
document.getElementById("submit5").onclick = function (){
    let temperature = document.getElementById("input5").value; let temp5=0;
    if (document.getElementById("c5").checked){ temp5 = (5/9)*(temperature-32);
        document.getElementById("r5").innerHTML = `Temparature: ${temperature} F = ${temp5.toFixed(2)} C`;}
    else if (document.getElementById("f5").checked){ temp5 = ((9/5)*temperature)+32;
        document.getElementById("r5").innerHTML = `Temparature: ${temperature} C = ${temp5.toFixed(2)} F`;}
    else{ document.getElementById("r5").innerHTML = `Please, Select a temparature unit !!!`}
}


// Calculator
// Learning Outcome 
/* Functions
Print - console.log("msg");    
PopUp - window.alert("msg");
Prompt - x = window.prompt("msg");   // PopUp+Input
DOM - document.getElementById("id_name").onclick = funxtion(){}
      document.getElementById("id_name").innerHTML = x;
      x = document.getElementById("id_name").innerHTML;
      x = document.getElementById("id_name").value;
      bool = document.getElementById("input_radio").checked;
*/

// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*





// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc

let h1 = document.querySelector("h1");


let changeColor = () =>{
     h1.style.color = "white";
     h1.style.background = "red";
}

h1.addEventListener("click",changeColor);
// dblclick

// ### 2. Au hover du h3, son texte rétrécit d'un caractère 

let h3 = document.querySelector("h3");

let reduce = () =>{
     h3.innerText = h3.innerText.substr(0,h3.innerText.length-1)
}

h3.addEventListener("click",reduce);
//mouseover

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir


let p = document.querySelector("p");


let changeColorP = () =>{
    
     if(p.style.color == "gold" && p.style.background == "blue"){
          p.style.background = "white";
          p.style.color = "black"
     }else{
          p.style.color = "gold";
          p.style.background = "blue";
     }
}

p.addEventListener("click",changeColorP);


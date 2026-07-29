
export function menu(){
   
    content.textContent = ""
    let contact = document.createElement("div")
 let sign = document.createElement("h1")
 let bag = document.createElement("div")
 contact.classList.add("form")
 sign.textContent= "Menu Contact Page"
content.appendChild(contact)
content.appendChild(sign)

for(let i = 0; i < 4 ;i++){
 
    let divTex = document.createElement("div");
    divTex.classList.add("phone");
    contact.appendChild(divTex);
  divTex.textContent =`${(Math.random()*Math.random()*100) + 100}-${(Math.random() *Math.random()*100)+ 80} -${(Math.random()*Math.random()*100) +6000 } Boss 's Phone ${i}`;
    contact.appendChild(divTex)}
    
   
}


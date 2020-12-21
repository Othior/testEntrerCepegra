let add = document.querySelector(".add");
let list = document.querySelector(".list");
let input = document.querySelector(".QueFaire");
let logoInput = document.querySelector(".logoInput");

input.addEventListener("focus",function(){
    logoInput.classList.add("colorFocus");
})
input.addEventListener("focusout",function(){
    logoInput.classList.remove("colorFocus");
})

let id = 0;

list.innerHTML = "";

add.addEventListener("click", function() {
    let valeur = input.value;
    list.innerHTML += `<li class="catcha">
    <div class="square">
        
    </div>
    <p class="content">${valeur}</p><span data-id="${id}" class="material-icons yes">delete</span>
    </li>`;
    let square = document.querySelectorAll(".square")
    let catcha = document.querySelectorAll(".catcha")
    square.forEach(element => {
        element.addEventListener("click",function(){

            element.classList.toggle("validate");
        })
    });
    let deleted = document.querySelectorAll(".yes");

    deleted.forEach(element => {
        element.addEventListener("click",function(){
            let dataValue = element.getAttribute("data-id");
            catcha[dataValue].remove();
        })
    });
    
id++
})




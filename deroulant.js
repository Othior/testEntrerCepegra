let btnPierre = document.querySelector(".iconsPierre");
let btnBenoit = document.querySelector(".iconsBenoit");
let contentPierre = document.querySelector(".pierreContent");
let contentBenoit = document.querySelector(".benoitContent");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let input = document.querySelector(".pseudo");
let textarea = document.querySelector(".message");
let form = document.querySelector(".form");
let intervenir = document.querySelector(".intervenir");

// deroulant
btnPierre.addEventListener("click",function(){
    if (contentPierre.style.display === "none") {
        contentPierre.style.display = "block";
        btnPierre.innerHTML="-";
    } else {
        contentPierre.style.display = "none";
        btnPierre.innerHTML="+";
    }
})

btnBenoit.addEventListener("click",function(){
    if (contentBenoit.style.display === "none") {
        contentBenoit.style.display = "block";
        btnBenoit.innerHTML="-";
    } else {
        contentBenoit.style.display = "none";
        btnBenoit.innerHTML="+";
    }
})


// add content
add.addEventListener("click", function() {
    let valeur = input.value;
    let message = textarea.value;
    list.innerHTML += `<div class="deroulant">
    <h3><span class="iconsInconnus">-</span> ${valeur} a dit :</h3>
    </div>
    <p class="InconnusContent">${message}</p>`;
    form.hidden="false";
    intervenir.hidden="false";
    let iconeInconnu = document.querySelector(".iconsInconnus");
    let InconnuContent = document.querySelector(".InconnusContent");

    iconeInconnu.addEventListener("click",function(){
    if (InconnuContent.style.display === "none") {
        InconnuContent.style.display = "block";
        iconeInconnu.innerHTML="-";
    } else {
        InconnuContent.style.display = "none";
        iconeInconnu.innerHTML="+";
    }
})
})




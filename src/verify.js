const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("click",() => {
    if(checkbox.checked){
        window.location = "page1.html";
    }
})

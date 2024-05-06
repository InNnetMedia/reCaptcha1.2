let blocks = document.getElementsByName("grid-block");
let imageId = document.getElementById("image-identifier");
let identifier = document.getElementById("identifier");
let comparator = 0;
const btnConfirm = document.getElementById("btnConfirm");
const iconInfo = document.getElementById("icon-info");
const iconReload = document.getElementById("icon-reload");
const imageArray = ["web-images/re-images/pexels-carlosdetrip-16131572.jpg",
                    "web-images/re-images/pexels-dario-rawert-724203352-18907470.jpg",
                    "web-images/re-images/pexels-felix-mejica-570147530-16890700.jpg",
                    "web-images/re-images/pexels-it-s-mj-1143455268-21040995.jpg",
                    "web-images/re-images/pexels-jose-prada-1063299555-20522263.jpg"];
const imageNames = ["woman","man","young man","boat","2 people"];
const correctCombination = [63,113,76,34,10];




let displayedImage = Math.floor(Math.random()*imageArray.length);
imageId.src = imageArray[displayedImage];
identifier.textContent = imageNames[displayedImage];


blocks.forEach((element,index) => {
    let isClicked = false;
    let selectedSquare = element.id;
    selectedSquare = Number(selectedSquare);
    
    element.addEventListener("click",() => {
        btnConfirm.textContent = "SUBMIT";
        if(!isClicked){
            element.style.backgroundColor = "rgba(0,0,0,0.6)";
            comparator += selectedSquare;
            isClicked = true;
        }else{
            element.style.backgroundColor = "rgba(0,0,0,0)";
            comparator -= selectedSquare;
            isClicked = false;
        }
        
    })
})

//Action Handler Methods/Functions

btnConfirm.addEventListener("click",() => {
    if(comparator == correctCombination[displayedImage]){
        window.location = "https://www.google.com/";
    }else{
        window.location = "page1.html";
    }
})
iconReload.addEventListener("click",() => {
    window.location = "page1.html";
})
iconInfo.addEventListener("click", () => {
    window.location = "https://developers.google.com/recaptcha/docs/faq";
})

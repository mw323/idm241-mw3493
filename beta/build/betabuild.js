const saveButton = document.querySelector(".save-btn");
const tooltip = document.querySelector(".tooltip");
const listenButton = document.querySelector(".listen-btn");


saveButton.addEventListener("click", function (){
    saveButton.classList.toggle("saved");

    if(saveButton.classList.contains("saved")){
        tooltip.textContent = "Translation saved";
    }else{
        tooltip.textContent = "Save translation";
    }
});

let timer;

listenButton.addEventListener("click", function (){

    if(listenButton.classList.contains("playing")){
        listenButton.classList.remove("playing");
        clearTimeout(timer);
    }else{
        listenButton.classList.add("playing");
        timer = setTimeout(function (){
            listenButton.classList.remove("playing");
        }, 3000);
    }
});
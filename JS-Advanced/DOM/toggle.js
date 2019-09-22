function toggle() {
    let textDiv = document.getElementById("extra");
    let toggleButton = document.getElementsByClassName("button")[0];
    
    if (toggleButton.textContent === "More"){
        textDiv.style.display = "block";
        toggleButton.textContent = "Less";
    }  else {
        textDiv.style.display = "none";
        toggleButton.textContent = "More";
    }
}
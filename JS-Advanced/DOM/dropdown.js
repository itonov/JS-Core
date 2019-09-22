function addItem() {
    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;
    let optionElement = document.createElement("option");
    optionElement.value = itemValue;
    optionElement.textContent = itemText;

    document.getElementById("menu").appendChild(optionElement);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}
function changeName(id){
    var element = document.querySelector(id);
    var name = "Janice Doe";
    element.innerText = name;
    console.log(element.text)
}
function acceptReject(id){
    var element = document.querySelector(id);
    element.remove();
    var element2 = document.querySelector(".count");
    var counter = Number(element2.innerText);
    counter--;
    element2.innerText = counter;
}
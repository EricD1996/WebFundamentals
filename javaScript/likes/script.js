function addLike(id){
    var element = document.querySelector(id);
    var likes = Number(element.innerText);
    likes++;
    element.innerText = likes;
}
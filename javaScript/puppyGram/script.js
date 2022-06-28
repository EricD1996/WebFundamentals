function uploadPup(element){
    console.log("wazzaaaa", element);
    element.innerText = "Uploaded! Thank you.";
}

function removeElement(element){
    console.log("hello");
    element.remove();
}

function playVideo(element){
    console.log("");
    element.play();
}

function pauseVideo(element){
    element.pause();
}

function changeImg(element){
    console.log("change", element);
    element.src = "./resources/anothaPuppy.jpeg";
}

function cookieMonster(){
    console.log("cookie");
    var element = document.querySelector(".accept");
    element.remove();
}

function incrementLike(id){
    var element = document.querySelector(id);
    var likeCount = Number(element.innerText);
    likeCount++;
    element.innerText = likeCount;
}
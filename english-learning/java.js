const lessons = document.querySelectorAll(".lesson");
const player = document.getElementById("videoPlayer");
const video = document.getElementById("lessonVideo");

lessons.forEach(lesson => {

lesson.addEventListener("click", () => {

if (lesson.classList.contains("locked")) {

alert("Subscribe to unlock lessons.");
return;

}

let src = lesson.getAttribute("data-video");

video.src = src;

player.classList.remove("hidden");

video.play();

});

});


function closeVideo(){

video.pause();
video.src = "";
player.classList.add("hidden");

}


function unlockLessons(){

let code = document.getElementById("unlockCode").value;

if(code === "CURATED2026"){

document.querySelectorAll(".lesson").forEach(l => {

l.classList.remove("locked");

let icon = l.querySelector(".lock-icon");

if(icon){
icon.remove();
}

});

alert("Lessons unlocked. Welcome.");

}

else{

alert("Invalid access code.");

}

}
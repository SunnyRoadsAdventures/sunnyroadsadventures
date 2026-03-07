const lessons = document.querySelectorAll(".lesson");
const video = document.getElementById("lessonVideo");


lessons.forEach(lesson => {

lesson.addEventListener("click", () => {

if (lesson.classList.contains("locked")) {

alert("Subscribe to unlock lessons.");
return;

}

let src = lesson.getAttribute("data-video");

video.src = src;

video.play();

window.scrollTo({
top:0,
behavior:"smooth"
});

});

});


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
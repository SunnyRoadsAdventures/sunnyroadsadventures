const lessons = document.querySelectorAll(".lesson");

const player = document.getElementById("videoPlayer");

const video = document.getElementById("lessonVideo");


// Lesson click
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


// Close video
function closeVideo(){

video.pause();

video.src = "";

player.classList.add("hidden");

}


// Unlock lessons
function unlockLessons(){

let code = document.getElementById("unlockCode").value;

if(code === "CURATED2026"){

document.querySelectorAll(".lesson").forEach(l => {

l.classList.remove("locked");

});

alert("Lessons unlocked. Welcome.");

}

else{

alert("Invalid access code.");

}

}
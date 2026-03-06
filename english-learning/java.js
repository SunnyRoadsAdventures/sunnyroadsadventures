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

function closeVideo() {

video.pause();

player.classList.add("hidden");

video.src = "";

}
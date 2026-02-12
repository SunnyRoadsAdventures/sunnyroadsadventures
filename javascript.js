document.addEventListener("DOMContentLoaded", function () {

    const mission = document.getElementById("missionVideo");
    const blackie = document.getElementById("blackieVideo");
    const hey = document.getElementById("heyVideo");

    // Click mission to start
    mission.addEventListener("click", function () {
        mission.play();
    });

    // When mission ends
    mission.addEventListener("ended", function () {

        // Hide mission
        mission.style.display = "none";

        // Show blackie + hey
        blackie.style.display = "block";
        hey.style.display = "block";

        // Play both
        blackie.play();
        hey.play();
    });

});

const mission = document.getElementById("missionVideo");
const blackie = document.getElementById("blackieVideo");
const hey = document.getElementById("heyVideo");

// Hide new videos at start
if (blackie) blackie.style.display = "none";
if (hey) hey.style.display = "none";
if (mission) mission.style.display = "none";

// When mission ends → show blackie + hey
if (mission) {
    mission.addEventListener("ended", function () {

        mission.style.display = "none";

        blackie.style.display = "block";
        hey.style.display = "block";

        blackie.play();
        hey.play();
    });
}
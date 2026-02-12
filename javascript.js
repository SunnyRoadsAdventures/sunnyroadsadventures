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
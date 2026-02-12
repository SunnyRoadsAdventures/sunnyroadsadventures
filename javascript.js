document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("container");
    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");

    const mission = document.getElementById("missionVideo");
    const blackie = document.getElementById("blackieVideo");
    const hey = document.getElementById("heyVideo");

    // Hide mission & next videos at start
    mission.style.display = "none";
    blackie.style.display = "none";
    hey.style.display = "none";

    function startMission() {
        container.style.display = "none";
        mission.style.display = "block";
        mission.play();
    }

    // Go button
    goBtn.addEventListener("click", startMission);

    // Skip button
    skipBtn.addEventListener("click", startMission);

    // When mission ends
    mission.addEventListener("ended", function () {

        mission.style.display = "none";

        blackie.style.display = "block";
        hey.style.display = "block";

        blackie.play();
        hey.play();
    });

});
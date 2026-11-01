
const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(function () {
                musicButton.textContent = "PAUSE MUSIC";
            })
            .catch(function () {
                alert("ไม่สามารถเล่นเพลงได้ กรุณาตรวจสอบไฟล์เพลง");
            });

    } else {

        music.pause();
        musicButton.textContent = "PLAY MUSIC";

    }

});

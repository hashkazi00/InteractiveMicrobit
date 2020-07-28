const svg = document.getElementById("eaba38b3-1c3b-4f1a-8c99-6d1f9e08f1db");

const styles = svg.getElementById("style");


const allLeds = svg.querySelectorAll(".beca1e47-c62f-45b3-854b-ee7a008784ba");

const buttons = svg.querySelectorAll('[id^=button]');

function replyClick(clicked_id) {
    allLeds[clicked_id - 1].classList.toggle("beca1e47-c62f-45b3-854b-ee7a008784ba-1");
};

function replySound(clicked_id) {
    // const clickedId = svg.querySelector(`#${clicked_id}`);
    const audio = document.querySelector(`audio[data-key="65"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
};

// class="a60f95b4-5cf7-459a-ae90-18f442c30dd1" : Button A

// class="a60f95b4-5cf7-459a-ae90-18f442c30dd1" : Button B


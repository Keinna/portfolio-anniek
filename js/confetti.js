function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function popConfetti() {
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
        shapes: ["square"],
        colors: ["#FFF", "#0000ff"],
    });
}

// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll("button, a");
//     buttons.forEach((button) => {
//         button.addEventListener("click", popConfetti);
//         console.log("click");
//     });
// });

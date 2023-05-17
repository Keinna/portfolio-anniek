document.addEventListener("DOMContentLoaded", () => {
console.log('I have loaded')

    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 103) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#00cccc ${scrollValue}%, #FFF ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    const confettiTrigger = document.querySelector("#confetti-trigger");
    confettiTrigger.addEventListener("mouseenter", startConfetti);

    function startConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            angle: 70,
            origin: { x: 0.3, y: 0.6 },
            colors: ["#00cccc", "#e5ffff"],
            shapes: ["star", "square", "square"],
        });
    }

   

const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

});    


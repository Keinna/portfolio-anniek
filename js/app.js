document.addEventListener("DOMContentLoaded", () => {
    const expandsMore = document.querySelectorAll("[expand-more]");

    function expand() {
        const showContent = document.getElementById(this.dataset.target);
        const contentHeight = showContent.scrollHeight + "px";

        if (showContent.classList.contains("expand-active")) {
            this.innerHTML = this.dataset.showtext;
            showContent.style.maxHeight = 0;
        } else {
            this.innerHTML = this.dataset.hidetext;
            showContent.style.maxHeight = contentHeight;
        }

        showContent.classList.toggle("expand-active");
    }

    expandsMore.forEach((expandMore) => {
        expandMore.addEventListener("click", expand);
    });

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

    const projectCardsContainer = document.getElementById(
        "projectCardsContainer",
    );
    const projectCards = Array.from(
        projectCardsContainer.getElementsByClassName("project-card"),
    );
    const filterWrapper = document.querySelector(".filter__wrapper");
    const selectedProjectsCountElement = document.getElementById(
        "selectedProjectsCount",
    );

    filterWrapper.addEventListener("click", handleFilterClick);

    let selectedProjectsCount = 0;
    let selectedCategory = "all";

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleFilterClick(event) {
        if (!event.target.classList.contains("filter-item")) {
            return;
        }

        filterWrapper.querySelectorAll(".filter-item").forEach((item) => {
            item.classList.remove("active");
        });

        event.target.classList.add("active");

        selectedCategory = event.target.dataset.target;

        selectedProjectsCount = 0;

        projectCards.forEach((card) => {
            const cardCategories = card.dataset.categories.split(" ");

            if (
                selectedCategory === "all" ||
                cardCategories.includes(selectedCategory)
            ) {
                card.style.display = "block";
                selectedProjectsCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (selectedCategory !== "all") {
            selectedProjectsCountElement.textContent = `${capitalizeFirstLetter(
                selectedCategory,
            )} project(s): ${selectedProjectsCount}`;
        } else {
            selectedProjectsCountElement.textContent = "";
        }
    }
});


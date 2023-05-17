
//     // Filter-related code here

// const loadMoreButton = document.getElementById("loadMore");
// const projectCardsContainer = document.getElementById(
//     "projectCardsContainer",
// );
// let projectCards = Array.from(
//     projectCardsContainer.getElementsByClassName("project-card"),
// );
// const filterWrapper = document.querySelector(".filter__wrapper");
// const selectedProjectsCountElement = document.getElementById(
//     "selectedProjectsCount",
// );

// let selectedProjectsCount = 0;
// let selectedCategory = "all";
// let visibleCardsLimit = 6;

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// function displayProjectCards() {
//     let visibleCardsCount = 0;
//     let categoryMatchCount = 0;

//     projectCards.forEach((card) => {
//         const cardCategories = card.dataset.categories.split("~");

//         if (
//             selectedCategory === "all" ||
//             cardCategories.includes(selectedCategory)
//         ) {
//             if (visibleCardsCount < visibleCardsLimit) {
//                 card.style.display = "block";
//                 visibleCardsCount++;
//             } else {
//                 card.style.display = "none";
//             }
//             categoryMatchCount++;
//         } else {
//             card.style.display = "none";
//         }
//     });

//     if (selectedCategory !== "all") {
//         selectedProjectsCountElement.textContent = `${capitalizeFirstLetter(
//             selectedCategory,
//         )} project(s): ${categoryMatchCount}`;
//     } else {
//         selectedProjectsCountElement.textContent = "";
//     }

//     const categoryVisibleCards = projectCards.filter(
//         (card) =>
//             selectedCategory === "all" ||
//             card.dataset.categories.includes(selectedCategory),
//     );

//     if (visibleCardsCount >= categoryVisibleCards.length) {
//         loadMoreButton.style.display = "none";
//     } else {
//         loadMoreButton.style.display = "block";
//     }
// }

// displayProjectCards();

// filterWrapper.addEventListener("click", handleFilterClick);
// loadMoreButton.addEventListener("click", handleLoadMoreClick);

// function handleFilterClick(event) {
//     if (!event.target.classList.contains("filter-item")) {
//         return;
//     }

//     filterWrapper.querySelectorAll(".filter-item").forEach((item) => {
//         item.classList.remove("active");
//     });

//     event.target.classList.add("active");

//     selectedCategory = event.target.dataset.target;
//     selectedProjectsCount = 0;
//     visibleCardsLimit = 6; // Reset visibleCardsLimit when a new category is selected

//     displayProjectCards();
// }

// function handleLoadMoreClick() {
//     visibleCardsLimit += 2;
//     displayProjectCards();
// }
// console.log("filter is loaded")

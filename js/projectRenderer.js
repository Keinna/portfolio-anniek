// Render the projects
function renderProjects() {
    const projectsContainer = document.querySelector('[data-render-container]');
  
    // Render each project using the template
    projects.forEach(function (project) {
      const projectCardHTML = projectCardTemplate(project);
      projectsContainer.innerHTML += projectCardHTML;
    });
  // Expand functionality
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

    // Filter-related code here
    const loadMoreButton = document.getElementById("loadMore");
    const projectCardsContainer = document.getElementById("projectCardsContainer");
    let projectCards = Array.from(projectCardsContainer.getElementsByClassName("project-card"));
    const filterWrapper = document.querySelector(".filter__wrapper");
    const selectedProjectsCountElement = document.getElementById("selectedProjectsCount");
  
    let selectedProjectsCount = 0;
    let selectedCategory = "all";
    let visibleCardsLimit = 6;
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    function displayProjectCards() {
      let visibleCardsCount = 0;
      let categoryMatchCount = 0;
  
      projectCards.forEach((card) => {
        const cardCategories = card.dataset.categories.split("~");
  
        if (selectedCategory === "all" || cardCategories.includes(selectedCategory)) {
          if (visibleCardsCount < visibleCardsLimit) {
            card.style.display = "block";
            visibleCardsCount++;
          } else {
            card.style.display = "none";
          }
          categoryMatchCount++;
        } else {
          card.style.display = "none";
        }
      });
  
      if (selectedCategory !== "all") {
        selectedProjectsCountElement.textContent = `${capitalizeFirstLetter(selectedCategory)} project(s): ${categoryMatchCount}`;
      } else {
        selectedProjectsCountElement.textContent = "";
      }
  
      const categoryVisibleCards = projectCards.filter((card) => selectedCategory === "all" || card.dataset.categories.includes(selectedCategory));
  
      if (visibleCardsCount >= categoryVisibleCards.length) {
        loadMoreButton.style.display = "none";
      } else {
        loadMoreButton.style.display = "block";
      }
    }
  
    displayProjectCards();
  
    filterWrapper.addEventListener("click", handleFilterClick);
    loadMoreButton.addEventListener("click", handleLoadMoreClick);
  
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
      visibleCardsLimit = 6; // Reset visibleCardsLimit when a new category is selected
  
      displayProjectCards();
    }
  
    function handleLoadMoreClick() {
      visibleCardsLimit += 2;
      displayProjectCards();
    }
  }
  
  // Load the template from the external file
  const templateRequest = new XMLHttpRequest();
  templateRequest.open("GET", "project-template.hbs", true);
  templateRequest.onreadystatechange = function () {
    if (templateRequest.readyState === 4 && templateRequest.status === 200) {
      // Compile the template once it is loaded
      projectCardTemplate = Handlebars.compile(templateRequest.responseText);
  
      // Call the function to render the projects
      renderProjects();
    }
  };
  templateRequest.send();
  

  
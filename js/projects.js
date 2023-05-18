var projects = [
    {
        categories: "react",
        imageLink: "https://github.com/Keinna/search-images-api-react",
        imageSrc: "/assets/img/mockup/mockup-react-images-api.png",
        imageAlt: "mockup react images api",
        title: "React image fetcher (API)",
        highlights: [
            "Fetch data from external API",
            "Searchbar component",
            "Background component",
            "Image display"
        ],
        paragraphs: [
            {
                title: "Fetch data from external API",
                content: "In this case Axios is used to fetch image data from an external API endpoint (Unsplash API). The searchImages function takes a search term as an argument and returns a Promise that resolves to an array of image data. The axios.get method is used to make a GET request to the Unsplash API endpoint for searching photos, passing in the search term as a query parameter and an Authorization header with the client ID. The response data is then extracted from the response object and returned."
            },
            {
                title: "SearchBar component",
                content: "The SearchBar component renders a search bar with a label and input field. The component uses the useState hook to manage the state of the search term input field and the onSubmit prop to handle form submission. When the user submits the form (by pressing enter), the onSubmit function passed in as a prop is called with the current value of the search term input field."
            },
            {
                title: "Background component",
                content: "If there are no images to display, a background component is shown. This can help improve the user experience by preventing the page from appearing empty or unfinished."
            },
            {
                title: "Image display",
                content: "The images are displayed in a list format using a component called ImageList. The images are placed in a responsive grid."
            }
        ],
        expandId: "showMoreContent1",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-react", alt: "React icon" },
            { src: "assets/img/sprite.svg#icon-npm", alt: "NPM icon" },
            { src: "assets/img/sprite.svg#icon-visualstudiocode", alt: "Visual Studio Code icon" },
            { src: "assets/img/sprite.svg#icon-github", alt: "GitHub icon" }
        ],
        sourceCodeLink: "https://github.com/Keinna/search-images-api-react" 
    },
    {
        categories: "javascript~bootstrap~animations~sass",
        imageLink: "/",
        imageSrc: "/assets/img/mockup/mockup-portfolio.png",
        imageAlt: "mockup portfolio",
        title: "Portfolio V2",
        highlights: ["Handlebars Templating", "Sprite-SVG", "Skip link", "Scroll to top with progress"],
        paragraphs: [
          {
            title: "Handlebars Templating",
            content: "While adding more and more projects, I started to repeat myself. The HTML file was growing and growing, resulting in redundant code and maintenance challenges. In order to address these issues and improve code organization, I looked for a solution. That is when I discovered Handlebars templating.\nI created a separate 'projects-template.hbs' file. This template allowed me to define the structure and layout of a single project card. By embedding Handlebars expressions ({{...}}) within this template, I could specify dynamic content that would be replaced with actual values when the template is rendered.\nThis approach offers several advantages. Firstly, it greatly reduces code duplication and maintenance efforts. Instead of manually repeating the HTML structure for each project, I can now define it once in the template and reuse it for all projects. Any updates or modifications only need to be made in one place.\nSecondly, separating the template from the HTML file enhances readability and organization. It isolates the presentation logic, making it easier to understand and maintain the structure of the project card.\nMoreover, Handlebars templating provides a clean separation between the structure and the data. The project data, including titles, image links, highlights, and other relevant information, is stored in a separate 'projects.js' file. The renderProjects function retrieves the Handlebars template, compiles it using Handlebars, and dynamically generates the HTML for each project by iterating over the array of project data. This decoupling of data and presentation facilitates scalability and enables easy updates or additions to the project content without modifying the template itself."
          },
          {
            title: "Sprite-SVG",
            content: "First time I used a sprite-file with all the SVG's in it. You can access all the icons through this file. So you only have one http request (instead of 10 files)."
          },
          {
            title: "Skip link",
            content: "In my opnion skip links are important. They allow keyboard-only users, sighted or not, to navigate more easily through your page."
          },
          {
            title: "Scroll to top",
            content: "This button will show when you scroll down the page. The colored border will show where you are on the page. Nice to have when your page has a lot of content."
          }
        ],
        expandId: "showMoreContent2",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-javascript", alt: "Javascript icon" },
            { src: "assets/img/sprite.svg#icon-figma", alt: "Figma icon" },
            { src: "assets/img/sprite.svg#icon-bootstrap", alt: "Bootstrap icon" },
            { src: "assets/img/sprite.svg#icon-sass", alt: "Sass icon" }
        ],
        liveProjectLink: "/",
        sourceCodeLink: "https://github.com/Keinna/portfolio-anniek/"
      },
    {
        categories: "javascript",
        imageLink: "https://e-commerce-project.anniek.it/",
        imageSrc: "/assets/img/mockup/mockup-ecommerce.png",
        imageAlt: "mockup e-commerce project",
        title: "JavaScript project",
        highlights: ["Display cart item count in navigation", "Checkout cart functionality", "Loads data from 'database'", "Vanilla JavaScript project"],
        paragraphs: [
          {
            title: "Display cart item count in navigation",
            content: "This badge will always be visible in the navigation. It shows the total amount of items in your cart. Thanks to local storage it will always show the right amount of items. One click brings you to the cart with the right amount of items and the right price."
          },
          {
            title: "Checkout cart functionality",
            content: "You can add or remove items. It is also possible to clear the whole cart at once. At the bottom of the cart you can see the total amount before you purchase."
          },
          {
            title: "Loads data from 'database'",
            content: "The data for the items is coming from a different file. This file mimicks a database. When you add data to the file, the JavaScript will display the right price, name, image and description in the store dynamically."
          },
          {
            title: "Vanilla JavaScript project",
            content: "However it would probably be easier to use a framework to set up a store. This project was a great way to practice my vanilla JavaScript skills."
          }
        ],
        expandId: "showMoreContent3",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-javascript", alt: "Javascript icon" },
        ],
        liveProjectLink: "https://e-commerce-project.anniek.it/",
        sourceCodeLink: "https://github.com/Keinna/e-commerce" 
      },
        {
        categories: "javascript~webpack~sass",
        imageLink: "https://onepager-balloon.anniek.it/",
        imageSrc: "/assets/img/mockup/mockup-balloon.png",
        imageAlt: "mockup balloon",
        title: "Webpack onepager",
        highlights: ["Webpack", "Animations on scroll (JavaScript)", "Dev dependencies", "Srcset"],
        paragraphs: [
          {
            title: "Webpack",
            content: "Webpack was used as a module bundler for this project. Even though the project itself is not particularly large, it provided an excellent opportunity to practice working with webpack. I have learned how webpack behaves and handles the different files within the project."
          },
          {
            title: "Animations on scroll (JavaScript)",
            content: "Several animations are triggered based on scroll events. These captivating animations add further visual interest and interactivity to the page. For example, as you scroll, various elements come to life with dynamic transitions and transformations. In particular, the logo smoothly adjusts its width and height, creating an eye-catching effect. Moreover, the header undergoes a gradual color transformation, enhancing the overall visual experience. Thanks to the implementation of JavaScript, the active links are intelligently highlighted, ensuring users have a clear indication of their current position on the page."
          },
          {
            title: "Dev dependencies",
            content: 'Dev dependencies are an essential part of a developer\'s toolkit. These dependencies are used during the development phase to build, optimize, and streamline the project and are not required for the production environment.\n\nIn this project, some dev dependencies include "@babel/core," which is used for transpiling modern JavaScript code. Additionally, "webpack" and "webpack-cli" are utilized as a module bundler, while "webpack-dev-server" enables live reloading and a development server for a smooth development experience.\n\nOther dev dependencies like "postcss-loader," "css-loader," and "style-loader" contribute to handling CSS processing and module loading. The "html-webpack-plugin" simplifies the generation of HTML files, and the "clean-webpack-plugin" helps clean the build directory before each build.'
          },
          {
            title: "Srcset",
            content: "To ensure responsiveness and optimize page loading, sourceset was employed on the images throughout the page. This technique allows for the selection of the most suitable image based on the device's characteristics. As a result, smaller devices receive smaller images, which not only enhances the page's responsiveness but also leads to faster loading times. By delegating the decision to the browser, the page becomes more efficient and delivers an optimal experience across different devices."
          }
        ],
        expandId: "showMoreContent4",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-javascript", alt: "Javascript icon" },
            { src: "assets/img/sprite.svg#icon-sass", alt: "Sass icon" },
            { src: "assets/img/sprite.svg#icon-npm", alt: "npm icon" },
            { src: "assets/img/sprite.svg#icon-webpack", alt: "webpack icon" }
        ],
        liveProjectLink: "https://onepager-balloon.anniek.it/",
        sourceCodeLink: "https://github.com/Keinna/onepager-balloon/"
      },
        {
        categories: "sass~animations",
        imageLink: "https://sass-project.anniek.it/",
        imageSrc: "/assets/img/mockup/mockup-sass.png",
        imageAlt: "mockup sass project",
        title: "Sass / BEM project",
        highlights: ["Sass architecture", "Animations", "Custom grid", "BEM methodology"],
        paragraphs: [
          {
            title: "Sass architecture",
            content: "To build this project, Sass architecture is used. The Sass folder has several subfolders: abstracts, base, components, layout and pages. This makes it easier to manage large projects and keep the code organized.\n\nOne of the main benefits of using a CSS preprocessor like Sass is that it can make the development process more efficient. This is because Sass allows for features such as variables, mixins, and nesting, which can save time and effort when writing and maintaining code."
          },
          {
            title: "Animations",
            content: " This project has several animations. For example, take a look at the cards section. All cards have a flip animation. The card element has a 3D space created using the perspective rule, and two child elements representing the front and back sides of the card. The back side of the card is hidden by default using the transform and backface-visibility rules, and is revealed when the card is hovered over.\n\nOne of the main benefits is that animations can increase user engagement and drive conversion rates. Captivating animations can grab visitors' attention and guide them towards taking the desired action, such as signing up for a newsletter or clicking a call-to-action button or form field."
          },
          {
            title: "Custom grid",
            content: 'This project has a custom grid system that can be used to create a responsive layout for a website. The grid system uses rows and columns to structure content on a webpage, and is designed to be customizable and flexible. The grid system uses Sass variables to modify the number of columns and the width of the gutters between columns. The .row class is used to create a row element that contains one or more columns, and the [class^="col-"] rule is used to select all child elements of the row element that have a class name starting with col-. The .col- classes are used to specify the width of the columns.'
          },
          {
            title: "BEM methodology",
            content: "In this project, the BEM methodology is being used. BEM methodology is a way of structuring CSS code that remains simple and easy to understand. It provides a recognizable terminology and is less confusing than other methods. BEM can improve code maintainability, speed up the development process, and streamline the teamwork of developers by arranging CSS classes into independent modules. The methodology divides CSS classes into three entities: Block, Element, and Modifier"
          }
        ],
        expandId: "showMoreContent5",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-sass", alt: "Sass icon" },
            { src: "assets/img/sprite.svg#icon-npm", alt: "npm icon" },
            { src: "assets/img/sprite.svg#icon-webpack", alt: "webpack icon" }
        ],
        liveProjectLink: "https://sass-project.anniek.it/",
        sourceCodeLink: "https://github.com/Keinna/sass-css-mtb-project"
      },
        {
        categories: "javascript~sass~animations",
        imageLink: "https://previous-portfolio.anniek.it/",
        imageSrc: "/assets/img/mockup/mockup-previous-portfolio.png",
        imageAlt: "mockup previous portfolio",
        title: "Previous portfolio",
        highlights: ["Work/projects filter (JavaScript)", "Inner and outer shadow effects", "Shows loader/spinner animation", "BEM methodology"],
        paragraphs: [
          {
            title: "Work/projects filter (JavaScript)",
            content: "This filter allows users to choose which projects they want to see on the page. By default, all projects are displayed, but users can select specific filters to narrow down the projects based on their preferences or criteria. When a user clicks on a 'portfolio__filter-item', an event listener is triggered. If the clicked item does not already have the 'active' class, the existing active item is deactivated by removing the 'outer-shadow' and 'active' classes. Then, the clicked item is activated by adding the 'active' and 'outer-shadow' classes. The 'data-target' attribute of the clicked item is retrieved, which represents the category of projects to be displayed. The 'portfolioItems' array is iterated through, and if the target matches the 'data-category' attribute of an item or if the target is set to 'all', the item is shown by removing the 'hide' class and adding the 'show' class. Otherwise, the item is hidden by removing the 'show' class and adding the 'hide' class. This way, the filter dynamically updates the displayed projects based on the user's selection."
          },
          {
            title: "Inner and outer shadow effects",
            content: "The inclusion of inner and outer shadow effects adds depth and visual interest to the important elements on the page. These shadow effects give the impression of layers and create a more visually engaging experience for the users. Additionally, animations are applied to various elements, making the page feel dynamic and playful."
          },
          {
            title: "Shows loader/spinner animation",
            content: 'To enhance the user experience, a loader/spinner animation is displayed when larger images of the projects are being loaded. This animation serves as a visual indication to users that the content is being loaded and helps manage their expectations while ensuring a smooth browsing experience.'
          },
          {
            title: "BEM methodology",
            content: "In this project, the BEM methodology is being used. BEM methodology is a way of structuring CSS code that remains simple and easy to understand. It provides a recognizable terminology and is less confusing than other methods. BEM can improve code maintainability, speed up the development process, and streamline the teamwork of developers by arranging CSS classes into independent modules. The methodology divides CSS classes into three entities: Block, Element, and Modifier."
          }
        ],
        expandId: "showMoreContent6",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-javascript", alt: "javascript icon" },
            { src: "assets/img/sprite.svg#icon-sass", alt: "Sass icon" },
        ],
        liveProjectLink: "https://previous-portfolio.anniek.it/",
        sourceCodeLink: "https://github.com/Keinna/previous-portfolio"
      },
      {
        categories: "javascript~sass~bootstrap",
        imageLink: "https://theme-switcher.anniek.it/",
        imageSrc: "/assets/img/mockup/mockup-social-media-dashboard.png",
        imageAlt: "mockup social media dashboard",
        title: "Theme switcher",
        highlights: ["CSS variables", "JavaScript toggle", "Bootstrap", "Challenge by Frontend Mentor"],
        paragraphs: [
          {
            title: "CSS variables",
            content: "To implement the dark and light themes, CSS variables are used to define the color palette and other styles. CSS variables provide a flexible way to store and reuse values throughout the CSS code. By defining key properties such as background color, text color, and accent colors as variables, it becomes effortless to switch between different themes by simply updating the variable values.\n\nJavaScript plays a crucial role in enabling the dynamic switching between dark and light themes. When the user clicks on the theme switcher button, JavaScript detects the interaction and triggers the necessary actions. It accesses the CSS variables defined for the themes and dynamically updates their values to reflect the chosen theme."
          },
          {
            title: "JavaScript toggle",
            content: "The localStorage object is used to store and retrieve the user's preference for the light or dark theme. When the user selects a theme, the code sets the \"light-mode\" key in the localStorage object to \"set\" using the localStorage.setItem() function. When the page is loaded, the code checks if the \"light-mode\" key exists in the localStorage object using the localStorage.getItem() function. If the key exists, it means that the user has previously selected the light theme, and the code applies the appropriate styles using the toggleRootClass() function. The click event listener on the theme switcher button calls both toggleLocalStorageItem() and toggleRootClass() functions to update the localStorage object and apply the appropriate styles, respectively."
          },
          {
            title: "Bootstrap",
            content: 'Bootstrap is a popular front-end framework for building responsive, mobile-first web pages. It provides a set of pre-built CSS classes and JavaScript plugins that make it easy to create common UI components and layouts. In this code, Bootstrap is used to style the social media cards and overview cards, as well as to make the dashboard responsive on different screen sizes. The use of Bootstrap helps to save time and effort in designing and developing the dashboard, and ensures a consistent look and feel across different devices and browsers.'
          },
          {
            title: "Challenge by Frontend Mentor",
            content: "This was a challenge created by Frontend Mentor. I took on this challenge because I think by participating in such challenges, you gain valuable hands-on experience in implementing real-world designs and applying your knowledge of HTML, CSS, and JavaScript. It allows you to explore different techniques, experiment with various design patterns, and tackle common development tasks."
          }
        ],
        expandId: "showMoreContent7",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-javascript", alt: "javascript icon" },
            { src: "assets/img/sprite.svg#icon-bootstrap", alt: "bootstrap icon" },
        ],
        liveProjectLink: "https://theme-switcher.anniek.it/",
        sourceCodeLink: "https://github.com/Keinna/social-media-dashboard-with-theme-switcher"
      },
];


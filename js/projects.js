// projects.js

var projects = [
    {
        categories: "react",
        githubLink: "https://github.com/Keinna/search-images-api-react",
        imageSrc: "/assets/img/mockup-react-images-api.png",
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
        expandId: "showMoreContent5",
        icons: [
            { src: "assets/img/sprite.svg#icon-html5", alt: "HTML5 icon" },
            { src: "assets/img/sprite.svg#icon-css3", alt: "CSS3 icon" },
            { src: "assets/img/sprite.svg#icon-react", alt: "React icon" },
            { src: "assets/img/sprite.svg#icon-npm", alt: "NPM icon" },
            { src: "assets/img/sprite.svg#icon-visualstudiocode", alt: "Visual Studio Code icon" },
            { src: "assets/img/sprite.svg#icon-github", alt: "GitHub icon" }
        ]
    },
    {
        categories: "",
        githubLink: "",
        imageSrc: "",
        imageAlt: "",
        title: "",
        highlights: [
        "",
        "",
        "",
        ""
        ],
        paragraphs: [
        {
        title: "",
        content: ""
        },
        {
        title: "",
        content: ""
        },
        {
        title: "",
        content: ""
        },
        {
        title: "",
        content: ""
        }
        ],
        expandId: "",
        icons: [
        "",
        "",
        "",
        "",
        "",
        ""
        ]
        }
    // Add more project data objects here
];


//empty project
// {
//     categories: "",
//     githubLink: "",
//     imageSrc: "",
//     imageAlt: "",
//     title: "",
//     highlights: [
//     "",
//     "",
//     "",
//     ""
//     ],
//     paragraphs: [
//     {
//     title: "",
//     content: ""
//     },
//     {
//     title: "",
//     content: ""
//     },
//     {
//     title: "",
//     content: ""
//     },
//     {
//     title: "",
//     content: ""
//     }
//     ],
//     expandId: "",
//     icons: [
//     "",
//     "",
//     "",
//     "",
//     "",
//     ""
//     ]
//     }
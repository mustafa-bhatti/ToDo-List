# Lounge Cafe – Restaurant Page (Webpack Practice)

This project is a modular, single-page restaurant website built as a practice exercise for mastering Webpack and ES6 modules. It demonstrates how to bundle assets, dynamically load content, and structure a scalable application using only vanilla JavaScript, HTML, and CSS.

---

## Features

- **Webpack Bundling:**  
  All assets (JavaScript, CSS, images, HTML) are bundled and optimized using Webpack.
- **Single Page Application:**  
  Seamless navigation between Home, Menu, and Contact sections without page reloads.
- **Modular JavaScript:**  
  Each section (Home, Menu, Contact) is a separate ES6 module for maintainable code.
- **Dynamic Content:**  
  Content is generated and swapped in the DOM using JavaScript.
- **Responsive Design:**  
  Uses modern CSS Grid and Flexbox for a clean, adaptable layout.
- **Easy to Extend:**  
  Add new dishes or sections by editing or adding modules.

---

## Getting Started

1. Clone or download this repository.
2. Run `npm install` to install dependencies.
3. Start the development server:
    ```
    npx webpack serve
    ```
   or build for production:
    ```
    npx webpack
    ```
4. Open the app in your browser (usually at `http://localhost:8080`).

---

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, custom styles)
- JavaScript (ES6 Modules)
- Webpack 5

---

## Project Structure

```
Restaurant-Page/
│
├── src/
│   ├── index.js          # Main entry point
│   ├── initial-load.js   # Home section module
│   ├── menu.js           # Menu section module
│   ├── contact.js        # Contact section module
│   ├── styles.css        # Main stylesheet
│   ├── template.html     # HTML template for Webpack
│   └── images/           # Food and background images
├── dist/                 # Webpack build output (gitignored)
├── package.json
├── webpack.config.js
└── README.md
```

---

## How It Works

- **Navigation:**  
  Navigation buttons trigger JavaScript functions that clear and update the `#content` div with the selected section.
- **Menu:**  
  Menu items are created dynamically with images and prices using the `addDish` function in `menu.js`.
- **Contact:**  
  Displays a placeholder message ("Coming Soon!!")—easy to extend with real contact info or a form.
- **Webpack:**  
  Handles bundling of JS modules, CSS, images, and HTML for efficient development and deployment.

---

## Author

Ghulam Mustafa Bhatti

---

## License

This project is for educational and personal purposes use.
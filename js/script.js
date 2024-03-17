// const darkModeToggle = document.getElementById('dark-mode-toggle');
//         const body = document.body;

//         darkModeToggle.addEventListener('click', () => {
//             body.classList.toggle('dark-mode');
//             const isDarkMode = body.classList.contains('dark-mode');
//             localStorage.setItem('darkMode', isDarkMode);
//         });

//         // Check local storage for user preference
//         const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
//         if (isDarkMode) {
//             body.classList.add('dark-mode');
//         }

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
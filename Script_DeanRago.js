// Get the button element by its ID
const changeColorBtn = document.getElementById('changeColorBtn');

// Function to change the background color
function changeBackgroundColor() {
    // Get the body element
    const body = document.body;

    // Generate a random color (you can customize this array)
    const colors = ['#A2C523', '#88D498', '#B8E0D2', '#A0B19D', '#AEBF93'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply the new background color
    body.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
changeColorBtn.addEventListener('click', changeBackgroundColor);

// console.log('Hello');

// Create an array for the colors (based on Bootstrap color scheme)
let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

// Get the color buttons
let colorButtons = document.querySelectorAll('.col-2 > button')
console.log(colorButtons);
console.log(buttonColors);

// Loop through the buttons and apply button color to class name
for (let i = 0; i < colorButtons.length; i++){
    colorButtons[i].className = `btn btn-${buttonColors[i]}`
}

// Create a new header and add it under the buttons in the container, but before the form row

let newHeader = document.createElement('h4');
newHeader.id = 'myHeader';
newHeader.className = 'text-center mt-3'
newHeader.innerHTML = 'Created by Brian with the help of JavaScript';
console.log(newHeader);

// Add the header after the button row
// Get the row of buttons
let allRows = document.getElementsByClassName('row');
let buttonRow = allRows[0];
console.log(buttonRow);

// Add the new header AFTER the button row (vs appending as the last child of button row)

buttonRow.after(newHeader);

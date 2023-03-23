// Write your code here!
let deleteElement = document.getElementById('main');

deleteElement.remove();

// Creating a new Header element and assigning it an id of 'victory'
let newHeader = document.createElement('h1');
newHeader.id = "victory";

// Adding content into my header
let myName = "Bonface";
newHeader.textContent = `${myName} is the champion`;

//Appending content into my new header
newHeader.appendChild(newHeader);

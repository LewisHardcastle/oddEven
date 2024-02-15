// Increase counter button on click
// If number is odd, add to odd section
// If number is even, add to even section
// click on button to remove from section
// if number is divisible by 3, add to divisible by 3 section
// if number is divisible by 5, add to divisible by 5 section
// if number is divisible by 15, add to divisible by 15 section

// initiallization
const body = document.querySelector('body');
const counterContainer = document.createElement('div');
const counterBtn = document.createElement('button');
const counterHeader = document.createElement('p');
const resultContainer = document.createElement('div');
const gridTitle1 = document.createElement('p');
const gridTitle2 = document.createElement('p');
const gridTitle3 = document.createElement('p');
const gridTitle4 = document.createElement('p');
const gridTitle5 = document.createElement('p');
let rowNum;
let gridEl;
let newValue;
let counter = 0;
let rows = 1;
let oddRows = 1;
let evenRows = 1;
let divisibleBy3Rows = 1;
let divisibleBy5Rows = 1;
let divisibleBy15Rows = 1;

//Add classes
body.classList.add('body');
counterContainer.classList.add('counter-container');
counterHeader.classList.add('counter-header');
counterBtn.classList.add('counter-btn');
resultContainer.classList.add('result-container');
gridTitle1.classList.add('grid-title');
gridTitle2.classList.add('grid-title');
gridTitle3.classList.add('grid-title');
gridTitle4.classList.add('grid-title');
gridTitle5.classList.add('grid-title');

// Styling
body.style.backgroundColor = '#29292b';
counterHeader.innerText = 'Click the button below';
counterBtn.style.backgroundColor = '#FF9500';
counterBtn.innerHTML = `${counter}`;
gridTitle1.innerText = 'Odd';
gridTitle2.innerText = 'Even';
gridTitle3.innerText = 'Divisible by 3';
gridTitle4.innerText = 'Divisible by 5';
gridTitle5.innerText = 'Divisible by 15';

// Arrangement
body.appendChild(counterContainer);
counterContainer.appendChild(counterHeader);
counterContainer.appendChild(counterBtn);
counterContainer.appendChild(resultContainer);
resultContainer.appendChild(gridTitle1);
resultContainer.appendChild(gridTitle2);
resultContainer.appendChild(gridTitle3);
resultContainer.appendChild(gridTitle4);
resultContainer.appendChild(gridTitle5);

// Grid styling
resultContainer.style.display = 'grid';
resultContainer.style.gridTemplateColumns = 'repeat(5, 200px)';
resultContainer.style.gridTemplateRows = `repeat(${rows}, fit-content)`;

// Add event listeners
counterBtn.addEventListener('click', () => {
  counter++;
  counterBtn.innerHTML = `${counter}`;
  if (isOdd(counter)) {
    if (rows - 1 > oddRows) {
      addRow();
    }
    oddRows++;
    newValue = document.createElement('div');
    newValue.classList.add('new-value');
    newValue.innerText = `${counter}`;
    newValue.style.gridColumn = '1';
    newValue.style.gridRow = `${oddRows}`;
    resultContainer.appendChild(newValue);
  }
  if (isEven(counter)) {
    if (rows - 1 > oddRows) {
      addRow();
    }
    evenRows++;
    newValue = document.createElement('div');
    newValue.classList.add('new-value');
    newValue.innerText = `${counter}`;
    newValue.style.gridColumn = '2';
    newValue.style.gridRow = `${evenRows}`;
    resultContainer.appendChild(newValue);
  }
  if (divisibleBy3(counter)) {
    if (rows - 1 > oddRows) {
      addRow();
    }
    divisibleBy3Rows++;
    newValue = document.createElement('div');
    newValue.classList.add('new-value');
    newValue.innerText = `${counter}`;
    newValue.style.gridColumn = '3';
    newValue.style.gridRow = `${divisibleBy3Rows}`;
    resultContainer.appendChild(newValue);
  }
  if (divisibleBy5(counter)) {
    if (rows - 1 > oddRows) {
      addRow();
    }
    divisibleBy5Rows++;
    newValue = document.createElement('div');
    newValue.classList.add('new-value');
    newValue.innerText = `${counter}`;
    newValue.style.gridColumn = '4';
    newValue.style.gridRow = `${divisibleBy5Rows}`;
    resultContainer.appendChild(newValue);
  }
  if (divisibleBy15(counter)) {
    if (rows - 1 > oddRows) {
      addRow();
    }
    divisibleBy15Rows++;
    newValue = document.createElement('div');
    newValue.classList.add('new-value');
    newValue.innerText = `${counter}`;
    newValue.style.gridColumn = '5';
    newValue.style.gridRow = `${divisibleBy15Rows}`;
    resultContainer.appendChild(newValue);
  }
});

resultContainer.addEventListener('click', event => {
  gridEl = event.target;
  rowNum = gridEl.style.gridRow;
  if (gridEl.classList.contains('new-value')) {
    gridEl.remove();
  }
});

// Other functions
function isOdd(num) {
  return num % 2 !== 0;
}

function isEven(num) {
  return num % 2 === 0;
}

function divisibleBy3(num) {
  return num % 3 === 0;
}

function divisibleBy5(num) {
  return num % 5 === 0;
}

function divisibleBy15(num) {
  return num % 15 === 0;
}

function addRow() {
  rows++;
  resultContainer.style.display = 'grid';
  resultContainer.style.gridTemplateColumns = 'repeat(5, 200px)';
  resultContainer.style.gridTemplateRows = `repeat(${rows}, 200px)`;
}

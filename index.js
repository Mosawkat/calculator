let history = [];
let currentNum = '';
let operator = '';
let result = 0;

function initialize() {
  clearDisplay();
}

function clearDisplay() {
  currentNum = '';
  document.getElementById('allNums').innerHTML = '0';
}

function updateDisplay() {
  document.getElementById('allNums').innerHTML = currentNum;
}

function buttonPressed(ID) {
  switch (ID) {
    case 'AC':
      clearDisplay();
      break;
    case 'PM':
      // Implement code for changing the sign (+/-)
      break;
    case 'Percent':
      // Implement code for percentage (%)
      break;
    case 'Div':
      operator = '/';
      history.push(currentNum, operator);
      clearDisplay();
      break;
    case 'Multiply':
      operator = '*';
      history.push(currentNum, operator);
      clearDisplay();
      break;
    case 'Subtraction':
      operator = '-';
      history.push(currentNum, operator);
      clearDisplay();
      break;
    case 'Addition':
      operator = '+';
      history.push(currentNum, operator);
      clearDisplay();
      break;
    case 'Equal':
      if (operator && currentNum !== '') {
        history.push(currentNum);
        result = eval(history.join(' '));
        currentNum = result.toString();
        operator = '';
        history = [];
        updateDisplay();
      }
      break;
    default:
      if (ID >= '0' && ID <= '9') {
        if (currentNum === '0') {
          currentNum = ID;
        } else {
          currentNum += ID;
        }
        updateDisplay();
      }
      break;
  }
}

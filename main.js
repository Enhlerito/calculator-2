const digits = document.querySelectorAll('.digit')

for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', digitPressed)
}

const opps = document.querySelectorAll('.opp')

for (var i = 0; i < opps.length; i++) {
  opps[i].addEventListener('click', digitPressed)
}

document.querySelector('#CE').addEventListener('click', clearAll)
document.querySelector('#equal').addEventListener('click', calculate)
document.querySelector('#zero').addEventListener('click', zeroPressed)

let screenMain = document.querySelector('#box')
let screenCalc = document.querySelector('#box1')


let currentValue = '';
let calcValue = '';
let previousAnswer = '';

function digitPressed() {

  if (currentValue.length <= 15) {
    let val = this.innerHTML;
    if (currentValue == '') {
      currentValue = val;
    } else {
      currentValue += val;
    }
    showMain(currentValue);
  }
}

function oppPressed() {
  let val = this.innerHTML;
  if (!currentValue && previousAnswer) {
    currentValue = previousAnswer;
  }
  if (currentValue[currentValue.length - 1] == '.') {
    currentValue = currentValue.slice(0, -1)
  }
  if (currentValue) {
    calcValue += ' ' + ' ' + val;
    currentValue = '';
  } else {
    calcValue = calcValue.slice(0, -1) + val;
  }
  showCalc(calcValue)
}

function zeroPressed() {
  if (currentValue == '' || currentValue == '0') {
    currentValue = '0'
  } else if (!/\./.test(currentValue)) {
    currentValue += '.';
  }
  showMain(currentValue);
}

function clearEntry() {
  currentValue = '';
  showMain('0');
}

function clearAll() {
  currentValue = '';
  showMain('0');
  calcValue = '';
  showCalc('');
}

function calculate() {
  let answer = calcValue + currentValue;
  answer = answer.replace('x', '*').replace('÷', '/')
  answer = eval(answer);
  showMain(answer)
  calcValue += ' ' + currentValue + ' = ' + answer
  showCalc(calcValue)
  previousAnswer = answer + '';
  currentValue = '';
  calcValue = '';
}

function showMain(text) {
  screenMain.innerHTML = text;
}

function showCalc(text) {
  screenCalc.innerHTML = text;
}




/*
const buttons = document.querySelectorAll('.button')

for (let i = 0; i< buttons.legnth; i++) {
  buttons[i].addEventListener('click', buttonPressed)
}

const opps = document.querySelector('.opp')
operator.forEach(el => el.addEventListener('click', oppPressed))

const screen = document.querySelector('.screen')

const equals = document.querySelector('.equals')
f-/
const clrbutton = document.querySelector('.#c')
allClr.addEventListener('click',allClear)

let current = '0';
let previous =0;
let off = 0;



const buttons = document.querySelector('.calc-screen')
let current = 0;
let previous = 0;

function buttonPressed() {
  if (current.legnth < 35) {
    if current == '0') {
      current = this.inneHTML;
    }else {
      current += this.inneHTML;
    }display(current);
  }
}
function oppPressed() {
if(!operator){
  previous = current;
  operator = this.inneHTML;
  current = '';
}
  display(previous)

}else if(operator != this.inneHTML){
operator = this.innerHTML;
}
}

function clear() {
  console.log(current);
  current = current.slice(0, -1);
  current = previous.length == 0 ? '0': current
  display(current)
}

function allClear() {
  current = '0';
  previous = 0;
  operator = '';
  display(current)

}

function display(message) {
  screen.innerHTML = message;
}
/*

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');


function printTime() {
  // ... your code goes here
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  // ... your code goes here
  const mins = chronometer.computeTwoDigitNumber( chronometer.getMinutes() )
  minDecElement.innerText = mins[0]
  minUniElement.innerText = mins[1]
}

function printSeconds() {
  // ... your code goes here
  const secs = chronometer.computeTwoDigitNumber( chronometer.getSeconds() )
  secDecElement.innerText = secs[0]
  secUniElement.innerText = secs[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliSecs = chronometer.computeTwoDigitNumber( chronometer.getMilliSeconds() )
  milDecElement.innerText = milliSecs[0]
  milUniElement.innerText = milliSecs[1]
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li')
  li.innerText = chronometer.split()

  splitsElement.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn stop'
  btnLeftElement.innerText = 'STOP'

}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn split'
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn start'
  btnLeftElement.innerText = 'START'
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn reset'
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if( btnLeftElement.className.includes( 'btn stop' ) ){
    setStartBtn()
    setResetBtn()
    chronometer.stop()

  }else if ( btnLeftElement.className.includes( 'btn start' ) ){
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime)

  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if( btnRightElement.className.includes( 'btn reset' ) ){
    // setStopBtn()
    // setSplitBtn()
    chronometer.reset()
    printTime()
    clearSplits()
  }else if ( btnRightElement.className.includes( 'btn split' ) ){
    // setStartBtn()
    // setResetBtn()
    printSplit()
    // chronometer.stop()
  }
});

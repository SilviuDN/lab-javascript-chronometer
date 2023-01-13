class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    this.currentMillisecs = 0
    this.milliInterval = null
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      this.currentMillisecs += 5
      if( this.currentMillisecs % 100 == 0 ){
        this.currentMillisecs = 0
        this.currentTime += 1
      }
      if(callback){
        callback()
      }
      console.log(`Au trecut ${this.currentTime} secunde, adica ${this.split()}`)
    }, 50)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  getMilliSeconds() {
    // ... your code goes here
    return this.currentMillisecs
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value<10 ? '0'+value : ''+value
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

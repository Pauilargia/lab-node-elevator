class Elevator {
  constructor(){
    this.floor       = 0;
    this.MAXFLOOR    = 10;
    this.requests    = [];
    this.direction   = "up";
    this.waitingList = [];
    this.passengers  = [];
  }

  start() {
    this.elevatorInterval = setInterval(() => {
      this.update();
    }, 1000);
  }
  stop() {
    clearInterval(this.elevatorInterval);
  }
  update() {
    this.log();
    //let person = this.passengers;
    if(this.requests.length>0){
      if(this.requests[0] > this.floor){
        this.floorUp();
      } else if(this.requests[0] < this.floor){
        this.floorDown();
      } else if(this.requests[0] === this.floor){
        if(this.waitingList.length>0){
          this._passengersEnter(this.waitingList[0]);
        }else {
          this._passengersLeave(this.passengers[0]);
        }
      }
    } else {
      this.stop();
    }
  }

  _passengersEnter(person) {
    this.passengers.push(person);
    this.waitingList.shift();
    this.requests.shift();
    this.requests.push(person.destinationFloor);
    let message = `${person.name} has entered the elevator`;
    console.log(message);
  }
  _passengersLeave(person) {
    this.passengers.shift();
    this.requests.shift();
    let message = `${person.name} has left the elevator`;
    console.log(message);
  }

  floorUp() {
    if(this.floor < this.MAXFLOOR){
      this.floor++;
      this.direction = "up";
    }
  }
  floorDown() {
    if(this.floor > 0){
      this.floor--;
      this.direction = "down";
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    let currentState = `Direction: ${this.direction} | Floor ${this.floor}`;
    console.log(currentState);
  }
}

module.exports = Elevator;

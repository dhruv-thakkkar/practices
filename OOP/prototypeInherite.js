class Car {
    constructor(speed) {
        this.speed = speed;
    }
    accelarate() {
        this.speed = this.speed + 10;
        console.log(this.speed);
    }
    break() {
        this.speed = this.speed - 5;
        console.log(this.speed);
    }
}
let bmw = new Car(120)
let mercedes = new Car(95)
mercedes.break()
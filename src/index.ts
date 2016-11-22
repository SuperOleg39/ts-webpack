import module = require('./module');

abstract class Animal {
    static origin = {a: 1};
    constructor(protected name: string) {
        console.log(Animal.origin)
    }

    move(distanceInMeters: number = 0): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

    abstract moveWtf(): void
}

class Snake extends Animal {
    constructor(name: string, private _legs: number = 0) {
        super(name);
    }

    get legs(): number {
        return this._legs;
    }
    
    move(distanceInMeters: number = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }

    moveWtf() {
        console.log('wtf')
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    
    move(distanceInMeters: number = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }

    moveWtf() {
        console.log('wtf')
    }
}

let snake = new Snake('the Python');
let horse: Animal = new Horse('the Palomino');

snake.move();
horse.move(34);

console.log(snake.legs);

console.log(new module('Oleg', 'N.', 'Drapeza'));
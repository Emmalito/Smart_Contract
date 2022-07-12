/*
    Example of test with mocha library. To run it,
    tape `npm run test` on a terminal.
*/
const assert = require('assert');


class Car {
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}


// Tests
let car;

beforeEach(() =>{
    car = new Car();
});

describe('Car', ()=> {
    it('can park', () =>{
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () =>{
        assert.equal(car.drive(), 'vroom');
    });
});

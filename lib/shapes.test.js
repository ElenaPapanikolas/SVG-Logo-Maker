// Importing
const {Circle, Square, Triangle} = require('./shapes');

// Tests for all shapes
describe('Shapes', () => {
    // Test for Circle
    describe('Circle', () => {
        it('should render a circle with a red fill color', () => {
            const shape = new Circle('TXT', 'black', 'red');
            expect(shape.render()).toEqual('<circle cx="140" cy="99" r="99" fill ="red" />');
        })

    })
    // Test for Square
    describe('Square', () => {
        it('should render a square with a yellow fill color', () => {
        const shape = new Square('XCX', 'green', 'yellow');
            expect(shape.render()).toEqual('<rect x="40" y="10" width="200" height="200" fill="yellow" />');
        })

    })
    // Test for Triangle
    describe('Triangle', () => {
        it('should render a triangle with a blue fill color', () => {
            const shape = new Triangle('OOO', 'white', 'blue');
            expect(shape.render()).toEqual('<polygon points="150, 0 0, 250 250, 200" fill="blue" />');
        })

    })

})

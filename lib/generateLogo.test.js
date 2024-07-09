// Importing
const generateLogo = require('./generateLogo');
const {Circle, Square, Triangle} = require('./shapes');

// Tests for functions that get the correct shape and combine all SVG elements together
// Test for Circle
describe('generateLogo', () => {
    describe('generateLogo', () => {
        it('should return a complete svg file that references the user input', () => {
            const data = {
                shape: new Circle('RAB', 'black', 'purple')
            };
            const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`; 
            const shape = data.shape.render();  
            const textPosition = `<text x="145" y="125" text-anchor="middle" fill="black" font-size="64"> RAB </text>`; 
            const svg = `${svgString} ${shape} ${textPosition} </svg>`;
            expect(svg).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="140" cy="99" r="99" fill ="purple" /> <text x="145" y="125" text-anchor="middle" fill="black" font-size="64"> RAB </text> </svg>')

        })
    })
})

// Test for Square
describe('generateLogo', () => {
    describe('generateLogo', () => {
        it('should return a complete svg file that references the user input', () => {
            const data = {
                shape: new Square('TNT', 'red', 'black')
            };
            const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`; 
            const shape = data.shape.render();  
            const textPosition = `<text x="140" y="125" text-anchor="middle" fill="red" font-size="64"> TNT </text>`; 
            const svg = `${svgString} ${shape} ${textPosition} </svg>`;
            expect(svg).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="40" y="10" width="200" height="200" fill="black" /> <text x="140" y="125" text-anchor="middle" fill="red" font-size="64"> TNT </text> </svg>')

        })
    })
})

// Test for Triangle
describe('generateLogo', () => {
    describe('generateLogo', () => {
        it('should return a complete svg file that references the user input', () => {
            const data = {
                shape: new Triangle('EEP', 'yellow', 'purple')
            };
            const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`; 
            const shape = data.shape.render();  
            const textPosition = `<text x="145" y="155" text-anchor="middle" fill="yellow" font-size="64"> EEP </text>`; 
            const svg = `${svgString} ${shape} ${textPosition} </svg>`;
            expect(svg).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 0 0, 250 250, 200" fill="purple" /> <text x="145" y="155" text-anchor="middle" fill="yellow" font-size="64"> EEP </text> </svg>')

        })
    })
})
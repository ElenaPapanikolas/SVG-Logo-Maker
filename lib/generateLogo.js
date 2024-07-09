// Importing
const {Circle, Square, Triangle} = require('./shapes');

// Function to dynamically generate SVG logo based on the shape specified in the data object, along with
// the text, text color, and shape color provided
function generateLogo(data) {
    const svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    let textPosition;
    let shape;

    switch(data.shape) {
        case 'Circle':
            data.shape = new Circle(data.text, data.textColor, data.shapeColor);
            shape = (data.shape).render();
            textPosition = `<text x="145" y="125" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
        break;
        case 'Square':
            data.shape = new Square(data.text, data.textColor, data.shapeColor);
            shape = (data.shape).render();
            textPosition = `<text x="140" y="125" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
        break;
        case 'Triangle':
            data.shape = new Triangle(data.text, data.textColor, data.shapeColor);
            shape = (data.shape).render();
            textPosition = `<text x="145" y="155" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
        break;       

    }
    
    const svg = `${svgString} ${shape} ${textPosition} </svg>`
    
    return svg;
}

// Exporting generateLogo function
module.exports = generateLogo;
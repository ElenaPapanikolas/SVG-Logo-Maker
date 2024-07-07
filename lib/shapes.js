// Shapes class that contains the inherited properties
class Shapes {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

// Shape classes that inherit properties from Shapes but have their own render function
class Circle extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render() {
        return `<circle cx="140" cy="99" r="99" fill ="${this.color}" />`
    }
}

class Square extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render() {
        return `<rect x="40" y="10" width="200" height=200" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render() {
        return `<polygon points="150, 0 0, 250 250, 200" fill="${this.color}" />`
    }
}

// Exporting the three shapes
module.exports = {Circle, Square, Triangle};


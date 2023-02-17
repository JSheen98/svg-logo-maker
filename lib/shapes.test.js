const { Circle, Triangle, Rectangle} = require('./shapes.js')

describe('Render Circle', () => {
    it('Should pass if the paramaters match', () => {
        const circle = new Circle()
        circle.backgroundColor = 'blue'
        circle.svgText = 'abc'
        circle.textColor = 'white'

        expect(circle.render()).toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="150" stroke="black" fill="blue" stroke-width="2" class="shape"/>
        <text x="250" y="275" font-size="60" text-anchor="middle" fill="white" font-family="verdana">abc</text>
        </svg>`)
    })
})


describe('Render Triangle', () => {
    it('Should pass if the paramaters match', () => {
        const triangle = new Triangle()
        triangle.backgroundColor = 'red'
        triangle.svgText = '123'
        triangle.textColor = 'black'

        expect(triangle.render()).toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,50 100,300 400,300" fill="red" stroke="black" stroke-width="2"/>
        <text x="247.5" y="230" font-size="60" text-anchor="middle" fill="black" font-family="verdana">123</text>
        </svg>`)
    })
})


describe('Render Rectangle', () => {
    it('Should pass if the paramaters match', () => {
        const rectangle = new Rectangle()
        rectangle.backgroundColor = 'black'
        rectangle.svgText = 'SVG'
        rectangle.textColor = 'yellow'

        expect(rectangle.render()).toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="100" width="300" height="200" fill="black" stroke="black" stroke-width="2"/>
        <text x="250" y="225" font-size="60" text-anchor="middle" fill="yellow" font-family="verdana">SVG</text>
        </svg>`)
    })
}) 
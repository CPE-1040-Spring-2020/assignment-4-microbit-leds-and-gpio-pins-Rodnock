//This code satisfies the requirements of both 3.1 and 3.2.

//screensaver idea: Stoplight with bouncing sprite.
//Green = Go
//Yellow = Slow Down
//Red = Stop

led.enable(true)

//Variable declarations
let verticalPlace = Math.randomRange(0, 4);
let horizonalPlace = Math.randomRange(0, 4);
let spriteShow: boolean = false
let ledSprite = game.createSprite(horizonalPlace, verticalPlace)
let green = false
let yellow = false
let red = false

//Sprite creation
verticalPlace = Math.randomRange(0, 4);
horizonalPlace = Math.randomRange(0, 4);
ledSprite.turn(Direction.Right, 45)

//Sprite functionality based on LED Color
basic.forever(function () {
    if (green && !yellow && !red) {
        ledSprite.move(1)
        basic.pause(100)
        ledSprite.ifOnEdgeBounce();
    }
    if (!green && yellow && !red) {
        ledSprite.move(1)
        basic.pause(300)
        ledSprite.ifOnEdgeBounce();
    }
    if (!green && !yellow && red) {

    }

})

//"Traffic Light" effect.
//Pin 8 is Green Light
//Pin 12 is Yellow Light
//Pin 16 is Red Light
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    green = true
    yellow = false
    red = false
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    green = false
    yellow = true
    red = false
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    green = false
    yellow = false
    red = true
    basic.pause(5000)
})

let Light = 0
let Fan = 0
input.onGesture(Gesture.Shake, function () {
    Fan = Fan + 1
    if (Fan % 2 == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            # # # . #
            # . . . .
            # # . . .
            # . . . .
            # . . . .
            `)
    } else if (Fan % 2 < 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            # # # . .
            # . . . .
            # # . . .
            # . . . .
            # . . . .
            `)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    Light = Light + 1
    if (Light % 2 == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            # . . . #
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
    } else if (Light % 2 < 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
    }
})
radio.setGroup(2)
Light = 0
Fan = 0
basic.showString("Booted")
basic.showIcon(IconNames.Happy)
radio.setGroup(1)


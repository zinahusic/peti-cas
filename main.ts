input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("C ")
    if (input.temperature() >= 24) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})

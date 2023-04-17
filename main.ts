let número = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    número = randint(1, 20)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(número)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    número = randint(10, 29)
    music.playTone(932, music.beat(BeatFraction.Whole))
    basic.showNumber(número)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    número = randint(1, 6)
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showNumber(número)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    número = randint(24, 30)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showNumber(número)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    número = randint(1, 23)
    music.playTone(698, music.beat(BeatFraction.Whole))
    basic.showNumber(número)
})

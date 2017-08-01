// tests go here; this will not be compiled when this package is used as a library


basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

Bilres1_1.gameOverAnimation()
Bilres1_1.saveScore(23)
while (1) {
    Bilres1_1.moveTraffic()
    basic.pause(500)
}

// tests go here; this will not be compiled when this package is used as a library

basic.forever(() => {
    Bilres1_1.decode_line(4, Bilres1_1.code_line(3))
    Bilres1_1.decode_line(3, Bilres1_1.code_line(2))
    Bilres1_1.decode_line(2, Bilres1_1.code_line(1))
    Bilres1_1.decode_line(1, Bilres1_1.code_line(0))
    Bilres1_1.decode_line(0, Bilres1_1.random_traffic())
    basic.pause(500)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

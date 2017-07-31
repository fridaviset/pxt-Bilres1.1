

namespace Bilres1_1 {
    /**
     * This function should detect the formation of cars on a given line and convert it to a number
     */
    //%block
    export function code_line(line_number: number) {
        let multiplikator: number = 1
        let coded_line: number = 0
        let x: number = 0
        while (x < 5) {
            if (led.point(x, line_number)) {
                coded_line=coded_line+multiplikator
            }
            multiplikator = multiplikator * 2
            x++
        }
        return coded_line
    }

    /**
     * This function should convert a number to a formation of cars on a horizontal line
     */
    //%block
    export function decode_line(line_number: number, coded_line: number) {
        let x: number = 0
        let multiplikator: number = 1
        while (x < 5) {
            multiplikator = multiplikator * 2
            if (coded_line % multiplikator == 0) {
                led.unplot(x, line_number)
            }
            else {
                led.plot(x,line_number)
            }
            coded_line=coded_line-(coded_line%multiplikator)
            x++
        }
    }
}

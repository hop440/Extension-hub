enum Line {
    //% block="Top"
    Top,
    //% block="Bottom"
    Bottom
}

/**
 * Custom blocks
 */
//% weight=100 color=#bb6622 icon="\uf0e7"
namespace custom {
    /**
     * Calculates the space needed to center the text and prints it to the lcd
     */
    //% block
    export function Print(text: string, line: Line): void {

        let len = 0
        serial.setBaudRate(9600)
        serial.redirectToUSB()

        basic.showNumber(Math.trunc((16 - text.length) / 2))
        for (let index = 0; index < Math.trunc((16 - text.length) / 2); index++) {
            text = " " + text
            len += 1
        }
        if (line) {
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, text)
        } else {
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, text)
        }
        serial.writeLine(convertToText(line))
        serial.writeLine(text)
        serial.writeLine(convertToText(len))
        serial.writeLine(convertToText(Math.trunc((16 - text.length) / 2)))
    }
}

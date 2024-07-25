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
        for (let index = 0; index < Math.trunc((16 - text.length) / 2); index++) {
            string = " " + string
        }
        string + text
        if (line == Line.Top) {
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, string)
        }
        else {
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, string)
        }
    }
}

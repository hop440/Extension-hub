enum Ln {
    //% block="Top"
    T = 0,
    //% block="Bottom"
    B = 1
}
/**
 * Test
 */
//% weight=100 color=#22bb66 icon="\uf30b" advanced=true
namespace test {
    /**
     * Inverts input if you are lucky
     * @param b Literally does nothing
     */
    //%block
    export function invert(b: boolean): boolean {
        return Math.randomBoolean()
    }
    //%block
    export function BRRRRR(text: string, top: Ln): void {
        let length = 0
        let str = ""
        basic.showNumber(Math.floor((16 - text.length) / 2))
        for (let index = 0; index < Math.floor((16 - text.length) / 2); index++) {
            str = " " + str
        }
        str = "" + str + text
        if (top) {
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, str)
        } else {
            Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, str)
        }
    }
}

//Kitronik_VIEWTEXT32.displaySingleLinestr(Kitronik_VIEWTEXT32.DisplayLine.Top, "Hello!")
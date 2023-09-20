import createDuration from "../src/createDuration"
import format from "../src/format"

describe("format duration", () => {
    it("day duration", () => {
        const duration = createDuration(13345987)
        expect(format(duration, "")).toBe("")
        expect(format(duration, "SSSS")).toBe("13345987")
        expect(format(duration, "SSS")).toBe("987")
        expect(format(duration, "SS")).toBe("13345")
        expect(format(duration, "ss")).toBe("25")
        expect(format(duration, "MM")).toBe("222")
        expect(format(duration, "mm")).toBe("42")
        expect(format(duration, "HH")).toBe("3")
        expect(format(duration, "hh")).toBe("3")
        expect(format(duration, "dd")).toBe("0")
        expect(format(duration, "dddhhhmmmss\\s\\SSS")).toBe("0d3h42m25s987")
    })
    it("days duration", () => {
        const duration = createDuration(984224415)
        expect(format(duration, "")).toBe("")
        expect(format(duration, "SSSS")).toBe("984224415")
        expect(format(duration, "SSS")).toBe("415")
        expect(format(duration, "SS")).toBe("984224")
        expect(format(duration, "ss")).toBe("44")
        expect(format(duration, "MM")).toBe("16403")
        expect(format(duration, "mm")).toBe("23")
        expect(format(duration, "HH")).toBe("273")
        expect(format(duration, "hh")).toBe("9")
        expect(format(duration, "dd")).toBe("11")
        expect(format(duration, "ddd hhh mmm ss\\s SSS")).toBe("11d 9h 23m 44s 415")
        expect(format(duration, "HHh mmm ss:SSS")).toBe("273h 23m 44:415")
    })
})
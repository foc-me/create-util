import createDuration from "../src/createDuration"

describe("create duration", () => {
    it("day duration", () => {
        const duration = createDuration(13345987)
        expect(duration.SSSS).toBe("13345987")
        expect(duration.SSS).toBe("987")
        expect(duration.SS).toBe("13345")
        expect(duration.ss).toBe("25")
        expect(duration.MM).toBe("222")
        expect(duration.mm).toBe("42")
        expect(duration.HH).toBe("3")
        expect(duration.hh).toBe("3")
        expect(duration.dd).toBe("0")
    })
    it("days duration", () => {
        const duration = createDuration(984224415)
        expect(duration.SSSS).toBe("984224415")
        expect(duration.SSS).toBe("415")
        expect(duration.SS).toBe("984224")
        expect(duration.ss).toBe("44")
        expect(duration.MM).toBe("16403")
        expect(duration.mm).toBe("23")
        expect(duration.HH).toBe("273")
        expect(duration.hh).toBe("9")
        expect(duration.dd).toBe("11")
    })
})
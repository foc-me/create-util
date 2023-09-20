import joinFrom from "../src/from"

describe("join from", () => {
    it("join empty array", () => {
        const join = joinFrom([])
        expect(join()).toBe("")
        expect(join(" ")).toBe("")
        expect(join("-")).toBe("")
    })
    it("join array", () => {
        const array: any[] = [12, "abc", () => 147]
        const join = joinFrom(array)
        expect(join()).toBe("12abc147")
        expect(join(" ")).toBe("12 abc 147")
        expect(join("-")).toBe("12-abc-147")
        array.push(() => "next")
        expect(join()).toBe("12abc147next")
        expect(join(" ")).toBe("12 abc 147 next")
        expect(join("-")).toBe("12-abc-147-next")
    })
})
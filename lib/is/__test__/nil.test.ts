import nilEmpty from "../src/nilEmpty"

describe("nilEmpty", () => {
    it("target is undefined", () => {
        expect(nilEmpty(undefined)).toBe(true)
    })
    it("target is null", () => {
        expect(nilEmpty(null)).toBe(true)
    })
    it("target is empty string", () => {
        expect(nilEmpty("")).toBe(true)
    })
    it("target is boolean", () => {
        expect(nilEmpty(true)).toBe(false)
        expect(nilEmpty(false)).toBe(false)
    })
    it("target is number", () => {
        expect(nilEmpty(0)).toBe(false)
        expect(nilEmpty(-0)).toBe(false)
        expect(nilEmpty(0x36)).toBe(false)
    })
    it("target is string", () => {
        expect(nilEmpty(" ")).toBe(false)
        expect(nilEmpty("string")).toBe(false)
    })
    it("target is object", () => {
        expect(nilEmpty({})).toBe(false)
        expect(nilEmpty([])).toBe(false)
        expect(nilEmpty(function() {})).toBe(false)
        expect(nilEmpty(() => {})).toBe(false)
    })
})
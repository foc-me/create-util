import isTypeof from "../src/isTypeof"

describe("nilEmpty", () => {
    it("target is undefined", () => {
        expect(isTypeof(undefined)).toBe("Undefined")
    })
    it("target is null", () => {
        expect(isTypeof(null)).toBe("Null")
    })
    it("target is empty string", () => {
        expect(isTypeof("")).toBe("String")
    })
    it("target is boolean", () => {
        expect(isTypeof(true)).toBe("Boolean")
        expect(isTypeof(false)).toBe("Boolean")
    })
    it("target is number", () => {
        expect(isTypeof(0)).toBe("Number")
        expect(isTypeof(-0)).toBe("Number")
        expect(isTypeof(0x36)).toBe("Number")
    })
    it("target is string", () => {
        expect(isTypeof(" ")).toBe("String")
        expect(isTypeof("string")).toBe("String")
    })
    it("target is object", () => {
        expect(isTypeof({})).toBe("Object")
        expect(isTypeof([])).toBe("Array")
        expect(isTypeof(function() {})).toBe("Function")
        expect(isTypeof(() => {})).toBe("Function")
    })
})
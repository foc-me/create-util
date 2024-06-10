import isTypeof from "../src/isTypeof"

describe("nilEmpty", () => {
    it("target is undefined", () => {
        expect(isTypeof(undefined, "Undefined")).toBe(true)
    })
    it("target is null", () => {
        expect(isTypeof(null, "Null")).toBe(true)
    })
    it("target is empty string", () => {
        expect(isTypeof("", "String")).toBe(true)
    })
    it("target is boolean", () => {
        expect(isTypeof(true, "Boolean")).toBe(true)
        expect(isTypeof(false, "Boolean")).toBe(true)
    })
    it("target is number", () => {
        expect(isTypeof(0, "Number")).toBe(true)
        expect(isTypeof(-0, "Number")).toBe(true)
        expect(isTypeof(0x36, "Number")).toBe(true)
    })
    it("target is string", () => {
        expect(isTypeof(" ", "String")).toBe(true)
        expect(isTypeof("string", "String")).toBe(true)
    })
    it("target is object", () => {
        expect(isTypeof({}, "Object")).toBe(true)
        expect(isTypeof([], "Array")).toBe(true)
        expect(isTypeof(function() {}, "Function")).toBe(true)
        expect(isTypeof(() => {}, "Function")).toBe(true)
    })
})
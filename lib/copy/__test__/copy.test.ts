import copy from "../src/copy"

describe("nilEmpty", () => {
    it("target is undefined", () => {
        expect(copy(undefined)).toBe(undefined)
    })
    it("target is null", () => {
        expect(copy(null)).toBe(null)
    })
    it("target is value", () => {
        expect(copy("string")).toBe("string")
        expect(copy(1)).toBe(1)
        expect(copy(0)).toBe(0)
        expect(copy(0x36)).toBe(0x36)
        expect(copy(true)).toBe(true)
        expect(copy(false)).toBe(false)
    })
    it("target is array", () => {
        const origin = [1, 2, 3, 4, 5]
        const target = copy(origin)
        expect(Array.isArray(target)).toBe(true)
        expect(origin !== target).toBe(true)
        expect(origin.length === target.length).toBe(true)
        for (let i = 0; i < origin.length; i++) {
            expect(origin[i] === target[i]).toBe(true)
        }
    })
    it("target is object", () => {
        const origin = { a: "a", b: { b: "b", c: "c" }, c: [1, 2, 3], d: [1, { a: "a" }] } as Record<string, any>
        const target = copy(origin)
        expect(origin !== target).toBe(true)
        const originKeys = Object.keys(origin)
        const targetKeys = Object.keys(target)
        expect(originKeys.length === targetKeys.length).toBe(true)
        for (let i = 0; i < originKeys.length; i++) {
            expect(originKeys[i] === targetKeys[i]).toBe(true)
            expect(origin[originKeys[i]] === target[targetKeys[i]]).toBe(true)
        }
    })
})
import fill from "../src/fill"

describe("fill no target", () => {
    it("fill none", () => {
        expect(fill()).toBe("")
    })
    it("all space string", () => {
        expect(fill({ length: 10 })).toBe("          ")
    })
    it("all fill items", () => {
        expect(fill({ length: 10, item: "/" })).toBe("//////////")
    })
    it("fill ordered string", () => {
        expect(fill({ length: 10, item: "abc" })).toBe("abcabcabca")
    })
})

describe("fill target", () => {
    it("target length larger than fill length", () => {
        expect(fill({ target: "114514", length: 4, item: "0" })).toBe("114514")
    })
    it("target length smaller than fill length", () => {
        expect(fill({ target: "4514", length: 4, item: "0" })).toBe("4514")
        expect(fill({ target: "514", length: 4, item: "0" })).toBe("5140")
        expect(fill({ target: "14", length: 4, item: "0" })).toBe("1400")
        expect(fill({ target: "4", length: 4, item: "0" })).toBe("4000")
        expect(fill({ target: "14", length: 4, item: "123" })).toBe("1412")
    })
    it("fill in the start", () => {
        expect(fill({ target: "4514", length: 4, item: "0", position: "start" })).toBe("4514")
        expect(fill({ target: "514", length: 4, item: "0", position: "start" })).toBe("0514")
        expect(fill({ target: "14", length: 4, item: "0", position: "start" })).toBe("0014")
        expect(fill({ target: "4", length: 4, item: "0", position: "start" })).toBe("0004")
        expect(fill({ target: "14", length: 4, item: "123", position: "start" })).toBe("1214")
    })
    it("fill around", () => {
        expect(fill({ target: "4514", length: 7, item: "0", position: "around" })).toBe("0451400")
        expect(fill({ target: "514", length: 7, item: "0", position: "around" })).toBe("0051400")
        expect(fill({ target: "14", length: 7, item: "0", position: "around" })).toBe("0014000")
        expect(fill({ target: "4", length: 7, item: "0", position: "around" })).toBe("0004000")
        expect(fill({ target: "14", length: 7, item: "123", position: "around" })).toBe("1214123")
    })
})
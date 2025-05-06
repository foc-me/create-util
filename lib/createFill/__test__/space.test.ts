import space from "../src/space"

describe("space", () => {
    it("empty space", () => {
        expect(space(" ", 10)).toBe("          ")
    })
    it("fill items", () => {
        expect(space("/", 10)).toBe("//////////")
    })
    it("fill ordered string", () => {
        expect(space("abc", 10)).toBe("abcabcabca")
    })
})
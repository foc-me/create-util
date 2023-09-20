import createJoin from "../src/createJoin"

describe("join", () => {
    it("default", () => {
        const join = createJoin()
        expect(join(1, 1, 4, 5, 1, 4)).toBe("114514")
    })
    it("join space", () => {
        const join = createJoin(" ")
        expect(join()).toBe("")
        expect(join("", "")).toBe(" ")
        expect(join("$", 125.4)).toBe("$ 125.4")
        expect(join(() => "cost", "$", 125.4)).toBe("cost $ 125.4")
    })
})
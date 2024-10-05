import pick from "../src/pick"

type TestA = {
    a: string,
    b: string,
    c: number,
    d: () => unknown
}
const a: TestA = { a: "aa", b: "bb", c: 123, d: () => "dd" }

describe("pick", () => {
    it("pick", () => {
        const result = pick<TestA, "b" | "c">(a, ["b", "c"])
        expect(result).toEqual({ b: "bb", c: 123 })
    })
    it("pick function", () => {
        const result = pick<TestA, "c" | "d">(a, ["c", "d"])
        expect(result.c).toEqual(123)
        expect(typeof result.d).toEqual("function")
        expect(result.d()).toEqual("dd")
    })
})
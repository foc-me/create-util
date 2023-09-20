import map from "../src/map"

describe("map array", () => {
    it("map undefined", () => {
        const array = [undefined, null, 0, ""]
        expect(map(array)).toEqual(["undefined", "null", "0", ""])
    })
    it("map function", () => {
        const array = [123, "jsx", () => 147]
        expect(map(array)).toEqual(["123", "jsx", "147"])
    })
})
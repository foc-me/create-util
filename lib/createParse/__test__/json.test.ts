import json from "../src/json"

describe("parse json", () => {
    it("parse no json", () => {
        expect(json(undefined)).toEqual(undefined)
        expect(json(null)).toEqual(null)
        expect(json(1234)).toEqual(1234)
    })
    it("parse json string", () => {
        expect(json("")).toEqual(undefined)
        expect(json("1234")).toEqual(1234)
        expect(json("{ \"abc\": 1234 }")).toEqual({ abc: 1234 })
        expect(json("[123, \"undefined\", null]")).toEqual([123, "undefined", null])
    })
    it("undefined is not a valid json type", () => {
        expect(json("undefined")).toEqual(undefined)
        expect(json("{ \"abc\": undefined }")).toEqual(undefined)
    })
})
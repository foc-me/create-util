import createCurrent from "../src/createCurrent"

describe("create current", () => {
    it("current", () => {
        const target = { name: "createCurrent", count: 1 }
        const current = createCurrent(target)
        expect(current.current).toBe(target)
        expect(current.current?.name).toBe(target.name)
        expect(current.current?.count).toBe(target.count)
        for (let i = 0; i < 10; i++) target.count++
        expect(current.current).toBe(target)
        expect(current.current?.name).toBe(target.name)
        expect(current.current?.count).toBe(target.count)
    })
    it("absolute", () => {
        const target = { name: "createAbsolute", count: 2 }
        const current = createCurrent.absolute(target)
        expect(current.current).toBe(target)
        expect(current.current?.name).toBe(target.name)
        expect(current.current?.count).toBe(target.count)
        for (let i = 0; i < 10; i++) target.count++
        expect(current.current).toBe(target)
        expect(current.current?.name).toBe(target.name)
        expect(current.current?.count).toBe(target.count)
    })
    it("freeze", () => {
        const target = { name: "createFreeze", count: 2 }
        const current = createCurrent.freeze(target)
        expect(current.current).toBe(target)
        expect(current.current?.name).toBe(target.name)
        expect(current.current?.count).toBe(target.count)
        for (let i = 0; i < 10; i++) target.count++
        expect(current.current).toBe(target)
        expect(current.current?.name).toBe(target.name)
        expect(current.current?.count).toBe(target.count)
    })
})
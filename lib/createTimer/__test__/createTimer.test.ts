import createTimer from "../src/createTimer"

let timer: ReturnType<typeof createTimer>

beforeEach(async () => {
    timer = createTimer()
    await new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                timer.check()
                if (i === 9) resolve(true)
            }, 10 * (i + 1))
        }
    })
})

describe("create timer", () => {
    it("records", () => {
        expect(timer.records().length).toBe(10)
        const sum = timer.records().reduce((prev, current) => {
            return prev + current
        })
        expect(Math.abs(sum - 10 * 10)).toBeLessThan(5)
    })
    it("record", () => {
        const recurds = timer.records()
        expect(recurds.length).toBe(10)
        for (let i = 0; i < recurds.length; i++) {
            expect(timer.record(i)).toBe(recurds[i])
        }
        expect(timer.record()).toBe(recurds[recurds.length - 1])
        expect(timer.record(-1)).toBe(recurds[recurds.length - 1])
        expect(timer.record(11)).toBe(0)
    })
})
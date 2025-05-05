import createLimit from "../src/createLimit"

describe("limit", () => {
    it("create limit", async () => {
        await new Promise(resolve => {
            const now = Date.now()
            const limit = createLimit(1)
            const promises: Promise<number>[] = []
            for (let i = 0; i < 10; i++) {
                limit.append(() => {
                    const promise = new Promise<number>((resolve) => {
                        resolve(i)
                    })
                    promises.push(promise)
                    return promise
                })
            }
            limit.on("finish", () => {
                expect(Date.now() - now).toBeGreaterThan(1000)
                Promise.all(promises).then(res => {
                    expect(typeof res).toBe("object")
                    expect(Array.isArray(res)).toBe(true)
                    for (let i = 0; i < 10; i++) {
                        expect(res[i]).toBe(i)
                    }
                    resolve(undefined)
                })
            })
            limit.run()
        })
    })
})
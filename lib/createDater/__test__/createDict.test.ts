import { translate, setDict } from "../src/createDict"

const defaultDict = {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    mont: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    wee: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
}

const cnDict = {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    mont: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    week: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    wee: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
}

describe("test dater translate", () => {
    it("default dict", () => {
        for (const [key, values] of Object.entries(defaultDict)) {
            for (let i = 0; i < values.length; i++) {
                expect(translate(i, key)).toBe(values[i])
            }
        }
        expect(translate(178, "month")).toBe("178")
        expect(translate(2, "any")).toBe("2")
    })
    it("set dict", () => {
        setDict(cnDict)
        for (const [key, values] of Object.entries(cnDict)) {
            for (let i = 0; i < values.length; i++) {
                expect(translate(i, key)).toBe(values[i])
            }
        }
        expect(translate(178, "month")).toBe("178")
        expect(translate(2, "any")).toBe("2")
    })
})
import createFill from "lib/createFill/src/createFill"
import { translate } from "./createDict"

export const keys = /(YYYY|YY|MMMM|MMM|MM|M|DD|D|ddd|dd|d|HH|H|hh|h|mm|m|SSS|ss|s|A|a|ZZ|Z)/
const fill = {
    two: createFill({ length: 2, fill: "0", position: "start" }),
    three: createFill({ length: 3, fill: "0", position: "start" })
}

function provider(date: Date) {
    const fullYear = date.getFullYear().toString()
    const year = fullYear.slice(-2)
    const month = date.getMonth()
    const monthIndex = (month + 1).toString()
    const fullMonth = translate(month, "month")
    const fullMont = translate(month, "mont")
    const fullMonthIndex = fill.two(monthIndex)
    const day = date.getDate().toString()
    const fullDay = fill.two(day)
    const weekDay = date.getDay()
    const fullWeek = translate(weekDay, "week")
    const fullWee = translate(weekDay, "wee")
    const hour = date.getHours()
    const fullHour = fill.two(hour.toString())
    const pmHour = (hour % 12).toString()
    const fullPmHour = fill.two(pmHour)
    const minute = date.getMinutes().toString()
    const fullMinute = fill.two(minute)
    const second = date.getSeconds().toString()
    const fullSecond = fill.two(second)
    const millisecond = fill.three(date.getMilliseconds().toString())
    const apm = hour > 12 ? "pm" : "am"
    const APM = hour > 12 ? "PM" : "AM"
    const utcHour = fill.two((date.getHours() - date.getUTCHours()).toString())
    const utcMinute = fill.two((date.getMinutes() - date.getUTCMinutes()).toString())
    const utc = `+${utcHour}${utcMinute}`
    const UTC = `+${utcHour}:${utcMinute}`

    return {
        YYYY: fullYear,
        YY: year,
        MMMM: fullMonth,
        MMM: fullMont,
        MM: fullMonthIndex,
        M: monthIndex,
        DD: fullDay,
        D: day,
        ddd: fullWeek,
        dd: fullWee,
        d: weekDay.toString(),
        HH: fullHour,
        H: hour.toString(),
        hh: fullPmHour,
        h: pmHour,
        mm: fullMinute,
        m: minute,
        SSS: millisecond,
        ss: fullSecond,
        s: second,
        A: APM,
        a: apm,
        ZZ: utc,
        Z: UTC
    }
}

export default provider
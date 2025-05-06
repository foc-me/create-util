import createFill from "lib/createFill/src/createFill"

export const keys = /(SSSS|SSS|SS|ss|MM|mm|HH|hh|dd)/
const fill = createFill({ length: 3, fill: "0", position: "start" })

function createDuration(duration: number) {
    const millisecond = fill((duration % 1000).toString())
    const fullSecond = Math.floor(duration / 1000)
    const second = fullSecond % 60
    const fullminute = Math.floor(fullSecond / 60)
    const minute = fullminute % 60
    const fullhour = Math.floor(fullminute / 60)
    const hour = fullhour % 24
    const day = Math.floor(fullhour / 24)

    return {
        SSSS: duration.toString(),
        SSS: millisecond.toString(),
        SS: fullSecond.toString(),
        ss: second.toString(),
        MM: fullminute.toString(),
        mm: minute.toString(),
        HH: fullhour.toString(),
        hh: hour.toString(),
        dd: day.toString()
    }
}

export default createDuration
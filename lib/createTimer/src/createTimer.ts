import createDuration from "./createDuration"
import format from "./format"

function createTimer() {
    const interval = [Date.now()]

    const check = () => {
        const now = Date.now()
        const prev = interval.length - 1
        const duration = now - interval[prev]
        interval.push(Date.now())
        return duration
    }

    const record = (index?: number) => {
        const length = interval.length
        if (length < 2) return 0

        if (index === undefined) index = interval.length - 2
        if (index < 0) index = interval.length - 1 + index
        if (interval.length < index + 2) return 0

        return interval[index + 1] - interval[index]
    }

    const records = () => {
        const result: number[] = []
        interval.reduce((prev, current) => {
            result.push(current - prev)
            return current
        })
        return result
    }

    const timerFormat = (template: string, index?: number) => {
        const duration = createDuration(record(index))
        return format(duration, template)
    }

    return { check, record, records, format: timerFormat }
}

createTimer.format = format

export default createTimer
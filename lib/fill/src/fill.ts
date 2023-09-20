type FillOption = {
    target: string
    length: number
    item: string
    position: "start" | "end" | "around"
}

function fill(option?: Partial<FillOption>): string {
    const {
        target = "",
        length = 0,
        item = " ",
        position
    } = option || {}
    if (target.length >= length) return target

    if (target.length === 0) {
        const fillLength = Math.floor(length / item.length)
        const remainder = length % item.length
        const array = new Array(fillLength).fill(item)
        if (remainder) array.push(item.slice(0, remainder))
        return array.join("")
    }

    const fillLength = length - target.length
    if (position === "around") {
        const prefix = Math.floor(fillLength / 2)
        const surfix = fillLength - prefix
        const fillStart = fill({ length: prefix, item })
        const fillEnd = fill({ length: surfix, item })
        return `${fillStart}${target}${fillEnd}`
    }

    const fillItem = fill({ length: fillLength, item })
    return position === "start" ? `${fillItem}${target}` : `${target}${fillItem}`
}

export default fill
import space from "./space"

type FillOption = {
    length: number
    fill: string
    position: "start" | "end" | "around"
}

function createFill(option?: Partial<FillOption>): (target?: string) => string {
    const { length = 0, fill = " ", position = "end" } = option || {}
    return (target = "") => {
        if (target.length >= length) return target
        const fillLength = length - target.length

        if (position === "around") {
            const prefix = Math.floor(fillLength / 2)
            const surfix = fillLength - prefix
            const startFill = space(fill, prefix)
            const endFill = space(fill, surfix)
            return `${startFill}${target}${endFill}`
        }

        const targetFillItem = space(fill, fillLength)
        return position === "start" ? `${targetFillItem}${target}` : `${target}${targetFillItem}`
    }
}

createFill.space = space

export default createFill
import { setDict } from "./createDict"
import provider from "./daterProvider"
import format from "./format"

function createDater(date: Date) {
    const dater = provider(date)

    const daterFormat = (template: string) => {
        return format(dater, template)
    }

    return {
        current: dater,
        format: daterFormat
    }
}

createDater.dict = setDict
createDater.format = format

export default createDater
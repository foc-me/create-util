import { keys } from "./daterProvider"

function format(dater: Record<string, string>, template: string) {
    const parts = template.split(keys)
    return parts.map(key => {
        return dater[key] || key
    }).join("").replace(/\\/g, "")
}

export default format
import { keys } from "./createDuration"

function format(duration: Record<string, string>, template: string) {
    const parts = template.split(keys)
    return parts.map(key => {
        return duration[key] || key
    }).join("").replace(/\\/g, "")
}

export default format
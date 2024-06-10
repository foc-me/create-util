import json from "./json"

function copy<T>(target: T): T {
    if (typeof target !== "object" || target === null) return target
    if (Array.isArray(target)) return [...target] as T
    if (target.valueOf && target.constructor && target.constructor !== Object) {
        const constructor = target.constructor as { new(...args: any[]): T }
        return new constructor(target.valueOf())
    }
    return { ...target }
}

copy.json = json

export default copy
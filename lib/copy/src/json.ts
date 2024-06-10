function json<T>(target: T): T {
    if (typeof target !== "object" || target === null) return target
    if (Array.isArray(target)) {
        return target.map(item => json(item)) as T
    }
    const entries = Object.entries(target)
    return Object.assign({}, ...entries.map(([key, value]) => {
        return { [key]: json(value) }
    })) as T
}

export default json
function pick<T, K extends (keyof T)>(target: T, attrs: K[]): Pick<T, K> {
    const entries = attrs.map(key => {
        return [key, target[key]]
    })
    return Object.fromEntries(entries)
}

export default pick
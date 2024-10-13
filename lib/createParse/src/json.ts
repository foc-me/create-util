function json<T>(target: any): T | undefined {
    try {
        return JSON.parse(target)
    } catch (error) {
        console.error(error)
        return undefined
    }
}

export default json
function isTypeof(target: any, type: string): boolean {
    const targetType = Object.prototype.toString.call(target)
    return targetType === `[object ${type}]`
}

export default isTypeof
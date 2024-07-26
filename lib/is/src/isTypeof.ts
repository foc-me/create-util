function isTypeof(target: any): string {
    const targetType = Object.prototype.toString.call(target)
    const match = targetType.match(/^\[object (.*)\]$/)
    return match ? match[1] : "unkown"
}

export default isTypeof
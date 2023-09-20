function nil(target: any): target is undefined | null {
    return target === undefined || target === null
}

export default nil
function space(item: any, length: number) {
    item = item ? item.toString() : ""
    const items = item.length > 0 ? item.split("") : [""]
    return new Array(length).fill("").map((item, index) => {
        return items[index % items.length]
    }).join("")
}

export default space
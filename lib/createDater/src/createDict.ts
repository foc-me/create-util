import createCurrent from "lib/createCurrent/src/createCurrent"

type DaterDict = {
    month: string[]
    mont: string[]
    week: string[]
    wee: string[]
}

const daterDict = createCurrent.absolute({
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    mont: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    wee: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
})

function keyofDaterDict(target: string): target is keyof DaterDict {
    return true
}

const translate = (index: number, key: string) => {
    if (keyofDaterDict(key)) {
        const target = daterDict.current[key] || []
        if (target.length > index) return target[index]
    }
    return index.toString()
}

const setDict = (next: DaterDict) => {
    daterDict.current = next
}

export { translate, setDict }
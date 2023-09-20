import map from "./map"
import joinFrom from "./from"

function createJoin(separator = "") {
    return (...args: any[]) => {
        return Array.prototype.join.call(map(args), separator)
    }
}

createJoin.from = joinFrom

export default createJoin
import map from "./map"

function from(args: any[]) {
    return (separator = "") => {
        return Array.prototype.join.call(map(args), separator)
    }
}

export default from
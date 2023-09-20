import nil from "./nil"

function nilEmpty(target: any): target is undefined | null | "" {
    return nil(target) || target === ""
}

export default nilEmpty
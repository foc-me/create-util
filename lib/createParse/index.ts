import json from "./src/json"
import pick from "./src/pick"

function createParse() {
    return { json, pick }
}

export default createParse
function map(args: any[]) {
    return args.map<string>(item => {
        if (typeof item === "function") {
            return `${item()}`
        }
        return `${item}`
    })
}

export default map
import createCurrent from "lib/createCurrent/src/createCurrent"

type LimitFunction = () => unknown

interface Limit {
    append(callback: LimitFunction | LimitFunction[], ...callbacks: LimitFunction[]): number
    remove(callback: LimitFunction): void
    run(): void
    on(event: string, callback: () => void): void
    off(event: string, callback: () => void): void
}

function createLimit(limit = 1): Limit {
    const list: LimitFunction[] = []
    const tasks: Promise<unknown>[] = []
    const listeners = new Map<string, (() => void)[]>()

    const drop = (target: Promise<unknown>) => {
        const index = tasks.indexOf(target)
        if (index > -1) {
            tasks.splice(index, 1)
        }
    }
    const on = (event: string, callback: () => void) => {
        const item = listeners.get(event)
        if (item) item.push(callback)
        else listeners.set(event, [callback])
    }
    const off = (event: string, callback: () => void) => {
        const item = listeners.get(event)
        if (item) {
            const index = item.indexOf(callback)
            if (index > -1) item.splice(index, 1)
        }
    }
    const trigger = (event: string) => {
        setTimeout(() => {
            const item = listeners.get(event)
            if (item) item.forEach(callback => { callback() })
        })
    }

    const append = (callback: LimitFunction | LimitFunction[], ...callbacks: LimitFunction[]) => {
        if (callback) {
            callback = Array.isArray(callback) ? callback : [callback]
            list.push(...callback, ...callbacks)
        }
        return list.length
    }
    const remove = (callback: LimitFunction) => {
        const index = list.indexOf(callback)
        if (index > -1) {
            list.splice(index, 1)
        }
    }
    const running = createCurrent<boolean>(false)
    const run = (delay = 100) => {
        if (running.current === true) return
        if (list.length < 1) {
            if (tasks.length < 1) trigger("finish")
            return
        }
        if (tasks.length < limit) {
            running.current = true
            setTimeout(() => {
                running.current = false
                const current = list.shift()
                const result = current ? current() : undefined
                if (result instanceof Promise) {
                    tasks.push(result)
                    result.finally(() => {
                        drop(result)
                        run(delay)
                    })
                }
                run(delay)
            }, delay)
        }
    }

    return { append, remove, run, on, off } as Limit
}

export default createLimit
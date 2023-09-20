type Current<T> = { current: T }
type NullableCurrent<T> = { current: T | undefined }
type FreezeCurrent<T> = { readonly current: T }

function createCurrent<T>(init?: T): NullableCurrent<T> {
    return { current: init }
}

function absolute<T>(init: T): Current<T> {
    return createCurrent(init) as Current<T>
}

function freeze<T>(init: T): FreezeCurrent<T> {
    return createCurrent(init) as FreezeCurrent<T>
}

createCurrent.absolute = absolute
createCurrent.freeze = freeze

export default createCurrent
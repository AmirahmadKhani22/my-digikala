const store = {
    keys: [],
    index: 0,
}

const {random , pow , round} = Math

export function generateRandomKey(order=3) {
    return round(random() * pow(10 , order))
}

export default function uniqueKey(order=3) {
    function core() {
        const key = generateRandomKey(order)
        for(let item of store.keys) {
            if(item === key) {
                core()
            }
        }
        return key
    }
    const checkedKey = store.keys[store.index] = core()
    ++store.index
    return checkedKey
}

// Get
export const get = () => {
    const history = localStorage.getItem('history')
    const newStorage = []

    if(!history) {
        localStorage.setItem('history', JSON.stringify(newStorage))

        return newStorage
    }
    else {
        return JSON.parse(history)
    }
}

// Add
export const add = (newHistory) => {
    const history = get()
    
    history.push(newHistory)

    localStorage.setItem('history', JSON.stringify(history))
}

// Reset
export const reset = () => {
    localStorage.removeItem('history')

    const newStorage = []
    localStorage.setItem('history', JSON.stringify(newStorage))
}
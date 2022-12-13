import banks from '../assets/banks.json'

export const list = banks.list

// Get Bank Filter
export const getFilter = (keyword) => {
    if(!keyword || keyword === '') return null

    const filter = list.filter((bank) => {
        let txtValue = bank.shortName

        return txtValue.toLowerCase().includes(keyword.toLowerCase())
    })

    if(filter.length > 0) {
        return filter
    }
    else {
        return null
    }
}

// Get Time
export const getTime = () => {
    const now = new Date()

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0')
    }

    const gFull = `${padTo2Digits(now.getDate())} tháng ${padTo2Digits(now.getMonth() + 1)}, ${now.getFullYear()}`

    const gDate = [
        padTo2Digits(now.getDate()),
        padTo2Digits(now.getMonth() + 1),
        now.getFullYear(),
    ].join('/')

    const gTime = [
        padTo2Digits(now.getHours()),
        padTo2Digits(now.getMinutes())
    ].join(':')

    return {
        d: gDate,
        t: gTime,
        f: gFull
    }
}

// Get Code
export const getCode = () => {
    const code = Math.floor(Math.random() * 1000 * 1000 * 1000 * 10)

    return code
}
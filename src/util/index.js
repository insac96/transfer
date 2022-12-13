// LocaleString to Number
export const localeStringToNumber = (string) => {
    if(!string) return null
    return Number(string.replace(/[.]/g, ''))
}

// Number to LocaleString
export const numberToLocaleString = (number) => {
    if(!number) return null
    return Number(number).toLocaleString('vi-VN')
}

// Money to Text
export class numberToText {
    text = ''

    endText = ''

    number = 0

    base = [
        "không",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
    ]

    base_ten = [
        "mười",
        "hai mươi",
        "ba mươi",
        "bốn mươi",
        "năm mươi",
        "sáu mươi",
        "bảy mươi",
        "tám mươi",
        "chín mươi",
    ]
      
    base_hundred = [
        "không trăm",
        "một trăm",
        "hai trăm",
        "ba trăm",
        "bốn trăm",
        "năm trăm",
        "sáu trăm",
        "bảy trăm",
        "tám trăm",
        "chín trăm",
    ]

    constructor (number, endText) {
        this.number = number ? number : 0
        this.endText = endText ? endText : ''

        this.getText()

        return {
            text: this.text,
            money: this.number.toLocaleString('vi-VN'),
            number: number
        }
    }

    getTen (number) {
        const numberCheck = Number(number ? number : this.number)
        const array = `${numberCheck}`.split('')
        const first = parseInt(array[0])
        const second = parseInt(array[1])

        if (second === 0) {
            return this.base_ten[first - 1];
        }
        if (second === 1) {
            if (first === 1) {
                return `${this.base_ten[first - 1]} một`
            }
            return `${this.base_ten[first - 1]} mốt`
        }

        return `${this.base_ten[first - 1]} ${this.base[second]}`
    }

    getHundred (number) {
        const numberCheck = Number(number ? number : this.number)
        const array = `${numberCheck}`.split('')
        const first = parseInt(array[0])
        const second = parseInt(array[1])
        const third = parseInt(array[2])

        if (second > 0) {
            return `${this.base_hundred[first]} ${this.getTen(`${second}${third}`)}`
        }

        if (third === 0) {
            return `${this.base_hundred[first]}`
        }

        if (third === 4) {
            return `${this.base_hundred[first]} linh tư`;
        }

        return `${this.base_hundred[first]} linh ${this.base[third]}`
    }

    getThousand (number) {
        const numberCheck = Number(number ? number : this.number)
        const reverse_array = `${numberCheck}`.split('').reverse()
        
        let afterText = ''
        const after_number = reverse_array.slice(0, 3).reverse().join('')
    
        const before_number = parseInt(
            reverse_array.slice(3, reverse_array.length).reverse().join('')
        )
        const beforeLength = `${before_number}`.length
        
        if (parseInt(after_number) >= 1) {
            afterText = this.getHundred(after_number)
        }

        if (beforeLength === 1) {
            return `${this.base[before_number]} nghìn ${afterText}`
        }
        
        if (beforeLength === 2) {
            return `${this.getTen(before_number)} nghìn ${afterText}`
        }

        return `${this.getHundred(before_number)} nghìn ${afterText}`
    }

    getMillion (number) {
        const numberCheck = Number(number ? number : this.number)
        const reverse_array = `${numberCheck}`.split('').reverse()

        let afterText = ''
        const after_number = reverse_array.slice(0, 6).reverse().join('')

        const before_number = parseInt(
            reverse_array.slice(6, reverse_array.length).reverse().join('')
        )
        const beforeLength = `${before_number}`.length;
      
        if (parseInt(after_number) > 999) {
            afterText = this.getThousand(after_number)
        } 
        else if (parseInt(after_number) <= 999 && parseInt(after_number) >= 1) {
            afterText = this.getHundred(`${after_number}`.split('').slice(3, 6).join(''))
        }
        
        if (beforeLength === 1) {
          return `${this.base[before_number]} triệu ${afterText}`
        }
      
        if (beforeLength === 2) {
          return `${this.getTen(before_number)} triệu ${afterText}`
        }
      
        return `${this.getHundred(before_number)} triệu ${afterText}`
    }

    getBillion (number) {
        const numberCheck = Number(number ? number : this.number)
        const reverse_array = `${numberCheck}`.split('').reverse()
        
        let afterText = ''
        const after_number = reverse_array.slice(0, 9).reverse().join('')
      
        const before_number = parseInt(
            reverse_array.slice(9, reverse_array.length).reverse().join('')
        )
        const beforeLength = `${before_number}`.length
      
        if (parseInt(after_number) > 999999 && parseInt(after_number) <= 999999999) {
            afterText = this.getMillion(after_number)
        } 
        else if (parseInt(after_number) <= 999999 && parseInt(after_number) > 999) {
            afterText = this.getThousand(`${after_number}`.split('').slice(3, 9).join(''))
        } 
        else if (parseInt(after_number) <= 999 && parseInt(after_number) >= 1) {
            afterText = this.getHundred(`${after_number}`.split('').slice(6, 9).join(''))
        }
      
        if (beforeLength === 1) {
          return `${this.base[before_number]} tỷ ${afterText}`
        }
      
        if (beforeLength === 2) {
          return `${this.getTen(before_number)} tỷ ${afterText}`
        }
      
        if (beforeLength === 3) {
          return `${this.getHundred(before_number)} tỷ ${afterText}`
        }
      
        if (beforeLength > 3 && beforeLength <= 6) {
          return `${this.getThousand(before_number)} tỷ ${afterText}`
        }
      
        if (beforeLength > 6 && beforeLength <= 9) {
          return `${this.getMillion(before_number)} tỷ ${afterText}`
        }
    }

    getText () {
        const lengthNumber = `${this.number}`.length
        const endText = ` ${this.endText}`

        if (this.number < 0) {
            return `${this.getText(Math.abs(this.number))}`
        }

        if (lengthNumber === 1) {
            this.text = this.base[this.number]
        }
        if (lengthNumber === 2) {
            this.text = this.getTen() 
        }
        if (lengthNumber === 3) {
            this.text = this.getHundred()
        }
        if (lengthNumber > 3 && lengthNumber <= 6) {
            this.text = this.getThousand()
        }
        if (lengthNumber > 6 && lengthNumber <= 9) {
            this.text = this.getMillion()
        }
        if (lengthNumber > 9 && lengthNumber <= 18) {
            this.text = this.getBillion()
        }
        if (lengthNumber > 18) {
            this.text = 'No Support'
            return
        }

        this.text = this.text[0].toUpperCase() + this.text.slice(1) + endText
    }
}
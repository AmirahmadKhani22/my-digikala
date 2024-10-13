 function englishNumToPersianNum(number) {
    const persian = { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 
    8: "۸", 9: "۹" }
    number = number.toString().split("")
    let persianNumber = ""
    for (let i = 0; i < number.length; i++) {
        number[i] = persian[number[i]]
    }
    for (let i = 0; i < number.length; i++) {
        persianNumber += number[i]
    }
    return persianNumber
}
 function persianNumSeperator(number) {
    let num = englishNumToPersianNum(number)
    if(num.length > 3) {
        const temp = num.split("")
        const length = temp.length
        temp.forEach((value , index , array) => {
            if(!((index + 1) % 3)) {
                array[length-(index+1)] = ","+array[length-(index+1)]
            }
            return value
        })
        return temp.join("")
    } else {
        return num
    }
}
console.log(persianNumSeperator("65456465"))
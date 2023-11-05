// menggunakan kombinasi method dan for loop if else
const divideAndSort = (int) => {
    let numString = int.toString()
    // console.log(numString)
    // console.log(typeof numString)

    numString = numString + '0'
    let str = ''
    let arrayString = []
    let j = 0

    for (let i = 0; i < numString.length; i++) {
        if (numString[i] === '0') {
            arrayString[j] = str
            j++
            str = ''
        } else {
            str = str + numString[i]
        }
    }
    // console.log(arrayString)
    // console.log(typeof arrayString)
    const arrayUrut = arrayString.map((x) => {
        return x.split('').sort().join('');
    })
    // console.log(arrayUrut)
    const result = arrayUrut.join('')
    console.log(result)
}

divideAndSort(5956560159466056)


// // // full menggunakan method
// const divideAndSort = (int) => {
//     //ubah num menjadi string menggunakan toString
//     let numString = int.toString()
//     // console.log(numString)
//     // console.log(typeof numString)
//     //ubah string menjadi array dengan batas string '0'
//     let arrayString = numString.split('0')
//     // console.log(arrayString)
//     // console.log(typeof arrayString)
//     //buatkan array baru dengan map,
//     // ubah semua nilai didalam index array menjadi index array,
//     // lalu urutkan dengan menggunakan sort dan secara default mengurutkan dari terkecil,
//     // lalu kembalikan/ gabungkan dengan join
//     const arrayUrut = arrayString.map((x) => {
//         return x.split('').sort().join('');
//     })
//     // console.log(arrayUrut)
//     // console.log(typeof arrayUrut)
//     // lalu kembalikan/ gabungkan dengan join menjadi bentuk string
//     const result = arrayUrut.join('')
//     console.log(result)
// }

// divideAndSort(5956560159466056)
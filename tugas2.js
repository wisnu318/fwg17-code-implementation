const reverseWords = (kalimat) =>{

    let kata = ''
    let arrayKata = []
    let j = 0
    //karena hasil dari if ['Saya', 'Belajar'], 
    // maka ditambah code ini agar hasil [ 'Saya','Belajar','Javascript' ]
    kalimat = kalimat + ' ' 
    for(let i = 0; i < kalimat.length; i++) {
        if(kalimat[i] === ' '){
            arrayKata[j] = kata
            j++
            //karena output [ 'Saya', 'SayaBelajar']
            kata = '' //[ 'Saya', 'Belajar']
        }else{
            kata = kata + kalimat[i]
        }
    }
    // console.log(arrayKata)
// console.log(typeof arrayKata)
let reverse = ''
for (let x = arrayKata.length - 1; x >= 0; x--){
    // console.log(arrayKata[x])
    reverse = reverse + arrayKata[x] + ' '
}

console.log(reverse)
}

reverseWords('Saya Belajar Javascript')
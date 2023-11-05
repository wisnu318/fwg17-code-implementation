const cekPalindrom = (text) => {
    // buatkan for loop reverse
    let hasilPembalik = '';
    for(let x = text.length - 1; x >= 0; x--){
        hasilPembalik = hasilPembalik + text[x]
    }
    //bandingkan hasilPembalik dengan text
    if(hasilPembalik === text){
        console.log('hasil : Palindrom')
    }else{
        console.log('hasil : Bukan Palindrom')
    }
}

cekPalindrom('malam') 
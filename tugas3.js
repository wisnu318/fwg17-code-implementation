const FazzFood = (harga, voucher, jarak, pajak) => {
    //proses voucher/promo
    let potongan = 0;
    //validasi untuk promo yang dgunakan
    if (voucher === 'FAZZFOOD50' && harga >= 50000) {
        potongan = (harga / 100) * 50
        if (potongan >= 50000) {
            potongan = 50000
        }
    } 
    //validasi untuk promo yang dgunakan
    else if (voucher === 'DITRAKTIR60' && harga >= 25000) {
        potongan = (harga / 100) * 60
        if (potongan >= 30000) {
            potongan = 30000
        }
    }
    //proses jarak/biayaAntar
    let biayaAntar = 0
    if (jarak > 0 && jarak <= 2) {
        biayaAntar = 5000
    } else if (jarak > 2) {
        biayaAntar = 5000 + ((jarak - 2) * 3000)
    }
    //proses pajak/hargaPajak
    let hargaPajak = 0
    if (pajak === true) {
        hargaPajak = (harga / 100) * 5
    }
    //proses subTotal
    const SubTotal = (harga - potongan) + biayaAntar + hargaPajak

    //OUTPUT Harga
    console.log(`harga : ${harga}`)
    //OUTPUT Potongan
    console.log(`Potongan : ${potongan}`)
    //OUTPUT Biaya Antar
    console.log(`Biaya Antar : ${biayaAntar}`)
    //OUTPUT Pajak
    console.log(`Pajak : ${hargaPajak}`)
    //OUTPUT SubTotal
    console.log(`SubTotal : ${SubTotal}`)
}

FazzFood(200000, 'DITRAKTIR60', 5, true)
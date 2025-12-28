let tempAwal = 0
let suhuAwal = 1
let suhuAkhir = 2
let tempAkhir = 0

// i untuk handle loop process.stdin.on()
let i = 1

console.log("Pilih suhu awal: ")
console.log("1. Celcius")
console.log("2. Fahrenheit")
console.log("3. Reamur")
console.log("4. Kelvin")
console.log("Input angka 1 sampai 4:")

process.stdin.on('data', data => {
    input = data.toString().trim()

    input = Number(input)
    // console.log(typeof input)
    // console.log(input)

    if (i === 1) {
        suhuAwal = input
        if (isNaN(suhuAwal)) {
            console.log("Input yang Anda masukkan bukan angka. Masukkan suhu awal:")
        } else if (suhuAwal < 1 || suhuAwal > 4) {
            console.log("Angka yang Anda masukkan tidak sesuai. Masukkan suhu awal:")
        } else {
            // suhu awal sesuai
            switch (suhuAwal) {
                case 1: {
                    console.log(`Suhu awal adalah Celcius`)
                    break
                }
                case 2: {
                    console.log(`Suhu awal adalah Fahrenheit`)
                    break
                }
                case 3: {
                    console.log(`Suhu awal adalah Reamur`)
                    break
                }
                case 4: {
                    console.log(`Suhu awal adalah Kelvin`)
                    break
                }

            }
            i++

            console.log("Pilih suhu akhir: ")
            console.log("1. Celcius")
            console.log("2. Fahrenheit")
            console.log("3. Reamur")
            console.log("4. Kelvin")
            console.log("Masukkan suhu akhir:")

        }

    } else if (i === 2){
        suhuAkhir = input
        // console.log(`suhu akhir adalah ${suhuAkhir}`)

        if (isNaN(suhuAkhir)) {
            console.log("Input yang Anda masukkan bukan angka. Masukkan suhu akhir:")
        } else if (suhuAkhir < 1 || suhuAkhir > 4) {
            console.log("Angka yang Anda masukkan tidak sesuai. Masukkan suhu akhir:")
        } else if (suhuAkhir === suhuAwal) {
            console.log("Suhu akhir tidak boleh sama dengan suhu awal. Masukkan suhu akhir:")
        } else {
            switch (suhuAkhir) {
                case 1: {
                    console.log(`Suhu akhir adalah Celcius`)
                    break
                }
                case 2: {
                    console.log(`Suhu akhir adalah Fahrenheit`)
                    break
                }
                case 3: {
                    console.log(`Suhu akhir adalah Reamur`)
                    break
                }
                case 4: {
                    console.log(`Suhu akhir adalah Kelvin`)
                    break
                }
            }
            i++
            console.log("Masukkan temperatur suhu yang akan dikonversi:")
        }

    } else if (i === 3) {
        tempAwal = input
        // console.log(`temperatur awal adalah: ${tempAwal}`)

        if (isNaN(tempAwal)) {
                console.log("Temperatur yang Anda input bukan angka. Masukkan temperatur suhu:")
            } else {
                switch(suhuAwal) {
                    case 1:
                        switch(suhuAkhir) {
                            case 2:
                                tempAkhir = (tempAwal * 1.8) + 32.0
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            case 3:
                                tempAkhir = tempAwal * 0.8
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            case 4:
                                tempAkhir = tempAwal + 273.15
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                        } break;
                    case 2:
                        switch(suhuAkhir) {
                            case 1:{
                                tempAkhir = (tempAwal - 32) * 1.8
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                            case 3: {
                                tempAkhir = (tempAwal - 32) * 4 / 9
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                            case 4: {
                                tempAkhir = (tempAwal - 32) * 5 / 9 + 273.15
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                        } break;
                    case 3:
                        switch(suhuAkhir) {
                            case 1: {
                                tempAkhir = tempAwal * 5 / 4
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                            case 2: {
                                tempAkhir = (tempAwal * 9/4) + 32
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                            case 4: {
                                tempAkhir = tempAwal * 5 / 4 + 273.15
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                        } break;
                    case 4:
                        switch(suhuAkhir) {
                            case 1: {
                                tempAkhir = tempAwal - 273.15
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                            case 2: {
                                tempAkhir = tempAwal * 9 / 5 - 459.67
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                            case 3: {
                                tempAkhir = (tempAwal - 273.15) * 4 / 5
                                console.log(`Hasil konversi suhu = ${tempAkhir}`)
                                break;
                            }
                        }
                }
                process.exit()
            }        
    }

    
})
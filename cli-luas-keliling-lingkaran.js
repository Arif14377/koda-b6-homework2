let r = 0
let pi = 0

let luasLingkaran = 0
let kelilingLingkaran = 0

console.log("# MENGHITUNG KELILING DAN LUAS LINGKARAN")
console.log("Masukkan jari-jari lingkaran: ")

process.stdin.on("data", function (input) {
    r = input.toString().trim()
    // console.log(`Jari-jari lingkaran adalah: ${r}`)
    
    r = Number(r)
    // console.log(typeof r)
    
    // console.log(r)
    // console.log(isNaN(r))

    if (!isNaN(r)) {
        // console.log("jari-jari adalah adalah angka")
        if (r % 7 == 0) {
            pi = 22/7
        } else {
            pi = 3.14
        }
        // console.log(pi)

        kelilingLingkaran = 2 * pi * r
        console.log(`keliling lingkaran = ${kelilingLingkaran}`)

        luasLingkaran = pi * r * r
        console.log(`luas lingkaran = ${luasLingkaran}`)

        process.exit()
    } else {
        console.log("jari-jari yang Anda masukkan bukan Angka.")
        console.log("Masukkan kembali jari-jari lingkaran")
    }


});

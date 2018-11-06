// KATEGORI BILANGAN [Bulat, Negatif, Cacah, Nol, Asli, Ganjil, Genap, Prima, Komposit]

var i = 0
var angka = []
let hasil = []

let bilangan = (a) =>{

    //Mengecek bilangan bulat
    if(isNaN(a)==false && (a % 1 == 0)){
        hasil.push("Bulat")
        i++
    }

    //Mengecek bilangan negatif
    if (i == 1){ 
        if(a < 0){ 
            hasil.push("Negatif")
            i++
        }
    }

    //Mengecek bilangan cacah
    if (i == 1){ 
        if(a >= 0){ 
            hasil.push("Cacah")
            i++
        }
    }

    //Mengecek bilangan nol
    if(a == 0){
        hasil.push("Nol")
        hasil.push("Genap")
    }

    //Mengecek bilangan asli
    if (i == 2){
        if(a != 0 && a>0){
            hasil.push("Asli")
            i++
        }
    }

    //Mengecek bilangan ganjil
    if(i == 3){ 
        if(a % 2 !=0 && a > 0){
            hasil.push("Ganjil")
        }
    }

    //Mengecek bilangan genap
    if(i == 3){ 
        if(a % 2 == 0){
            hasil.push("Genap")
        }
    }

    //Mengecek bilangan prima
    if(a == 1){
        i++
        hasil.push("Bukan Prima")
    }
    if(a < 1){
        i++
        hasil.push("Bukan Prima")
    }
    if(a == 2){
        i+=2
        hasil.push("Prima")
    }
    if(a == 3){
        i+=2
        hasil.push("Prima")
    }else if(a > 3){
        for(counter = 2; counter < a; counter++) {
            angka.push(a % counter)
        }
        if(angka.includes(0) == true){
            hasil.push("Bukan Prima")
            i++
        }else{
            hasil.push("Prima")
            i+=2
        }
    }

    //Mengecek bilangan komposit
    if(a > 1 && i == 4){
        hasil.push("Komposit")
    }
    return hasil
}
console.log(bilangan(0)) // Menampilkan hasil : "[ 'Bulat', 'Cacah', 'Nol', 'Genap', 'Bukan Prima' ]"
console.log(bilangan(11))// Menampilkan hasil : "[ 'Bulat', 'Cacah', 'Nol', 'Genap', 'Bukan Prima', 'Bulat', 'Prima' ]"


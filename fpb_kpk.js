//FPB dan KPK

let fpb1 = []
let fpb2 = [] 
let fpb3 = [] 
let hasilfpb = 0

let kpk1 = []
let kpk2 = []
let kpk3 = []
let hasilkpk = 0

//function fpb dan kpk
let fpb_kpk = (a,b) => {

    //FPB
    //loop untuk mencari faktor (a)
    for(i=1; i<=a; i++) { 
        if(a % i == 0){
            fpb1.push(i)
        }
    }
    //loop untuk mencari faktor (b)
    for(i=1; i<=b; i++) { 
        if(b % i == 0){
            fpb2.push(i)
        }
    }
    //loop untuk membandingkan angka pembagi yang sama
    for(i=0; i<fpb1.length; i++){
        if(fpb2.includes(fpb1[i])) {
            fpb3.push(fpb1[i])
        }
    }
    //Variable hasil FPB
    hasilfpb = fpb3[fpb3.length - 1]

    //KPK
    //loop untuk mencari hasil perkalian/kelipatan (a)
    for(i=1; i<=b; i++){ 
        kpk1.push(a * i)
    }
     //loop untuk mencari hasil perkalian/kelipatan (b)
    for(i=1; i<=a; i++){
        kpk2.push(b * i)
    }
    //loop untuk membandingkan hasil perkalian/kelipatan yang sama
    for(i=0; i<kpk1.length; i++){ 
        if(kpk2.includes(kpk1[i])) {
           kpk3.push(kpk1[i])
        }
    }
    //Variable hasil KPK
    hasilkpk = kpk3[0]

    console.log(`FPB ${a} dan ${b} = ${hasilfpb} 
KPK ${a} dan ${b} = ${hasilkpk}`)

}

fpb_kpk(2,3)

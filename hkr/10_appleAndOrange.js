/*
s - t   : rentang rumah dalam sumbu x
a, b    : posisi pohon apel (a) dan jeruk (b) pada sumbu x
apples  : letak jatuhnya beberapa buah apel pada sumbu x (minus artinya jatuh relatif ke kiri pohon, positif artinya jatuh relatif ke kanan pohon)
oranges  : letak jatuhnya beberapa buah jeruk pada sumbu x (minus artinya jatuh relatif ke kiri pohon, positif artinya jatuh relatif ke kanan pohon)

----------
objektif: print 2 baris dimana 
    - baris ke-1 adalah berapa banyak buah apel yang jatuh dalam rentang rumah dalam sumbu x (s hingga t)
    - baris ke-2 adalah berapa banyak buah jeruk yang jatuh dalam rentang rumah dalam sumbu x (s hingga t)
*/

let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apl = 0;
    let org = 0;

    apples.map((frt)=>{
        if ((a + frt) >= s && (a + frt) <= t){
            apl++
        }
    })

    oranges.map((frt)=>{
        if ((b + frt) >= s && (b + frt) <= t){
            org++
        }
    })

    console.log(`${apl}\n${org}`)
}

console.log(
countApplesAndOranges(s, t, a, b, apples, oranges)
);


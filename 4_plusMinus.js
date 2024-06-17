function plusMinus(arr) {
    let n = arr.length;
    let p = 0, ng = 0, z = 0;
    
    for (const item of arr) {
        if (item * 1 < 0) ng++;
        if (item * 1 > 0) p++;
        if (item * 1 === 0) z++;
    }

    console.log((p/n).toFixed(6))
    console.log((ng/n).toFixed(6))
    console.log((z/n).toFixed(6))
}

let arr = [ -4, 3, -9, 0, 4, 1 ]

plusMinus(arr)
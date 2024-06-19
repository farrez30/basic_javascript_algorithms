let grades = [73, 67, 38, 33]

function gradingStudents(grades) {
    // console.log(grades)

    let grd = grades.map(calc)
    // console.log(grd)

    function calc(val) {
        let g = val
        for (let i = 0; g % 5 !== 0; i++) {
            g++
        }
        // console.log(g)
        if (val < 38) {
            //    console.log("less g:",val)
            return val
        } else if (
            (g - val)
            < 3) {
            //    console.log("more g:",g)
            //    console.log("more g:",(g-val)<3)
            //    console.log("more g:",val)
            return g
        } else {
            return val
        }
    }

    return grd

}

let res = gradingStudents(grades)
console.log(res)


// clean version: /////////////////////////////////////////

function gradingStudents2(grades) {
    return grades.map(val => {
        let g = val
        for (let i = 0; g % 5 !== 0; i++) {
            g++
        }
        if (val < 38) {
            return val
        } else if (
            (g - val)
            < 3) {
            return g
        } else {
            return val
        }
    }

    )
}

let res2 = gradingStudents2(grades)
console.log(res2)
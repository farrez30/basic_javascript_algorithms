function timeConversion(s) {
    let hh = s.slice(0, 2); //hour
    let mm = s.slice(3, 5); //minute
    let ss = s.slice(6, 8); //second

    let ap = s.slice(8); // AM/PM variable 

    // ? The Loop //
    switch (true) {
        case ap === 'AM':
            if (hh === '12') {
                return `00:${mm}:${ss}`
            } else {
                return `${hh}:${mm}:${ss}`
            }

        case ap === 'PM':
            if (Number(hh) >= 1 && Number(hh) < 12) {
                return `${String(12 + Number(hh))}:${mm}:${ss}`
            } else if (Number(hh) >= 12) {
                return `12:${mm}:${ss}`
            } else {
                return `${hh}:${mm}:${ss}`
            }
    }
}
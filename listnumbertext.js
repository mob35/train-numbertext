const aa = (number) => {


    let a = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    let b = ['หน่วย', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
    let c = number;
    let result = '';

    for (let i = 0; i < c.length; i++) {
        const num = c[i];
        if (num !== '0') {
            result = result + a[num];
            result = result + b[c.length - (i + 1)];
        }


        result = result.replace('สองสิบ', 'ยี่สิบ')
        result = result.replace('หนึ่งสิบ', 'สิบ')
        result = result.replace('หนึ่งหน่วย', 'เอ็ด')
        result = result.replace('หน่วย', '')
        if (c.length <= 1) {
            result = result.replace('เอ็ด', 'หนึ่ง')
        } else {
            result = result.replace('หนึ่งหน่วย', 'เอ็ด')
        }
    }

    console.log(result)
}

// ===================================================================================================================================================
// ===================================================================================================================================================
// ===================================================================================================================================================
// ===================================================================================================================================================
const bb = (number) => {
    let a = number;

    modA = 0;
    modB = 0;
    divA = 0;
    divB = 0;
    divC = 0;

    if (a >= 10) {
        if (a >= 10) {
            divA = Math.floor(a / 10);
            modA = a % 10;
        }
        if (modA >= 5) {
            divB = Math.floor(modA / 5);
            modB = modA % 5;
        } else {
            divC = Math.floor(modA / 1);
        }
        if (modB >= 1) {
            divC = Math.floor(modB / 1);
        }
    } else if (a <= 10) {
        if (a >= 5) {
            divB = Math.floor(a / 5);
            modB = a % 5;
        } else {
            divC = Math.floor(a / 1);
        }
        if (modB >= 1) {
            divC = Math.floor(modB / 1);
        }
    }



    console.log('เหรียญ 10 : ' + divA + ' เหรียญ');
    console.log('เหรียญ 5 : ' + divB + ' เหรียญ');
    console.log('เหรียญ 1 : ' + divC + ' เหรียญ');
}


// ===================================================================================================================================================
// ===================================================================================================================================================
// ===================================================================================================================================================
// ===================================================================================================================================================
const cc = (number) => {
    let coin10 = 20;
    let coin5 = 100;
    let coin1 = 1000;
    let num = 0;
    let result10 = 0;
    let result5 = 0;
    let result1 = 0;

    let input = number;

    if (input >= 10) {
        num = input / 10;
        result10 = num;
        if (num >= 20) {
            num = num - coin10;
            num = Math.round(num * 10);
            result10 = coin10;
            if (num >= 5) {
                num = num / 5;
                result5 = num;
                if (num >= 100) {
                    num = num - coin5;
                    num = Math.round(num * 5);
                    result5 = coin5;
                    if (num <= 1000) {
                        result1 = num;
                    } else {
                        result10 = 0;
                        result5 = 0;
                        result1 = 0;
                        console.log('จำนวนเหรียญไม่เพียงพอ');
                    }
                } else {
                    num = num * 5;
                    result5 = Math.floor(num / 5);
                    num = num % 5;
                    result1 = Math.floor(num / 1);
                }
            }
        } else {
            result10 = Math.floor(input / 10);
            num = input % 10;
            if (num >= 5) {
                result5 = Math.floor(num / 5)
                num = input % 5;
            } else {
                result1 = Math.floor(num / 1);
            }
            if (num >= 1) {
                result1 = Math.floor(num / 1);
            }
        }

    } else {
        if (input >= 5) {
            result5 = Math.floor(input / 5)
            num = input % 5;
        } else {
            result1 = Math.floor(num / 1);
        }
        if (input >= 1) {
            result1 = Math.floor(input / 1);
        }
    }

    console.log('เหรียญ 10 : ' + result10 + ' เหรียญ');
    console.log('เหรียญ 5 : ' + result5 + ' เหรียญ');
    console.log('เหรียญ 1 : ' + result1 + ' เหรียญ');
}


module.exports = {
    aa,
    bb,
    cc
}
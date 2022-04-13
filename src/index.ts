
/**
 * @param code File Buffer
 * @returns Zip Buffer
 */
export function zerozip(code: Buffer): Buffer {
    const x = code.toString("hex").split('504b0').filter(a => a).map(a => '504b0' + a)
    let y = ''
    for (const i of x) {
        let x:string[] = []
        let u = {
            '504b0304': function () { return [[0, 4], [4, 2], [6, 2], [8, 2], [10, 2], [12, 2], [14, 4], [18, 4], [22, 4], [26, 2], [28]].map(a => a.map(a => a * 2)).map((a) => i.slice(a[0], a[1] === undefined ? i.length : a[0] + a[1])) },
            '504b0102': function () { return [[0, 4], [4, 2], [6, 2], [8, 2], [10, 2], [12, 2], [14, 2], [16, 4], [20, 4], [24, 4], [28]].map(a => a.map(a => a * 2)).map((a) => i.slice(a[0], a[1] === undefined ? i.length : a[0] + a[1])) },
            '504b0506': function () { return [[0, 4], [4, 2], [6, 2], [8, 2], [10, 2], [12, 4], [16]].map(a => a.map(a => a * 2)).map((a) => i.slice(a[0], a[1] === undefined ? i.length : a[0] + a[1])) },
            '504b0708': function () { return [i] }
        }[i.slice(0, 8)]
        if(u) x = u()
        else x = [i]
        switch (x[0]) {
            case '504b0304':
                u[6] = '00000000'
                u[8] = '00000000'
                break;
            case '504b0102':
                u[7] = '00000000'
                u[9] = '00000000'
                break
            default:
                break;
        }
        y += x.join('')
    }
    return Buffer.from(y, 'hex')
}
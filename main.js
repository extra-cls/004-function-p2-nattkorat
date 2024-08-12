const quadratic = (a, b, c) => {
    let discriminant =  b*b - 4 * a * c
    if (discriminant >= 0){
        let x1 = (-b + Math.sqrt(discriminant)) / 2 * a
        let x2 = (-b - Math.sqrt(discriminant)) / 2 * a
        return `x1 = ${x1}, x2 = ${x2}`

    }else{
        return "No root!"
    }
}

const formatSum = n => {
    if (n <= 1) return '1'
    return formatSum(n - 1) + "+" + String(n)
}



// DO NOT DELETE CODE BELOW
export {quadratic, formatSum}

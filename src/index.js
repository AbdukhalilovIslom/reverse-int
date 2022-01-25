module.exports = function reverse(temp) {
    temp = Math.abs(temp);
    let a, b, c;
    c = temp % 10;
    b = ((temp % 100) - c) / 10;
    a = (temp - temp % 100) / 100;
    return 100 * c + 10 * b + a;
}
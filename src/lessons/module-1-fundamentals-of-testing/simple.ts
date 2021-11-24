const sum = (a: number, b: number) => a + b;
const buggedSum = (a: number, b: number) => a - b


const subtract = (a: number, b: number) => a - b;

let result = sum(3, 7);
let faillingResult = buggedSum(3, 7)

let expected = 10;
expect(result).toBe(expected)
expect(faillingResult).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)


function expect<TActual , TExpected extends TActual >(actual: TActual) {
    return {
        toBe(expected: TExpected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toEqual(expected: TExpected) {
        },
        toBeGreaterThan(expected: TExpected) {

        }
    }
}

 
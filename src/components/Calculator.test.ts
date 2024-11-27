import Calculator from "./Calculator"

describe("Tests for Calculator component", () => {
    test("add", () => {
        expect(Calculator.add(1, 2)).toBe(3)
        expect(Calculator.add(1.2, 2.1)).toBe(3.3)
        expect(Calculator.add("a", "b")).toBe("ab")
    })

    test("subtract", () => {
        expect(Calculator.subtract(2, 1)).toBe(1)
        expect(Calculator.subtract(1.2, 0.2)).toBe(1)
    })

    test("multiply", () => {
        expect(Calculator.multiply(2, 2)).toBe(4)
        expect(Calculator.multiply(1.5, 2)).toBe(3)
    })

    test("divide", () => {
        expect(Calculator.divide(4, 2)).toBe(2)
        expect(Calculator.divide(3, 2)).toBe(1.5)

    })
})
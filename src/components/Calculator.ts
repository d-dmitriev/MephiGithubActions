export default class Calculator {
    static add(first: number, second: number): number
    static add(first: string, second: string): string
    static add(first: any, second: any) {
        return first + second
    }
    static subtract(first: number, second: number): number
    static subtract(first: any, second: any) {
        return first - second
    }
    static multiply(first: number, second: number): number
    static multiply(first: any, second: any) {
        return first * second
    }
    static divide(first: number, second: number): number
    static divide(first: any, second: any) {
        return first / second
    }
}
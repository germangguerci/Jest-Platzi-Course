import { numbers } from "../numbers";

describe("Comparacion de numeros", () => {
    test('Mayor que', () => {
        expect(numbers(2,3)).toBeGreaterThan(3); 
    });
    test('Mayor o igual que', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });
    test('Menor que', () => {
        expect(numbers(2,3)).toBeLessThan(6);
    });
    test('Menor o igual que', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(4);
    });
    test('Numeros flotantes', () => {
        expect(numbers(0.3,0.4)).toBeCloseTo(0.7);
    });
})
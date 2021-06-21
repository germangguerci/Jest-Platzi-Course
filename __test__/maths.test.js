import { expect, test } from "@jest/globals";
import { sumar, restar, multiplicar, dividir  } from "../maths";

describe('Calculos matematicos', () => {
    
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    });

    test('Prueba de restas', () => {
        expect(restar(1,1)).toBe(0);
    });

    test('Prueba de multiplicaciones', () => {
        expect(multiplicar(3,3)).toBe(9);
    });

    test('Prueba de diviciones', () => {
        expect(dividir(3,3)).toBe(1);
    });

})
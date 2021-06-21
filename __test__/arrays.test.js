import { arrayFrutas, arrayColores } from "../arrays";

describe('Comprobaremos que existe un elemento', () => {
    test('Contiene una frutilla?', () => {
        expect(arrayFrutas()).toContain('frutilla');
    })
    test('No contiene melon', () => {
        expect(arrayFrutas()).not.toContain('melon');
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFrutas()).toHaveLength(3);
    });
    test('Comprobaremos si contiene el color verde', () => {
        expect(arrayColores()).toContain('verde');
    })
})
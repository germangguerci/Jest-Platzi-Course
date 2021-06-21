import { isTrue, isFalse, isUndefined, isNull } from "../true";

describe("Pruebas de tipo de valores", () => {
    test("Es verdadero", () => {
        expect(isTrue()).toBeTruthy();
    });
    test("Es undefined", () => {
        expect(isUndefined()).toBeUndefined();
    });
    test("Es falso", () => {
        expect(isFalse()).toBeFalsy(); 
    });
    test("Es nulo", () => {
        expect(isNull()).toBeNull();
    });
})
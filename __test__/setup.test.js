beforeEach(() => console.log("Antes de cada prueba"));
beforeAll(() => console.log("Antes de TODAS las pruebas"));
afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("Despues de todas las pruebas"));

describe('Eventos de jest antes, despues, etc', () => {
    test('Es verdadero', () => {
        expect(true).toBe(true);
    })
})

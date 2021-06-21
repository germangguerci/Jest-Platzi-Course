describe('Comprobar strings', () => {
    const texto = "Hola que tal";
    test('Comprobar el tamaño de un texto', () => {
        expect(texto).toHaveLength(12);
    });
    test('Debe contener el siguiente texto', () => {
        expect(texto).toMatch(/que tal/);
    });
})
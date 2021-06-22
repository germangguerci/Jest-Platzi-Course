import { getDataFromApi } from "../promise";

describe('Probando promesas', () => {
    test('Realizando una petición a una api', () => {
        const api = 'https://rickandmortyapi.com/api/character/'
        return getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
    });
    test('Resuelve un Hola!', () => {
        return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    });
    test('Rechaza con un error', () => {
        return expect(Promise.reject('Errooor!')).rejects.toBe('Errooor!');
    });

});
import { getDataFromApi } from "../promise";

describe('Probar Async/Await', () => {
    test('Realizar una peticion a una api', async () => {
        const api = 'https://rickandmortyapi.com/api/character/'
        const response = await getDataFromApi(api);
        expect(response.results.length).toBeGreaterThan(0);
    });
    test('Realizar una peticion a una api con error', async () => {
        const apiError = 'http://httpstat.us/404';
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'))
    })
})
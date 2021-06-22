import { getCharacter } from "../snapshot";
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    })
    test('Tenemos una excepcion dentro del codigo', () => {
        const user = {
            date: new Date(),
            name: "Flores"
        }
        expect(user).toMatchInlineSnapshot({
  date: expect.any(Date) }, `
Object {
  "date": Any<Date>,
  "name": "Flores",
}
`)
    })
})

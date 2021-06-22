import { callbackHell } from "../callback";

describe('Probando un Callback', () => {
    test('Callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hello world');
            done();
    };
    callbackHell(otherCallback);    
    });
})
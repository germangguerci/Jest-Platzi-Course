describe("Matchers/Comparadores",() => {
    const user1 = {
        name: "George"
    }
    const user2 = {
        name: "George"
    }
    const user3 = {
        name: "Lucas"
    }
    test("Igualdad de elementos", () => {
        expect(user1).toEqual(user2);
    });
    test("Desigualdad de elementos", () => {
        expect(user1).not.toEqual(user3);
    });
})
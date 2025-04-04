import { capitalize, reverseString, Calculator } from "./functions.js";

test('capitalize first character', () => {
    expect(capitalize('flutteronderpy')).toBe('Flutteronderpy');
    expect(capitalize('soul garurumon')).toBe('Soul garurumon');
    expect(capitalize('luckyProphet')).toBe('LuckyProphet');
});

test('reverse string', () => {
    expect(reverseString('flutteronderpy')).toBe('yprednorettulf');
    expect(reverseString('1234aLanj')).toBe('jnaLa4321');
    expect(reverseString('Soul Garurumon')).toBe('nomururaG luoS');
});

test('calculator operations', () => {
    let object = new Calculator(5,2);
    expect(object.add()).toBe(7);
    expect(object.subtract()).toBe(3);
    expect(object.divide()).toBe(2.5);
    expect(object.multiply()).toBe(10);

    let object2 = new Calculator("lol",7);
    expect(object2.add()).toBe("lol is not a number!");

    let object3 = new Calculator(23124,"789turtle");
    expect(object3.multiply()).toBe("789turtle is not a number!");
});
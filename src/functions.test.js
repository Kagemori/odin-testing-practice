import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } from "./functions.js";

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

test('caesar cipher', () => {
    expect(caesarCipher('flutteronderpy',3)).toBe('ioxwwhurqghusb');
    expect(caesarCipher(`Honey, you're cute!`,44)).toBe(`Zgfwq, qgm'jw umlw!`);
});

test('analyzing array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe(`{"average":4,"min":1,"max":8,"length":6}`);
    expect(analyzeArray([1,"elephant",3,4,"turtle",6])).toBe(`Array contains an element that's not a number!`);
    expect(analyzeArray({"turtle":5,"monkey":5345})).toBe("Given input is not an array!");
})
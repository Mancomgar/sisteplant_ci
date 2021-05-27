const suma = require('./suma');

test('2 + 5 = 7', () => {
    expect(suma(2,5)).toBe(7);
});

test('2 + N = NaN', () => {
    expect(suma('a',5)).toBe('NaN');
});

/////////////
/*
const suma = require('./suma');

test('2 + 5 tiene que ser igual a 7', ()=> {
    expect(suma(2,5)).toBe(7);
});

test('a + 5 = NaN', ()=> {
    expect(suma(2,5)).toBe(7);
});
*/
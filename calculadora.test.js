import { suma, resta, multiplicacion } from './calculadora.js';

describe('Calculadora', () => {
    describe('suma', () => {
        it('debería retornar 5 para suma(2, 3)', () => {
            expect(suma(2, 3)).toBe(5);
        });

        it('debería retornar -1 para suma(2, -3)', () => {
            expect(suma(2, -3)).toBe(-1);
        });

        it('debería retornar 0 para suma(0, 0)', () => {
            expect(suma(0, 0)).toBe(0);
        });
    });

    describe('resta', () => {
        it('debería retornar -1 para resta(2, 3)', () => {
            expect(resta(2, 3)).toBe(-1);
        });

        it('debería retornar 5 para resta(2, -3)', () => {
            expect(resta(2, -3)).toBe(5);
        });

        it('debería retornar 0 para resta(0, 0)', () => {
            expect(resta(0, 0)).toBe(0);
        });
    });

    describe('multiplicacion', () => {
        it('debería retornar 6 para multiplicacion(2, 3)', () => {
            expect(multiplicacion(2, 3)).toBe(6);
        });

        it('debería retornar -6 para multiplicacion(2, -3)', () => {
            expect(multiplicacion(2, -3)).toBe(-6);
        });

        it('debería retornar 0 para multiplicacion(0, 3)', () => {
            expect(multiplicacion(0, 3)).toBe(0);
        });
    });
});

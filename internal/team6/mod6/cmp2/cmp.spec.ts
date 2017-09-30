
import { Cmp8662Component } from './cmp';
describe('Cmp8662Component', () => {
  it('should add', () => {
    expect(new Cmp8662Component().add8662(1)).toBe(8663);
  });
});
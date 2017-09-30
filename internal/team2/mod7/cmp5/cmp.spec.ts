
import { Cmp8275Component } from './cmp';
describe('Cmp8275Component', () => {
  it('should add', () => {
    expect(new Cmp8275Component().add8275(1)).toBe(8276);
  });
});

import { Cmp8759Component } from './cmp';
describe('Cmp8759Component', () => {
  it('should add', () => {
    expect(new Cmp8759Component().add8759(1)).toBe(8760);
  });
});

import { Cmp8704Component } from './cmp';
describe('Cmp8704Component', () => {
  it('should add', () => {
    expect(new Cmp8704Component().add8704(1)).toBe(8705);
  });
});
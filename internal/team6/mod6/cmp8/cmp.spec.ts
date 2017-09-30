
import { Cmp8668Component } from './cmp';
describe('Cmp8668Component', () => {
  it('should add', () => {
    expect(new Cmp8668Component().add8668(1)).toBe(8669);
  });
});
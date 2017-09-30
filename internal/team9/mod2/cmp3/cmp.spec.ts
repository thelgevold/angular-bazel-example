
import { Cmp8923Component } from './cmp';
describe('Cmp8923Component', () => {
  it('should add', () => {
    expect(new Cmp8923Component().add8923(1)).toBe(8924);
  });
});
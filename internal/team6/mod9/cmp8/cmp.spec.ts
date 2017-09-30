
import { Cmp8698Component } from './cmp';
describe('Cmp8698Component', () => {
  it('should add', () => {
    expect(new Cmp8698Component().add8698(1)).toBe(8699);
  });
});
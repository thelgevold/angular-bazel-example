
import { Cmp8376Component } from './cmp';
describe('Cmp8376Component', () => {
  it('should add', () => {
    expect(new Cmp8376Component().add8376(1)).toBe(8377);
  });
});

import { Cmp8699Component } from './cmp';
describe('Cmp8699Component', () => {
  it('should add', () => {
    expect(new Cmp8699Component().add8699(1)).toBe(8700);
  });
});

import { Cmp8026Component } from './cmp';
describe('Cmp8026Component', () => {
  it('should add', () => {
    expect(new Cmp8026Component().add8026(1)).toBe(8027);
  });
});
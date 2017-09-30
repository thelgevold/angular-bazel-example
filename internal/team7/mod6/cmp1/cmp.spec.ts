
import { Cmp8761Component } from './cmp';
describe('Cmp8761Component', () => {
  it('should add', () => {
    expect(new Cmp8761Component().add8761(1)).toBe(8762);
  });
});
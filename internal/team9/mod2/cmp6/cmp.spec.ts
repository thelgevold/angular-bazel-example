
import { Cmp8926Component } from './cmp';
describe('Cmp8926Component', () => {
  it('should add', () => {
    expect(new Cmp8926Component().add8926(1)).toBe(8927);
  });
});
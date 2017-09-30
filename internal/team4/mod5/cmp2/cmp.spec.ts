
import { Cmp8452Component } from './cmp';
describe('Cmp8452Component', () => {
  it('should add', () => {
    expect(new Cmp8452Component().add8452(1)).toBe(8453);
  });
});
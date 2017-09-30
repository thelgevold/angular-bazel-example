
import { Cmp9256Component } from './cmp';
describe('Cmp9256Component', () => {
  it('should add', () => {
    expect(new Cmp9256Component().add9256(1)).toBe(9257);
  });
});

import { Cmp9532Component } from './cmp';
describe('Cmp9532Component', () => {
  it('should add', () => {
    expect(new Cmp9532Component().add9532(1)).toBe(9533);
  });
});

import { Cmp8169Component } from './cmp';
describe('Cmp8169Component', () => {
  it('should add', () => {
    expect(new Cmp8169Component().add8169(1)).toBe(8170);
  });
});
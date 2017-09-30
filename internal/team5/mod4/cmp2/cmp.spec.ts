
import { Cmp8542Component } from './cmp';
describe('Cmp8542Component', () => {
  it('should add', () => {
    expect(new Cmp8542Component().add8542(1)).toBe(8543);
  });
});

import { Cmp8055Component } from './cmp';
describe('Cmp8055Component', () => {
  it('should add', () => {
    expect(new Cmp8055Component().add8055(1)).toBe(8056);
  });
});

import { Cmp8798Component } from './cmp';
describe('Cmp8798Component', () => {
  it('should add', () => {
    expect(new Cmp8798Component().add8798(1)).toBe(8799);
  });
});
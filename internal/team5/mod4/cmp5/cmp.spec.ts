
import { Cmp8545Component } from './cmp';
describe('Cmp8545Component', () => {
  it('should add', () => {
    expect(new Cmp8545Component().add8545(1)).toBe(8546);
  });
});
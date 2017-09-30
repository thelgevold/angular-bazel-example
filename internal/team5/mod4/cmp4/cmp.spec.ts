
import { Cmp8544Component } from './cmp';
describe('Cmp8544Component', () => {
  it('should add', () => {
    expect(new Cmp8544Component().add8544(1)).toBe(8545);
  });
});
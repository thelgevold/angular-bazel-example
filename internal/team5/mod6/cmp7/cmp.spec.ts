
import { Cmp8567Component } from './cmp';
describe('Cmp8567Component', () => {
  it('should add', () => {
    expect(new Cmp8567Component().add8567(1)).toBe(8568);
  });
});
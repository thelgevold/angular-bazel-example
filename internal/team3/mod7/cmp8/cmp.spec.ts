
import { Cmp8378Component } from './cmp';
describe('Cmp8378Component', () => {
  it('should add', () => {
    expect(new Cmp8378Component().add8378(1)).toBe(8379);
  });
});

import { Cmp8076Component } from './cmp';
describe('Cmp8076Component', () => {
  it('should add', () => {
    expect(new Cmp8076Component().add8076(1)).toBe(8077);
  });
});
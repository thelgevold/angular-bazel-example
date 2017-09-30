
import { Cmp8375Component } from './cmp';
describe('Cmp8375Component', () => {
  it('should add', () => {
    expect(new Cmp8375Component().add8375(1)).toBe(8376);
  });
});
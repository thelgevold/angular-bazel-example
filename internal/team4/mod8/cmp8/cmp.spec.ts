
import { Cmp8488Component } from './cmp';
describe('Cmp8488Component', () => {
  it('should add', () => {
    expect(new Cmp8488Component().add8488(1)).toBe(8489);
  });
});
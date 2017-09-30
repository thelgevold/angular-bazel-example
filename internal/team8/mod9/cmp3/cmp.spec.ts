
import { Cmp8893Component } from './cmp';
describe('Cmp8893Component', () => {
  it('should add', () => {
    expect(new Cmp8893Component().add8893(1)).toBe(8894);
  });
});
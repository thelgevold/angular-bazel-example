
import { Cmp8760Component } from './cmp';
describe('Cmp8760Component', () => {
  it('should add', () => {
    expect(new Cmp8760Component().add8760(1)).toBe(8761);
  });
});

import { Cmp8858Component } from './cmp';
describe('Cmp8858Component', () => {
  it('should add', () => {
    expect(new Cmp8858Component().add8858(1)).toBe(8859);
  });
});
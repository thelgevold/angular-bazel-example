
import { Cmp8646Component } from './cmp';
describe('Cmp8646Component', () => {
  it('should add', () => {
    expect(new Cmp8646Component().add8646(1)).toBe(8647);
  });
});
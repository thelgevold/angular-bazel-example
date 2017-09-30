
import { Cmp8068Component } from './cmp';
describe('Cmp8068Component', () => {
  it('should add', () => {
    expect(new Cmp8068Component().add8068(1)).toBe(8069);
  });
});
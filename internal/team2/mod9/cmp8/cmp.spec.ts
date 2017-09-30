
import { Cmp8298Component } from './cmp';
describe('Cmp8298Component', () => {
  it('should add', () => {
    expect(new Cmp8298Component().add8298(1)).toBe(8299);
  });
});
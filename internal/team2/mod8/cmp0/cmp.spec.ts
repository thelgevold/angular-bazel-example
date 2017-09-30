
import { Cmp8280Component } from './cmp';
describe('Cmp8280Component', () => {
  it('should add', () => {
    expect(new Cmp8280Component().add8280(1)).toBe(8281);
  });
});
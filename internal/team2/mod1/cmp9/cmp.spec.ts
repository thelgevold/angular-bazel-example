
import { Cmp8219Component } from './cmp';
describe('Cmp8219Component', () => {
  it('should add', () => {
    expect(new Cmp8219Component().add8219(1)).toBe(8220);
  });
});
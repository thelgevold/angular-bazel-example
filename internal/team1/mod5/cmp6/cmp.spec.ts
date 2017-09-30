
import { Cmp8156Component } from './cmp';
describe('Cmp8156Component', () => {
  it('should add', () => {
    expect(new Cmp8156Component().add8156(1)).toBe(8157);
  });
});
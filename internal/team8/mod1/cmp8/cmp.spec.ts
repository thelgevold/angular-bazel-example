
import { Cmp8818Component } from './cmp';
describe('Cmp8818Component', () => {
  it('should add', () => {
    expect(new Cmp8818Component().add8818(1)).toBe(8819);
  });
});

import { Cmp8532Component } from './cmp';
describe('Cmp8532Component', () => {
  it('should add', () => {
    expect(new Cmp8532Component().add8532(1)).toBe(8533);
  });
});
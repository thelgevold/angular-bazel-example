
import { Cmp8131Component } from './cmp';
describe('Cmp8131Component', () => {
  it('should add', () => {
    expect(new Cmp8131Component().add8131(1)).toBe(8132);
  });
});
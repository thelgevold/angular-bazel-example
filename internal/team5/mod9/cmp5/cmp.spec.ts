
import { Cmp8595Component } from './cmp';
describe('Cmp8595Component', () => {
  it('should add', () => {
    expect(new Cmp8595Component().add8595(1)).toBe(8596);
  });
});
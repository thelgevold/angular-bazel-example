
import { Cmp8835Component } from './cmp';
describe('Cmp8835Component', () => {
  it('should add', () => {
    expect(new Cmp8835Component().add8835(1)).toBe(8836);
  });
});
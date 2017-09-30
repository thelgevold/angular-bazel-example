
import { Cmp8830Component } from './cmp';
describe('Cmp8830Component', () => {
  it('should add', () => {
    expect(new Cmp8830Component().add8830(1)).toBe(8831);
  });
});

import { Cmp8657Component } from './cmp';
describe('Cmp8657Component', () => {
  it('should add', () => {
    expect(new Cmp8657Component().add8657(1)).toBe(8658);
  });
});
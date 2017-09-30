
import { Cmp8702Component } from './cmp';
describe('Cmp8702Component', () => {
  it('should add', () => {
    expect(new Cmp8702Component().add8702(1)).toBe(8703);
  });
});
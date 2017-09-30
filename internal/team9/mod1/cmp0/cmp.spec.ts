
import { Cmp8910Component } from './cmp';
describe('Cmp8910Component', () => {
  it('should add', () => {
    expect(new Cmp8910Component().add8910(1)).toBe(8911);
  });
});
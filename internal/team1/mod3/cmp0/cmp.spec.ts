
import { Cmp8130Component } from './cmp';
describe('Cmp8130Component', () => {
  it('should add', () => {
    expect(new Cmp8130Component().add8130(1)).toBe(8131);
  });
});

import { Cmp8512Component } from './cmp';
describe('Cmp8512Component', () => {
  it('should add', () => {
    expect(new Cmp8512Component().add8512(1)).toBe(8513);
  });
});
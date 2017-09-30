
import { Cmp8513Component } from './cmp';
describe('Cmp8513Component', () => {
  it('should add', () => {
    expect(new Cmp8513Component().add8513(1)).toBe(8514);
  });
});
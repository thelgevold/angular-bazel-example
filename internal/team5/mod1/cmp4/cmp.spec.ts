
import { Cmp8514Component } from './cmp';
describe('Cmp8514Component', () => {
  it('should add', () => {
    expect(new Cmp8514Component().add8514(1)).toBe(8515);
  });
});
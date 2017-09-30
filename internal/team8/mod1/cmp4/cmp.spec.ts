
import { Cmp8814Component } from './cmp';
describe('Cmp8814Component', () => {
  it('should add', () => {
    expect(new Cmp8814Component().add8814(1)).toBe(8815);
  });
});
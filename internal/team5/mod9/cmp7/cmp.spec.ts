
import { Cmp8597Component } from './cmp';
describe('Cmp8597Component', () => {
  it('should add', () => {
    expect(new Cmp8597Component().add8597(1)).toBe(8598);
  });
});
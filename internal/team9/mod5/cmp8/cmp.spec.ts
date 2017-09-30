
import { Cmp8958Component } from './cmp';
describe('Cmp8958Component', () => {
  it('should add', () => {
    expect(new Cmp8958Component().add8958(1)).toBe(8959);
  });
});
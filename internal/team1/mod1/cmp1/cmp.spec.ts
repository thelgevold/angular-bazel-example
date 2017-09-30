
import { Cmp8111Component } from './cmp';
describe('Cmp8111Component', () => {
  it('should add', () => {
    expect(new Cmp8111Component().add8111(1)).toBe(8112);
  });
});
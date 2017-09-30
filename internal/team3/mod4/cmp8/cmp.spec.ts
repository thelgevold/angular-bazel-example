
import { Cmp8348Component } from './cmp';
describe('Cmp8348Component', () => {
  it('should add', () => {
    expect(new Cmp8348Component().add8348(1)).toBe(8349);
  });
});
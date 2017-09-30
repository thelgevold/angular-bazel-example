
import { Cmp8815Component } from './cmp';
describe('Cmp8815Component', () => {
  it('should add', () => {
    expect(new Cmp8815Component().add8815(1)).toBe(8816);
  });
});
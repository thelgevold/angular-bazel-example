
import { Cmp8912Component } from './cmp';
describe('Cmp8912Component', () => {
  it('should add', () => {
    expect(new Cmp8912Component().add8912(1)).toBe(8913);
  });
});
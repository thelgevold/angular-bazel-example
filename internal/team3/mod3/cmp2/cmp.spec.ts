
import { Cmp8332Component } from './cmp';
describe('Cmp8332Component', () => {
  it('should add', () => {
    expect(new Cmp8332Component().add8332(1)).toBe(8333);
  });
});
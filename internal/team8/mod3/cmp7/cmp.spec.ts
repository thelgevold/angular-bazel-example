
import { Cmp8837Component } from './cmp';
describe('Cmp8837Component', () => {
  it('should add', () => {
    expect(new Cmp8837Component().add8837(1)).toBe(8838);
  });
});
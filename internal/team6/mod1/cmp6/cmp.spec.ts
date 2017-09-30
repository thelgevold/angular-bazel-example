
import { Cmp8616Component } from './cmp';
describe('Cmp8616Component', () => {
  it('should add', () => {
    expect(new Cmp8616Component().add8616(1)).toBe(8617);
  });
});
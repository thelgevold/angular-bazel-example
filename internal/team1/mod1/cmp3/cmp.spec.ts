
import { Cmp8113Component } from './cmp';
describe('Cmp8113Component', () => {
  it('should add', () => {
    expect(new Cmp8113Component().add8113(1)).toBe(8114);
  });
});

import { Cmp8114Component } from './cmp';
describe('Cmp8114Component', () => {
  it('should add', () => {
    expect(new Cmp8114Component().add8114(1)).toBe(8115);
  });
});
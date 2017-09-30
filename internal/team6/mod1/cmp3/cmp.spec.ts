
import { Cmp8613Component } from './cmp';
describe('Cmp8613Component', () => {
  it('should add', () => {
    expect(new Cmp8613Component().add8613(1)).toBe(8614);
  });
});
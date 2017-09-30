
import { Cmp8423Component } from './cmp';
describe('Cmp8423Component', () => {
  it('should add', () => {
    expect(new Cmp8423Component().add8423(1)).toBe(8424);
  });
});
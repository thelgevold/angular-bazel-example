
import { Cmp8341Component } from './cmp';
describe('Cmp8341Component', () => {
  it('should add', () => {
    expect(new Cmp8341Component().add8341(1)).toBe(8342);
  });
});
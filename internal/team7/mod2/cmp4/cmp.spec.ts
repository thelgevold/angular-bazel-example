
import { Cmp8724Component } from './cmp';
describe('Cmp8724Component', () => {
  it('should add', () => {
    expect(new Cmp8724Component().add8724(1)).toBe(8725);
  });
});
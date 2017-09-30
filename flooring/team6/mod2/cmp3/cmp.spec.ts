
import { Cmp5623Component } from './cmp';
describe('Cmp5623Component', () => {
  it('should add', () => {
    expect(new Cmp5623Component().add5623(1)).toBe(5624);
  });
});

import { Cmp5622Component } from './cmp';
describe('Cmp5622Component', () => {
  it('should add', () => {
    expect(new Cmp5622Component().add5622(1)).toBe(5623);
  });
});
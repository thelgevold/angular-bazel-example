
import { Cmp2256Component } from './cmp';
describe('Cmp2256Component', () => {
  it('should add', () => {
    expect(new Cmp2256Component().add2256(1)).toBe(2257);
  });
});
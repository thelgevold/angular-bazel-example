
import { Cmp5761Component } from './cmp';
describe('Cmp5761Component', () => {
  it('should add', () => {
    expect(new Cmp5761Component().add5761(1)).toBe(5762);
  });
});
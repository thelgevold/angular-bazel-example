
import { Cmp9122Component } from './cmp';
describe('Cmp9122Component', () => {
  it('should add', () => {
    expect(new Cmp9122Component().add9122(1)).toBe(9123);
  });
});
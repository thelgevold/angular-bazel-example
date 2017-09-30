
import { Cmp5122Component } from './cmp';
describe('Cmp5122Component', () => {
  it('should add', () => {
    expect(new Cmp5122Component().add5122(1)).toBe(5123);
  });
});
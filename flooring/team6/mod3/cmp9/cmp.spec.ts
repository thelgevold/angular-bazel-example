
import { Cmp5639Component } from './cmp';
describe('Cmp5639Component', () => {
  it('should add', () => {
    expect(new Cmp5639Component().add5639(1)).toBe(5640);
  });
});
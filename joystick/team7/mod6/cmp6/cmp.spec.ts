
import { Cmp9766Component } from './cmp';
describe('Cmp9766Component', () => {
  it('should add', () => {
    expect(new Cmp9766Component().add9766(1)).toBe(9767);
  });
});
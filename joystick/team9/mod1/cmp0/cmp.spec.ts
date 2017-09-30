
import { Cmp9910Component } from './cmp';
describe('Cmp9910Component', () => {
  it('should add', () => {
    expect(new Cmp9910Component().add9910(1)).toBe(9911);
  });
});
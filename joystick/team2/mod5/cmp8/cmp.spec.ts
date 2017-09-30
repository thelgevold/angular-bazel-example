
import { Cmp9258Component } from './cmp';
describe('Cmp9258Component', () => {
  it('should add', () => {
    expect(new Cmp9258Component().add9258(1)).toBe(9259);
  });
});
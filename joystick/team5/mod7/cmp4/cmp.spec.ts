
import { Cmp9574Component } from './cmp';
describe('Cmp9574Component', () => {
  it('should add', () => {
    expect(new Cmp9574Component().add9574(1)).toBe(9575);
  });
});
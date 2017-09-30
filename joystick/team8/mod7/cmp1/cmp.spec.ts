
import { Cmp9871Component } from './cmp';
describe('Cmp9871Component', () => {
  it('should add', () => {
    expect(new Cmp9871Component().add9871(1)).toBe(9872);
  });
});
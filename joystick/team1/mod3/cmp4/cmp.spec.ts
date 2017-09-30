
import { Cmp9134Component } from './cmp';
describe('Cmp9134Component', () => {
  it('should add', () => {
    expect(new Cmp9134Component().add9134(1)).toBe(9135);
  });
});
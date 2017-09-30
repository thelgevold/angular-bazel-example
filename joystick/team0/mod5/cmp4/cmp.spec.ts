
import { Cmp9054Component } from './cmp';
describe('Cmp9054Component', () => {
  it('should add', () => {
    expect(new Cmp9054Component().add9054(1)).toBe(9055);
  });
});
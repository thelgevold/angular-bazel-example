
import { Cmp9055Component } from './cmp';
describe('Cmp9055Component', () => {
  it('should add', () => {
    expect(new Cmp9055Component().add9055(1)).toBe(9056);
  });
});
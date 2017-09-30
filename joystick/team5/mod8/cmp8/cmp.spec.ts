
import { Cmp9588Component } from './cmp';
describe('Cmp9588Component', () => {
  it('should add', () => {
    expect(new Cmp9588Component().add9588(1)).toBe(9589);
  });
});

import { Cmp9608Component } from './cmp';
describe('Cmp9608Component', () => {
  it('should add', () => {
    expect(new Cmp9608Component().add9608(1)).toBe(9609);
  });
});
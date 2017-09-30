
import { Cmp9835Component } from './cmp';
describe('Cmp9835Component', () => {
  it('should add', () => {
    expect(new Cmp9835Component().add9835(1)).toBe(9836);
  });
});
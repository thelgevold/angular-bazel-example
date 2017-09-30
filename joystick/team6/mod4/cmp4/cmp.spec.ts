
import { Cmp9644Component } from './cmp';
describe('Cmp9644Component', () => {
  it('should add', () => {
    expect(new Cmp9644Component().add9644(1)).toBe(9645);
  });
});
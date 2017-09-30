
import { Cmp9312Component } from './cmp';
describe('Cmp9312Component', () => {
  it('should add', () => {
    expect(new Cmp9312Component().add9312(1)).toBe(9313);
  });
});

import { Cmp9816Component } from './cmp';
describe('Cmp9816Component', () => {
  it('should add', () => {
    expect(new Cmp9816Component().add9816(1)).toBe(9817);
  });
});
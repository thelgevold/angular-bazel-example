
import { Cmp9544Component } from './cmp';
describe('Cmp9544Component', () => {
  it('should add', () => {
    expect(new Cmp9544Component().add9544(1)).toBe(9545);
  });
});
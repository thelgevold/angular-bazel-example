
import { Cmp9914Component } from './cmp';
describe('Cmp9914Component', () => {
  it('should add', () => {
    expect(new Cmp9914Component().add9914(1)).toBe(9915);
  });
});
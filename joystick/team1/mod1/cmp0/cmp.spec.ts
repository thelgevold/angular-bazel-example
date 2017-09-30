
import { Cmp9110Component } from './cmp';
describe('Cmp9110Component', () => {
  it('should add', () => {
    expect(new Cmp9110Component().add9110(1)).toBe(9111);
  });
});
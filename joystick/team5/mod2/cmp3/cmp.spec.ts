
import { Cmp9523Component } from './cmp';
describe('Cmp9523Component', () => {
  it('should add', () => {
    expect(new Cmp9523Component().add9523(1)).toBe(9524);
  });
});
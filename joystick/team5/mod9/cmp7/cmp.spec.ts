
import { Cmp9597Component } from './cmp';
describe('Cmp9597Component', () => {
  it('should add', () => {
    expect(new Cmp9597Component().add9597(1)).toBe(9598);
  });
});
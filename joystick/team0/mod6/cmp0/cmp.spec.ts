
import { Cmp9060Component } from './cmp';
describe('Cmp9060Component', () => {
  it('should add', () => {
    expect(new Cmp9060Component().add9060(1)).toBe(9061);
  });
});
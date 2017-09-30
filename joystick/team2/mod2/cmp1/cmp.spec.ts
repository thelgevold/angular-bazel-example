
import { Cmp9221Component } from './cmp';
describe('Cmp9221Component', () => {
  it('should add', () => {
    expect(new Cmp9221Component().add9221(1)).toBe(9222);
  });
});
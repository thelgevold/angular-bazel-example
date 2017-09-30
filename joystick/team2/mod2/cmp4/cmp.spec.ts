
import { Cmp9224Component } from './cmp';
describe('Cmp9224Component', () => {
  it('should add', () => {
    expect(new Cmp9224Component().add9224(1)).toBe(9225);
  });
});
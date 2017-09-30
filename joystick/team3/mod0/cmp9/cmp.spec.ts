
import { Cmp9309Component } from './cmp';
describe('Cmp9309Component', () => {
  it('should add', () => {
    expect(new Cmp9309Component().add9309(1)).toBe(9310);
  });
});
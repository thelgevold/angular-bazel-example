
import { Cmp6309Component } from './cmp';
describe('Cmp6309Component', () => {
  it('should add', () => {
    expect(new Cmp6309Component().add6309(1)).toBe(6310);
  });
});
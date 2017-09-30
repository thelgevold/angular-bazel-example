
import { Cmp6539Component } from './cmp';
describe('Cmp6539Component', () => {
  it('should add', () => {
    expect(new Cmp6539Component().add6539(1)).toBe(6540);
  });
});

import { Cmp6632Component } from './cmp';
describe('Cmp6632Component', () => {
  it('should add', () => {
    expect(new Cmp6632Component().add6632(1)).toBe(6633);
  });
});
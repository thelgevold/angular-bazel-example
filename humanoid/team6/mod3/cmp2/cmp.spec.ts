
import { Cmp7632Component } from './cmp';
describe('Cmp7632Component', () => {
  it('should add', () => {
    expect(new Cmp7632Component().add7632(1)).toBe(7633);
  });
});

import { Cmp6432Component } from './cmp';
describe('Cmp6432Component', () => {
  it('should add', () => {
    expect(new Cmp6432Component().add6432(1)).toBe(6433);
  });
});

import { Cmp6852Component } from './cmp';
describe('Cmp6852Component', () => {
  it('should add', () => {
    expect(new Cmp6852Component().add6852(1)).toBe(6853);
  });
});
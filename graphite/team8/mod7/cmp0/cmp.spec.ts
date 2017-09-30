
import { Cmp6870Component } from './cmp';
describe('Cmp6870Component', () => {
  it('should add', () => {
    expect(new Cmp6870Component().add6870(1)).toBe(6871);
  });
});

import { Cmp6358Component } from './cmp';
describe('Cmp6358Component', () => {
  it('should add', () => {
    expect(new Cmp6358Component().add6358(1)).toBe(6359);
  });
});
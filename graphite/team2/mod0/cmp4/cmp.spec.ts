
import { Cmp6204Component } from './cmp';
describe('Cmp6204Component', () => {
  it('should add', () => {
    expect(new Cmp6204Component().add6204(1)).toBe(6205);
  });
});
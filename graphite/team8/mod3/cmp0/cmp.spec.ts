
import { Cmp6830Component } from './cmp';
describe('Cmp6830Component', () => {
  it('should add', () => {
    expect(new Cmp6830Component().add6830(1)).toBe(6831);
  });
});
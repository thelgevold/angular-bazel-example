
import { Cmp6513Component } from './cmp';
describe('Cmp6513Component', () => {
  it('should add', () => {
    expect(new Cmp6513Component().add6513(1)).toBe(6514);
  });
});
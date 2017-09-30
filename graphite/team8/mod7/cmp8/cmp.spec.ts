
import { Cmp6878Component } from './cmp';
describe('Cmp6878Component', () => {
  it('should add', () => {
    expect(new Cmp6878Component().add6878(1)).toBe(6879);
  });
});
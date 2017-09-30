
import { Cmp6597Component } from './cmp';
describe('Cmp6597Component', () => {
  it('should add', () => {
    expect(new Cmp6597Component().add6597(1)).toBe(6598);
  });
});
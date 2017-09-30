
import { Cmp6060Component } from './cmp';
describe('Cmp6060Component', () => {
  it('should add', () => {
    expect(new Cmp6060Component().add6060(1)).toBe(6061);
  });
});
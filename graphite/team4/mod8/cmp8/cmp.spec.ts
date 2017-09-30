
import { Cmp6488Component } from './cmp';
describe('Cmp6488Component', () => {
  it('should add', () => {
    expect(new Cmp6488Component().add6488(1)).toBe(6489);
  });
});
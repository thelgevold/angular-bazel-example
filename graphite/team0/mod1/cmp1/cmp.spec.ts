
import { Cmp6011Component } from './cmp';
describe('Cmp6011Component', () => {
  it('should add', () => {
    expect(new Cmp6011Component().add6011(1)).toBe(6012);
  });
});
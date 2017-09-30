
import { Cmp6072Component } from './cmp';
describe('Cmp6072Component', () => {
  it('should add', () => {
    expect(new Cmp6072Component().add6072(1)).toBe(6073);
  });
});
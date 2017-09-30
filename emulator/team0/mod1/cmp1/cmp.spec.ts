
import { Cmp4011Component } from './cmp';
describe('Cmp4011Component', () => {
  it('should add', () => {
    expect(new Cmp4011Component().add4011(1)).toBe(4012);
  });
});

import { Cmp6914Component } from './cmp';
describe('Cmp6914Component', () => {
  it('should add', () => {
    expect(new Cmp6914Component().add6914(1)).toBe(6915);
  });
});
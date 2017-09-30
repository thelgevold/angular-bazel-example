
import { Cmp4914Component } from './cmp';
describe('Cmp4914Component', () => {
  it('should add', () => {
    expect(new Cmp4914Component().add4914(1)).toBe(4915);
  });
});

import { Cmp6035Component } from './cmp';
describe('Cmp6035Component', () => {
  it('should add', () => {
    expect(new Cmp6035Component().add6035(1)).toBe(6036);
  });
});
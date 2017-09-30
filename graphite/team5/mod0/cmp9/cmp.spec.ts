
import { Cmp6509Component } from './cmp';
describe('Cmp6509Component', () => {
  it('should add', () => {
    expect(new Cmp6509Component().add6509(1)).toBe(6510);
  });
});
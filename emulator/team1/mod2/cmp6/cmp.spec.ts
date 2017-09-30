
import { Cmp4126Component } from './cmp';
describe('Cmp4126Component', () => {
  it('should add', () => {
    expect(new Cmp4126Component().add4126(1)).toBe(4127);
  });
});
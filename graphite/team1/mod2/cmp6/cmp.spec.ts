
import { Cmp6126Component } from './cmp';
describe('Cmp6126Component', () => {
  it('should add', () => {
    expect(new Cmp6126Component().add6126(1)).toBe(6127);
  });
});
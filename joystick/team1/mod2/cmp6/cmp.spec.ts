
import { Cmp9126Component } from './cmp';
describe('Cmp9126Component', () => {
  it('should add', () => {
    expect(new Cmp9126Component().add9126(1)).toBe(9127);
  });
});
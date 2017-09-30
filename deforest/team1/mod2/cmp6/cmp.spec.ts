
import { Cmp3126Component } from './cmp';
describe('Cmp3126Component', () => {
  it('should add', () => {
    expect(new Cmp3126Component().add3126(1)).toBe(3127);
  });
});
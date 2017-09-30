
import { Cmp7126Component } from './cmp';
describe('Cmp7126Component', () => {
  it('should add', () => {
    expect(new Cmp7126Component().add7126(1)).toBe(7127);
  });
});
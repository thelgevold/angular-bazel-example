
import { Cmp5126Component } from './cmp';
describe('Cmp5126Component', () => {
  it('should add', () => {
    expect(new Cmp5126Component().add5126(1)).toBe(5127);
  });
});
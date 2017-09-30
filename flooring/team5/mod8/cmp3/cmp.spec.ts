
import { Cmp5583Component } from './cmp';
describe('Cmp5583Component', () => {
  it('should add', () => {
    expect(new Cmp5583Component().add5583(1)).toBe(5584);
  });
});
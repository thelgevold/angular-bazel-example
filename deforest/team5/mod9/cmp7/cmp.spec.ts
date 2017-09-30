
import { Cmp3597Component } from './cmp';
describe('Cmp3597Component', () => {
  it('should add', () => {
    expect(new Cmp3597Component().add3597(1)).toBe(3598);
  });
});
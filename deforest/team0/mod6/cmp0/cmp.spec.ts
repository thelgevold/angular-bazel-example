
import { Cmp3060Component } from './cmp';
describe('Cmp3060Component', () => {
  it('should add', () => {
    expect(new Cmp3060Component().add3060(1)).toBe(3061);
  });
});
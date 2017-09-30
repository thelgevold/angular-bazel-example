
import { Cmp4060Component } from './cmp';
describe('Cmp4060Component', () => {
  it('should add', () => {
    expect(new Cmp4060Component().add4060(1)).toBe(4061);
  });
});
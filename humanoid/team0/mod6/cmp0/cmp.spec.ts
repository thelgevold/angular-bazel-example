
import { Cmp7060Component } from './cmp';
describe('Cmp7060Component', () => {
  it('should add', () => {
    expect(new Cmp7060Component().add7060(1)).toBe(7061);
  });
});
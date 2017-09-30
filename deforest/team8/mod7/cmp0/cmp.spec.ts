
import { Cmp3870Component } from './cmp';
describe('Cmp3870Component', () => {
  it('should add', () => {
    expect(new Cmp3870Component().add3870(1)).toBe(3871);
  });
});
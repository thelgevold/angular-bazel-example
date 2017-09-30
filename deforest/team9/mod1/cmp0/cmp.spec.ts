
import { Cmp3910Component } from './cmp';
describe('Cmp3910Component', () => {
  it('should add', () => {
    expect(new Cmp3910Component().add3910(1)).toBe(3911);
  });
});
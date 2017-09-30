
import { Cmp3595Component } from './cmp';
describe('Cmp3595Component', () => {
  it('should add', () => {
    expect(new Cmp3595Component().add3595(1)).toBe(3596);
  });
});

import { Cmp3926Component } from './cmp';
describe('Cmp3926Component', () => {
  it('should add', () => {
    expect(new Cmp3926Component().add3926(1)).toBe(3927);
  });
});
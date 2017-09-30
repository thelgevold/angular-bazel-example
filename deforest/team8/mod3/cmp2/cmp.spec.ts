
import { Cmp3832Component } from './cmp';
describe('Cmp3832Component', () => {
  it('should add', () => {
    expect(new Cmp3832Component().add3832(1)).toBe(3833);
  });
});
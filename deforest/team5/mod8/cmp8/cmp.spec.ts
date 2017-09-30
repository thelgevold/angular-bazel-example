
import { Cmp3588Component } from './cmp';
describe('Cmp3588Component', () => {
  it('should add', () => {
    expect(new Cmp3588Component().add3588(1)).toBe(3589);
  });
});
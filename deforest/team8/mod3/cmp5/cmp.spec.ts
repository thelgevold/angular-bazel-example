
import { Cmp3835Component } from './cmp';
describe('Cmp3835Component', () => {
  it('should add', () => {
    expect(new Cmp3835Component().add3835(1)).toBe(3836);
  });
});
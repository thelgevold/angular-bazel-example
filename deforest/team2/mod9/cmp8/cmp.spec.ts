
import { Cmp3298Component } from './cmp';
describe('Cmp3298Component', () => {
  it('should add', () => {
    expect(new Cmp3298Component().add3298(1)).toBe(3299);
  });
});
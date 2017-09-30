
import { Cmp3256Component } from './cmp';
describe('Cmp3256Component', () => {
  it('should add', () => {
    expect(new Cmp3256Component().add3256(1)).toBe(3257);
  });
});
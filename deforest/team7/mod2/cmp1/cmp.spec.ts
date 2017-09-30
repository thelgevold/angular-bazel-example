
import { Cmp3721Component } from './cmp';
describe('Cmp3721Component', () => {
  it('should add', () => {
    expect(new Cmp3721Component().add3721(1)).toBe(3722);
  });
});
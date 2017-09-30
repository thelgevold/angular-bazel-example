
import { Cmp3512Component } from './cmp';
describe('Cmp3512Component', () => {
  it('should add', () => {
    expect(new Cmp3512Component().add3512(1)).toBe(3513);
  });
});
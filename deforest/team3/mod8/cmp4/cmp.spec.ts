
import { Cmp3384Component } from './cmp';
describe('Cmp3384Component', () => {
  it('should add', () => {
    expect(new Cmp3384Component().add3384(1)).toBe(3385);
  });
});
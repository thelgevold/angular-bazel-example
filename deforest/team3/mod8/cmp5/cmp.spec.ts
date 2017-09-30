
import { Cmp3385Component } from './cmp';
describe('Cmp3385Component', () => {
  it('should add', () => {
    expect(new Cmp3385Component().add3385(1)).toBe(3386);
  });
});
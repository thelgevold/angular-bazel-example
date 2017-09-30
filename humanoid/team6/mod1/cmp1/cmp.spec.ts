
import { Cmp7611Component } from './cmp';
describe('Cmp7611Component', () => {
  it('should add', () => {
    expect(new Cmp7611Component().add7611(1)).toBe(7612);
  });
});
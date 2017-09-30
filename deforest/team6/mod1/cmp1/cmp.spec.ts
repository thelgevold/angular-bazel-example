
import { Cmp3611Component } from './cmp';
describe('Cmp3611Component', () => {
  it('should add', () => {
    expect(new Cmp3611Component().add3611(1)).toBe(3612);
  });
});

import { Cmp3114Component } from './cmp';
describe('Cmp3114Component', () => {
  it('should add', () => {
    expect(new Cmp3114Component().add3114(1)).toBe(3115);
  });
});
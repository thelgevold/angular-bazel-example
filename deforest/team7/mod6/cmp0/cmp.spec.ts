
import { Cmp3760Component } from './cmp';
describe('Cmp3760Component', () => {
  it('should add', () => {
    expect(new Cmp3760Component().add3760(1)).toBe(3761);
  });
});
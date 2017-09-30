
import { Cmp3224Component } from './cmp';
describe('Cmp3224Component', () => {
  it('should add', () => {
    expect(new Cmp3224Component().add3224(1)).toBe(3225);
  });
});
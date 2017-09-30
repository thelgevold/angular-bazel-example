
import { Cmp3960Component } from './cmp';
describe('Cmp3960Component', () => {
  it('should add', () => {
    expect(new Cmp3960Component().add3960(1)).toBe(3961);
  });
});
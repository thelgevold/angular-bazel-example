
import { Cmp3033Component } from './cmp';
describe('Cmp3033Component', () => {
  it('should add', () => {
    expect(new Cmp3033Component().add3033(1)).toBe(3034);
  });
});
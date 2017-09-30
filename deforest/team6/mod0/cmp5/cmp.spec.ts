
import { Cmp3605Component } from './cmp';
describe('Cmp3605Component', () => {
  it('should add', () => {
    expect(new Cmp3605Component().add3605(1)).toBe(3606);
  });
});